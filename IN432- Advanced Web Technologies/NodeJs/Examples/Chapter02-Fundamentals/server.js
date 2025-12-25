// server.js - Simple HTTP server
// Run: node server.js
// Visit: http://localhost:3000

const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);
  
  // Set response headers
  res.writeHead(200, { 'Content-Type': 'text/html' });
  
  // Send response
  res.end(`
    <html>
      <head>
        <title>My First Node Server</title>
        <style>
          body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
          h1 { color: #3c873a; }
        </style>
      </head>
      <body>
        <h1>🟢 Hello from Node.js!</h1>
        <p>You requested: ${req.method} ${req.url}</p>
        <p>Time: ${new Date().toLocaleString()}</p>
      </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log('Press Ctrl+C to stop');
});

