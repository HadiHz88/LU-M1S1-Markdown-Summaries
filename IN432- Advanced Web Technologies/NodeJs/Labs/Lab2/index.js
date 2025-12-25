// index-solution.js
// Complete solution for the Book Library API
// This lab combines concepts from Chapters 5, 6, 7, and 8

const express = require('express');
const mongoose = require('mongoose');
const Book = require('./models/Book');

const app = express();

// Middleware: express.json() - Parse JSON request bodies
// IMPORTANT: Must be BEFORE your routes!
app.use(express.json());

// Middleware: Custom logger - Logs every request
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // Continue to next middleware/route
});

// Connect to MongoDB
// Use async/await with try/catch
async function connectDB() {
  try {
    // Update this connection string with your MongoDB URI
    const MONGODB_URI = 'mongodb://localhost:27017/booklibrary';
    // Or for Atlas: 'mongodb+srv://user:pass@cluster.mongodb.net/booklibrary'
    
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
    process.exit(1);
  }
}
connectDB();

// ============================================
// ROUTES
// ============================================

// GET /api/books - Get all books (with optional query filters)
// Query params: ?category=fiction&minPrice=10
app.get('/api/books', async (req, res) => {
  try {
    // Build filter object from query parameters
    let filter = {};
    
    if (req.query.category) {
      filter.category = req.query.category;
    }
    
    if (req.query.minPrice) {
      filter.price = { $gte: parseFloat(req.query.minPrice) };
    }

    // Find all books matching the filter
    const books = await Book.find(filter);
    
    // Return books with status 200
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/books/:id - Get a single book by ID
app.get('/api/books/:id', async (req, res) => {
  try {
    // Get the id from req.params
    const id = req.params.id;

    // Find the book by ID
    const book = await Book.findById(id);

    // Check if book exists
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }

    // Return the book with status 200
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /api/books - Create a new book
app.post('/api/books', async (req, res) => {
  try {
    // Get book data from req.body
    const { title, author, category, price, inStock } = req.body;

    // Create a new book using Book.create()
    const book = await Book.create({
      title,
      author,
      category,
      price,
      inStock
    });

    // Return the created book with status 201 (Created)
    res.status(201).json(book);
  } catch (error) {
    // Return 400 (Bad Request) for validation errors
    res.status(400).json({ error: error.message });
  }
});

// PUT /api/books/:id - Update a book by ID
app.put('/api/books/:id', async (req, res) => {
  try {
    // Get the id from req.params
    const id = req.params.id;

    // Update the book using findByIdAndUpdate()
    // Use { new: true } to return the updated document
    // Use { runValidators: true } to run schema validators
    const book = await Book.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    );

    // Check if book exists
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }

    // Return the updated book with status 200
    res.status(200).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE /api/books/:id - Delete a book by ID
app.delete('/api/books/:id', async (req, res) => {
  try {
    // Get the id from req.params
    const id = req.params.id;

    // Delete the book using findByIdAndDelete()
    const book = await Book.findByIdAndDelete(id);

    // Check if book exists
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }

    // Return success message with status 200
    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 404 handler middleware (catch-all for unknown routes)
// This must be AFTER all your routes!
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
