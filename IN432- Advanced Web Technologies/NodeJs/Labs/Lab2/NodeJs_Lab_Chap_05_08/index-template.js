// index-template.js
// Fill in the TODO sections to complete the Book Library API
// This lab combines concepts from Chapters 5, 6, 7, and 8

const express = require('express');
const mongoose = require('mongoose');
const Book = require('./models/Book');

const app = express();

// TODO 1: Add express.json() middleware
// This middleware parses JSON request bodies
// IMPORTANT: Must be BEFORE your routes!
// app.use(???);

// TODO 2: Create a logger middleware
// This middleware should log the HTTP method and URL for every request
// Don't forget to call next() to continue to the next middleware/route!
// app.use((req, res, next) => {
//   console.log(???);  // Log method and URL (e.g., "GET /api/books")
//   ???();  // Call next() to continue
// });

// TODO 3: Connect to MongoDB
// Use async/await with try/catch
// Connection string: 'mongodb://localhost:27017/booklibrary'
// Or for Atlas: 'mongodb+srv://user:pass@cluster.mongodb.net/booklibrary'
// async function connectDB() {
//   try {
//     await mongoose.connect(???);
//     console.log('✅ Connected to MongoDB');
//   } catch (error) {
//     console.error('❌ MongoDB connection error:', error.message);
//     process.exit(1);
//   }
// }
// connectDB();

// ============================================
// ROUTES
// ============================================

// GET /api/books - Get all books (with optional query filters)
// Query params: ?category=fiction&minPrice=10
app.get('/api/books', async (req, res) => {
  try {
    // TODO 4: Build filter object from query parameters
    // Check req.query.category and req.query.minPrice
    // If category exists, add to filter: filter.category = req.query.category
    // If minPrice exists, add to filter: filter.price = { $gte: parseFloat(req.query.minPrice) }
    let filter = {};
    // if (req.query.category) {
    //   ???
    // }
    // if (req.query.minPrice) {
    //   ???
    // }

    // TODO 5: Find all books matching the filter
    // const books = await Book.???(filter);
    
    // TODO 6: Return books with status 200
    // res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/books/:id - Get a single book by ID
app.get('/api/books/:id', async (req, res) => {
  try {
    // TODO 7: Get the id from req.params
    // const id = req.params.???;

    // TODO 8: Find the book by ID
    // const book = await Book.???(id);

    // TODO 9: Check if book exists
    // If not found, return 404 with error message
    // if (!book) {
    //   return res.status(???).json({ error: 'Book not found' });
    // }

    // TODO 10: Return the book with status 200
    // res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /api/books - Create a new book
app.post('/api/books', async (req, res) => {
  try {
    // TODO 11: Get book data from req.body
    // const { title, author, category, price, inStock } = req.body;

    // TODO 12: Create a new book using Book.create()
    // const book = await Book.create({
    //   title,
    //   author,
    //   category,
    //   price,
    //   inStock
    // });

    // TODO 13: Return the created book with status 201 (Created)
    // res.status(???).json(book);
  } catch (error) {
    // TODO 14: Return 400 (Bad Request) for validation errors
    // res.status(400).json({ error: error.message });
  }
});

// PUT /api/books/:id - Update a book by ID
app.put('/api/books/:id', async (req, res) => {
  try {
    // TODO 15: Get the id from req.params
    // const id = req.params.???;

    // TODO 16: Update the book using findByIdAndUpdate()
    // Use { new: true } to return the updated document
    // Use { runValidators: true } to run schema validators
    // const book = await Book.findByIdAndUpdate(
    //   id,
    //   req.body,
    //   { new: true, runValidators: true }
    // );

    // TODO 17: Check if book exists
    // If not found, return 404 with error message
    // if (!book) {
    //   return res.status(???).json({ error: 'Book not found' });
    // }

    // TODO 18: Return the updated book with status 200
    // res.status(200).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE /api/books/:id - Delete a book by ID
app.delete('/api/books/:id', async (req, res) => {
  try {
    // TODO 19: Get the id from req.params
    // const id = req.params.???;

    // TODO 20: Delete the book using findByIdAndDelete()
    // const book = await Book.???(id);

    // TODO 21: Check if book exists
    // If not found, return 404 with error message
    // if (!book) {
    //   return res.status(???).json({ error: 'Book not found' });
    // }

    // TODO 22: Return success message with status 200
    // res.status(200).json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// TODO 23: Create 404 handler middleware (catch-all for unknown routes)
// This must be AFTER all your routes!
// app.use((req, res) => {
//   res.status(???).json({ error: 'Route not found' });
// });

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
