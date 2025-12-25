// Task Manager Backend - Simple Version
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/taskmanager')
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB error:', err.message));

// Task Schema
const Task = mongoose.model('Task', {
  title: { type: String, required: true },
  completed: { type: Boolean, default: false }
});

// GET all tasks
app.get('/api/tasks', async (req, res) => {
  const tasks = await Task.find().sort({ _id: -1 });
  res.json(tasks);
});

// POST new task
app.post('/api/tasks', async (req, res) => {
  const task = await Task.create({ title: req.body.title });
  res.json(task);
});

// DELETE task
app.delete('/api/tasks/:id', async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

// Toggle complete
app.patch('/api/tasks/:id/toggle', async (req, res) => {
  const task = await Task.findById(req.params.id);
  task.completed = !task.completed;
  await task.save();
  res.json(task);
});

// Welcome
app.get('/', (req, res) => {
  res.json({ message: 'Task Manager API' });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
});
