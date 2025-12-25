// models/Book-solution.js
// Complete solution for the Book model
// This covers Chapter 7: MongoDB + Mongoose

const mongoose = require('mongoose');

// Create the Book schema with all required fields and validation
const bookSchema = new mongoose.Schema({
  // Title field - String, required
  title: {
    type: String,
    required: [true, 'Title is required']
  },
  
  // Author field - String, required
  author: {
    type: String,
    required: [true, 'Author is required']
  },
  
  // Category field - String, required
  // Examples: 'fiction', 'non-fiction', 'science', 'history'
  category: {
    type: String,
    required: [true, 'Category is required']
  },
  
  // Price field - Number, required, minimum 0
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price cannot be negative']
  },
  
  // inStock field - Boolean, default: true
  inStock: {
    type: Boolean,
    default: true
  }
}, {
  // Enable timestamps (adds createdAt and updatedAt automatically)
  timestamps: true
});

// Create and export the Book model
const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
