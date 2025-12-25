// server-template.js
// Fill in the TODO sections to complete the lab

const http = require('http');
const fs = require('fs').promises;  // Use promises version for async/await
const path = require('path');
const EventEmitter = require('events');

// TODO 1: Create an EventEmitter instance
// const noteEmitter = ???

// TODO 2: Listen for 'noteAdded' event and log it
// noteEmitter.on(???, (note) => {
//   console.log(???, note);
// });

// Path to notes.json file
const notesFile = path.join(__dirname, 'notes.json');

// TODO 3: Create a function to read notes from file
// Use async/await and fs.promises.readFile()
// async function readNotes() {
//   try {
//     const data = await ???
//     return ???
//   } catch (error) {
//     // If file doesn't exist, return empty array
//     if (error.code === 'ENOENT') {
//       return [];
//     }
//     throw error;
//   }
// }

// TODO 4: Create a function to write notes to file
// Use async/await and fs.promises.writeFile()
// async function writeNotes(notes) {
//   await ???
// }

// TODO 5: Create the HTTP server
const server = http.createServer(async (req, res) => {
  
  // Set CORS headers (allow browser requests)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Content-Type', 'application/json');
  
  // TODO 6: Handle GET / route
  // if (req.method === 'GET' && req.url === '/') {
  //   res.writeHead(200);
  //   res.end(JSON.stringify({ message: 'Welcome to Notes API!' }));
  //   return;
  // }
  
  // TODO 7: Handle GET /notes route
  // if (req.method === 'GET' && req.url === '/notes') {
  //   try {
  //     const notes = await ???
  //     res.writeHead(200);
  //     res.end(JSON.stringify(notes));
  //   } catch (error) {
  //     res.writeHead(500);
  //     res.end(JSON.stringify({ error: error.message }));
  //   }
  //   return;
  // }
  
  // TODO 8: Handle POST /notes route
  // if (req.method === 'POST' && req.url === '/notes') {
  //   try {
  //     // Read request body
  //     let body = '';
  //     req.on('data', chunk => {
  //       body += chunk.toString();
  //     });
  //     
  //     req.on('end', async () => {
  //       try {
  //         const newNote = JSON.parse(body);
  //         const notes = await ???
  //         
  //         // Add new note with ID and timestamp
  //         const note = {
  //           id: notes.length + 1,
  //           text: newNote.text,
  //           createdAt: new Date().toISOString()
  //         };
  //         notes.push(note);
  //         
  //         await ???
  //         
  //         // TODO 9: Emit 'noteAdded' event
  //         // noteEmitter.emit(???, note);
  //         
  //         res.writeHead(201);
  //         res.end(JSON.stringify(note));
  //       } catch (error) {
  //         res.writeHead(400);
  //         res.end(JSON.stringify({ error: error.message }));
  //       }
  //     });
  //   } catch (error) {
  //     res.writeHead(500);
  //     res.end(JSON.stringify({ error: error.message }));
  //   }
  //   return;
  // }
  
  // TODO 10: Handle 404 for unknown routes
  // res.writeHead(404);
  // res.end(JSON.stringify({ error: 'Not found' }));
});

// TODO 11: Start the server on port 3000
// server.listen(3000, () => {
//   console.log(???);
// });

