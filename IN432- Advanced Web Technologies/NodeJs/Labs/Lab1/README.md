# Lab 01-04: Simple Note-Taking API

## 📋 Objective

Create a simple HTTP server that can save and retrieve notes using Node.js core modules (http, fs, path) with async/await and events.

## 🎯 Learning Goals

- Use `http` module to create a server
- Use `fs` module to read/write files
- Use `path` module for file paths
- Use `async/await` for asynchronous operations
- Use `EventEmitter` to log events

## 📝 Requirements

Your server should handle these routes:

1. **GET `/notes`** - Read all notes from `notes.json` and return them as JSON
2. **POST `/notes`** - Add a new note to `notes.json`
3. **GET `/`** - Return a simple welcome message

## 🚀 Getting Started

1. Create a file called `server.js` in this folder
2. Use the template provided in `server-template.js`
3. Fill in the TODO sections
4. Test your server using:

   ```bash
   node server.js
   ```

5. Test with browser or PowerShell:

   ```powershell
   # Get all notes
   Invoke-RestMethod -Uri http://localhost:3000/notes
   
   # Add a note (Method 1: Using single quotes)
   Invoke-RestMethod -Uri http://localhost:3000/notes -Method Post -ContentType "application/json" -Body '{"text":"My first note"}'
   
   # Add a note (Method 2: Using double quotes - escape inner quotes with backtick)
   Invoke-RestMethod -Uri http://localhost:3000/notes -Method Post -ContentType "application/json" -Body "{`"text`":`"My first note`"}"
   
   # Add a note (Method 3: Using a variable - recommended for complex JSON)
   $body = @{text="My first note"} | ConvertTo-Json
   Invoke-RestMethod -Uri http://localhost:3000/notes -Method Post -ContentType "application/json" -Body $body
   ```

## ✅ Checklist

- [ ] Server starts on port 3000
- [ ] GET `/` returns welcome message
- [ ] GET `/notes` reads from `notes.json` and returns JSON
- [ ] POST `/notes` adds a note to `notes.json`
- [ ] Uses `async/await` for file operations
- [ ] Uses `EventEmitter` to log when notes are added
- [ ] Handles errors with try/catch
- [ ] Uses `path` module for file paths

## 📚 Hints

- Use `fs.promises.readFile()` and `fs.promises.writeFile()` for async file operations
- Parse JSON with `JSON.parse()` and stringify with `JSON.stringify()`
- Use `path.join(__dirname, 'notes.json')` for the file path
- Check `req.method` and `req.url` to handle different routes
- Use `EventEmitter` to emit 'noteAdded' event when a note is created

## 🎓 What You'll Practice

- ✅ Node.js core modules (http, fs, path)
- ✅ Async/await with Promises
- ✅ EventEmitter for logging
- ✅ JSON parsing and stringifying
- ✅ HTTP request handling

Good luck! 🚀
