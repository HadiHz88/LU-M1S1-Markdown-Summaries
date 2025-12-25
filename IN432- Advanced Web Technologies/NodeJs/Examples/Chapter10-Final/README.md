# Task Manager - Simple MERN Application

A simple full-stack task manager app.

## Features

- ✅ Add tasks
- ✅ Mark tasks as complete
- ✅ Delete tasks
- ✅ React frontend + Express backend + MongoDB

## Project Structure

```
Chapter10-Final/
├── backend/
│   ├── index.js        (Express server + all routes)
│   └── package.json
│
└── frontend/
    ├── package.json
    └── src/
        ├── App.jsx     (React app - only uses useState)
        └── App.css
```

## How to Run

### 1. Start MongoDB
Make sure MongoDB is running locally.

### 2. Start Backend
```bash
cd backend
npm install
npm start
```
Backend runs on http://localhost:5000

### 3. Start Frontend
```bash
cd frontend
npm install
npm run dev
```
Frontend runs on http://localhost:5173

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/tasks | Get all tasks |
| POST | /api/tasks | Create task |
| DELETE | /api/tasks/:id | Delete task |
| PATCH | /api/tasks/:id/toggle | Toggle complete |

## Test with PowerShell

```powershell
# Get all tasks
Invoke-RestMethod -Uri http://localhost:5000/api/tasks

# Create task
Invoke-RestMethod -Uri http://localhost:5000/api/tasks -Method Post -ContentType "application/json" -Body '{"title": "Learn Node.js"}'

# Delete task
Invoke-RestMethod -Uri http://localhost:5000/api/tasks/TASK_ID -Method Delete
```
