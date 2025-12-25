// api-server.js - Simple JSON API server
// Run: node api-server.js
// Visit: http://localhost:3000

const http = require('http');

const PORT = 3000;

// Sample data
const products = [
  { id: 1, name: 'Laptop', price: 999, category: 'electronics' },
  { id: 2, name: 'Phone', price: 699, category: 'electronics' },
  { id: 3, name: 'Tablet', price: 499, category: 'electronics' },
  { id: 4, name: 'Headphones', price: 199, category: 'accessories' },
  { id: 5, name: 'Mouse', price: 49, category: 'accessories' }
];

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);
  
  // Set JSON headers + CORS (allows React to connect)
  res.writeHead(200, { 
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });
  
  // Simple routing
  if (req.url === '/api/products') {
    res.end(JSON.stringify(products, null, 2));
  } else if (req.url.startsWith('/api/products/')) {
    const id = parseInt(req.url.split('/')[3]);
    const product = products.find(p => p.id === id);
    
    if (product) {
      res.end(JSON.stringify(product, null, 2));
    } else {
      res.writeHead(404);
      res.end(JSON.stringify({ error: 'Product not found' }));
    }
  } else {
    res.end(JSON.stringify({
      message: 'Welcome to the API!',
      endpoints: [
        'GET /api/products - List all products',
        'GET /api/products/:id - Get product by ID'
      ]
    }, null, 2));
  }
});

server.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
  console.log('');
  console.log('Try these URLs:');
  console.log(`  http://localhost:${PORT}/`);
  console.log(`  http://localhost:${PORT}/api/products`);
  console.log(`  http://localhost:${PORT}/api/products/1`);
  console.log('');
  console.log('Press Ctrl+C to stop');
});

