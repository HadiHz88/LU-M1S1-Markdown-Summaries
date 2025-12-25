// index.js - Express + MongoDB example
// Run: npm install && node index.js

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');

const app = express();
app.use(express.json());

// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/chapter07';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => {
    console.error('❌ MongoDB connection error:', err.message);
    console.log('');
    console.log('Make sure MongoDB is running or create a .env file with your MongoDB URI');
  });

// ============================================
// CRUD ROUTES
// ============================================

// GET / - Welcome
app.get('/', (req, res) => {
  res.json({
    message: 'MongoDB + Mongoose Example',
    endpoints: {
      'GET /users': 'List all users',
      'GET /users/:id': 'Get user by ID',
      'POST /users': 'Create user',
      'PUT /users/:id': 'Update user',
      'DELETE /users/:id': 'Delete user'
    }
  });
});

// GET /users - List all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /users/:id - Get user by ID
app.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /users - Create user
app.post('/users', async (req, res) => {
  try {
    const { name, email, age, role } = req.body;
    
    // Validation
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }
    
    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' });
    }
    
    const user = await User.create({ name, email, age, role });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// PUT /users/:id - Update user
app.put('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE /users/:id - Delete user
app.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ============================================
// START SERVER
// ============================================

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log('');
  console.log('Test with PowerShell:');
  console.log(`  # Create user`);
  console.log(`  Invoke-RestMethod -Uri http://localhost:${PORT}/users -Method Post -ContentType "application/json" -Body '{"name": "John", "email": "john@test.com", "age": 25}'`);
  console.log('');
  console.log(`  # List users`);
  console.log(`  Invoke-RestMethod -Uri http://localhost:${PORT}/users`);
});

