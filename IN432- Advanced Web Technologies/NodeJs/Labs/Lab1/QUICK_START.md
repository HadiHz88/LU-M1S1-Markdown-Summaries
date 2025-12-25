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

# In another terminal (PowerShell), test it:
Invoke-RestMethod -Uri http://localhost:3000/
Invoke-RestMethod -Uri http://localhost:3000/notes

# POST a new note (use single quotes around JSON)
Invoke-RestMethod -Uri http://localhost:3000/notes -Method Post -ContentType "application/json" -Body '{"text":"Test note"}'

# Alternative: Using ConvertTo-Json (better for complex data)
$body = @{text="Test note"} | ConvertTo-Json
Invoke-RestMethod -Uri http://localhost:3000/notes -Method Post -ContentType "application/json" -Body $body
```

## Step 4: Check the Solution

If you get stuck, compare with `server-solution.js`.

## Expected Output

When you POST a note, you should see in the console:
```
📝 Note added: { id: 1, text: 'Test note', createdAt: '2024-...' }
```

The `notes.json` file will be created automatically with your notes!

