// index.js - Simple Middleware Example
// Run: npm install && node index.js

const express = require('express');
const path = require('path');
const app = express();

// ============================================
// BUILT-IN MIDDLEWARE
// ============================================

// Parse JSON bodies
app.use(express.json());

// Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// ============================================
// CUSTOM MIDDLEWARE - Logger
// ============================================

function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();  // Don't forget this!
}

app.use(logger);

// ============================================
// ROUTES
// ============================================

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API!' });
});

app.get('/products', (req, res) => {
  res.json([
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Phone', price: 699 }
  ]);
});

app.post('/products', (req, res) => {
  console.log('Received:', req.body);
  res.json({ message: 'Product created', data: req.body });
});

// 404 handler (last)
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// ============================================
// START SERVER
// ============================================

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log('');
  console.log('Try:');
  console.log(`  GET  http://localhost:${PORT}/`);
  console.log(`  GET  http://localhost:${PORT}/products`);
  console.log(`  POST http://localhost:${PORT}/products`);
});
