// server-solution.js
// Complete solution for the Note-Taking API Lab

const http = require('http');
const fs = require('fs').promises;  // Use promises version for async/await
const path = require('path');
const EventEmitter = require('events');

// Create an EventEmitter instance
const noteEmitter = new EventEmitter();

// Listen for 'noteAdded' event and log it
noteEmitter.on('noteAdded', (note) => {
  console.log('📝 Note added:', note);
});

// Path to notes.json file
const notesFile = path.join(__dirname, 'notes.json');

// Function to read notes from file
async function readNotes() {
  try {
    const data = await fs.readFile(notesFile, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    // If file doesn't exist, return empty array
    if (error.code === 'ENOENT') {
      return [];
    }
    throw error;
  }
}

// Function to write notes to file
async function writeNotes(notes) {
  await fs.writeFile(notesFile, JSON.stringify(notes, null, 2), 'utf8');
}

// Create the HTTP server
const server = http.createServer(async (req, res) => {
  
  // Set CORS headers (allow browser requests)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Content-Type', 'application/json');
  
  // Handle GET / route
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200);
    res.end(JSON.stringify({ message: 'Welcome to Notes API!' }));
    return;
  }
  
  // Handle GET /notes route
  if (req.method === 'GET' && req.url === '/notes') {
    try {
      const notes = await readNotes();
      res.writeHead(200);
      res.end(JSON.stringify(notes));
    } catch (error) {
      res.writeHead(500);
      res.end(JSON.stringify({ error: error.message }));
    }
    return;
  }
  
  // Handle POST /notes route
  if (req.method === 'POST' && req.url === '/notes') {
    try {
      // Read request body
      let body = '';
      req.on('data', chunk => {
        body += chunk.toString();
      });
      
      req.on('end', async () => {
        try {
          const newNote = JSON.parse(body);
          const notes = await readNotes();
          
          // Add new note with ID and timestamp
          const note = {
            id: notes.length + 1,
            text: newNote.text,
            createdAt: new Date().toISOString()
          };
          notes.push(note);
          
          await writeNotes(notes);
          
          // Emit 'noteAdded' event
          noteEmitter.emit('noteAdded', note);
          
          res.writeHead(201);
          res.end(JSON.stringify(note));
        } catch (error) {
          res.writeHead(400);
          res.end(JSON.stringify({ error: error.message }));
        }
      });
    } catch (error) {
      res.writeHead(500);
      res.end(JSON.stringify({ error: error.message }));
    }
    return;
  }
  
  // Handle 404 for unknown routes
  res.writeHead(404);
  res.end(JSON.stringify({ error: 'Not found' }));
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log('🚀 Server running at http://localhost:3000');
  console.log('📝 Try: curl http://localhost:3000/notes');
});

