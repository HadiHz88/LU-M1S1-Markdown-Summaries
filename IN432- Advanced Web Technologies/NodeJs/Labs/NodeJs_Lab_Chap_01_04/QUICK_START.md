# 🚀 Quick Start Guide

## Step 1: Copy the Template

```bash
cp server-template.js server.js
```

## Step 2: Fill in the TODOs

Open `server.js` and complete each TODO section. Refer to the chapters:
- **Chapter 2**: http, fs, path modules
- **Chapter 3**: async/await, Promises
- **Chapter 4**: EventEmitter

## Step 3: Test Your Solution

```bash
# Start your server
node server.js

# In another terminal, test it:
curl http://localhost:3000/
curl http://localhost:3000/notes
curl -X POST http://localhost:3000/notes -H "Content-Type: application/json" -d '{"text":"Test note"}'
```

## Step 4: Check the Solution

If you get stuck, compare with `server-solution.js`.

## Expected Output

When you POST a note, you should see in the console:
```
📝 Note added: { id: 1, text: 'Test note', createdAt: '2024-...' }
```

The `notes.json` file will be created automatically with your notes!

