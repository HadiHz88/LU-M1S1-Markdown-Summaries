// index.js - Basic Express server
// Run: npm install && node index.js
// Visit: http://localhost:3000

const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// In-memory data
let products = [
  { id: 1, name: 'Laptop', price: 999, category: 'electronics' },
  { id: 2, name: 'Phone', price: 699, category: 'electronics' },
  { id: 3, name: 'Headphones', price: 199, category: 'accessories' }
];

// Root route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Express.js!',
    endpoints: {
      'GET /products': 'List all products',
      'GET /products/:id': 'Get product by ID',
      'POST /products': 'Create a product',
      'PUT /products/:id': 'Update a product',
      'DELETE /products/:id': 'Delete a product',
      'GET /search?q=...&category=...': 'Search products'
    }
  });
});

// GET all products
app.get('/products', (req, res) => {
  res.json(products);
});

// GET single product by ID
app.get('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  
  res.json(product);
});

// POST - Create a new product
app.post('/products', (req, res) => {
  const { name, price, category } = req.body;
  
  if (!name || !price) {
    return res.status(400).json({ error: 'Name and price are required' });
  }
  
  const newProduct = {
    id: products.length + 1,
    name,
    price,
    category: category || 'general'
  };
  
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT - Update a product
app.put('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  
  product.name = req.body.name || product.name;
  product.price = req.body.price || product.price;
  product.category = req.body.category || product.category;
  
  res.json(product);
});

// DELETE - Remove a product
app.delete('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === id);
  
  if (index === -1) {
    return res.status(404).json({ error: 'Product not found' });
  }
  
  products.splice(index, 1);
  res.json({ message: 'Product deleted successfully' });
});

// Search with query parameters
app.get('/search', (req, res) => {
  let results = [...products];
  
  // Filter by search query
  if (req.query.q) {
    const query = req.query.q.toLowerCase();
    results = results.filter(p => 
      p.name.toLowerCase().includes(query)
    );
  }
  
  // Filter by category
  if (req.query.category) {
    results = results.filter(p => 
      p.category === req.query.category
    );
  }
  
  // Filter by max price
  if (req.query.maxPrice) {
    results = results.filter(p => 
      p.price <= parseInt(req.query.maxPrice)
    );
  }
  
  res.json({
    count: results.length,
    products: results
  });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Express server running at http://localhost:${PORT}`);
  console.log('');
  console.log('Try these endpoints:');
  console.log(`  GET  http://localhost:${PORT}/`);
  console.log(`  GET  http://localhost:${PORT}/products`);
  console.log(`  GET  http://localhost:${PORT}/products/1`);
  console.log(`  GET  http://localhost:${PORT}/search?q=phone`);
  console.log('');
  console.log('Press Ctrl+C to stop');
});

