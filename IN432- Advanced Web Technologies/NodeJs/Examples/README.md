# 🟢 Node.js Tutorial Examples

Simple, easy to understand examples for each chapter.

## Prerequisites

1. **Node.js** - Download from [nodejs.org](https://nodejs.org)
2. **MongoDB** - For chapters 7-10 (local or [MongoDB Atlas](https://www.mongodb.com/atlas))

---

## How to Run

### Simple Examples (Chapters 2-4)
```bash
cd Chapter02-Fundamentals
node hello.js
```

### Express Examples (Chapters 5-8)
```bash
cd Chapter05-Express
npm install
node index.js
# Visit http://localhost:3000
```

### Final Project (Chapter 10)
```bash
# Terminal 1 - Backend
cd Chapter10-Final/backend
npm install
npm start

# Terminal 2 - Frontend
cd Chapter10-Final/frontend
npm install
npm run dev
```

---

## Testing the API

### Option 1: VS Code REST Client
1. Install "REST Client" extension
2. Open `test-api.http` file
3. Click "Send Request"

### Option 2: PowerShell
```powershell
Invoke-RestMethod -Uri http://localhost:3000/api/products
```

### Option 3: Browser
Visit http://localhost:3000/api/products

---

## Labs

### Lab 01-04: Simple Note-Taking API
Practice chapters 1-4 by building a simple HTTP server:
- Uses `http`, `fs`, `path` modules
- Uses `async/await` for file operations
- Uses `EventEmitter` for logging
- Simple REST API (GET/POST)

```bash
cd "NodeJS Labs/NodeJs_Lab_Chap_01_04"
# Use server-template.js to complete the lab
# Check server-solution.js for the answer
node server-solution.js
```

---

## Chapter Overview

| Folder | What You Learn |
|--------|----------------|
| Chapter02-Fundamentals | Node basics: http, fs, path |
| Chapter03-Async | Async APIs (setTimeout, fs.readFile, fetch, DB queries), Promises, async/await |
| Chapter04-Events | EventEmitter |
| Chapter05-Express | Express server + routing |
| Chapter06-Middleware | express.json(), logger |
| Chapter07-Database | MongoDB + Mongoose |
| Chapter08-API | Simple REST API |
| Chapter10-Final | Task Manager (React + Express + MongoDB) |

---

## Notes

- ✅ All examples are **simple and easy**
- ✅ React uses **only useState**
- ✅ **No authentication** - keep it simple
- ✅ Each folder has its own package.json

Happy coding! 🚀
