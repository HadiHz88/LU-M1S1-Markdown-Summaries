# 🚀 Quick Start Guide - Book Library API

## Step 1: Install Dependencies

```bash
cd NodeJs_Lab_Chap_05_08
npm init -y
npm install express mongoose cors
```

## Step 2: Copy Templates

```bash
# Copy main server template
cp index-template.js index.js

# Create models folder and copy Book template
mkdir models
cp models/Book-template.js models/Book.js
```

## Step 3: Update MongoDB Connection

Edit `index.js` and update the connection string:

```javascript
// Replace with your MongoDB connection string
const MONGODB_URI = 'mongodb://localhost:27017/booklibrary';
// Or for Atlas: 'mongodb+srv://user:pass@cluster.mongodb.net/booklibrary'
```

## Step 4: Fill in the TODOs

Open `index.js` and `models/Book.js` and complete each TODO section:

### In `models/Book.js`:
- Define the Book schema with all required fields
- Export the Book model

### In `index.js`:
- Set up MongoDB connection
- Create logger middleware
- Create all route handlers (GET, POST, PUT, DELETE)
- Create 404 handler middleware

## Step 5: Start MongoDB

**If using local MongoDB:**
```bash
# Make sure MongoDB is running
# On Windows, MongoDB usually runs as a service
```

**If using MongoDB Atlas:**
- No local setup needed!

## Step 6: Run Your Server

```bash
node index.js
```

You should see:
```
✅ Connected to MongoDB
Server running on http://localhost:3000
```

## Step 7: Test Your API

### Using PowerShell:

```powershell
# Test 1: Get all books
Invoke-RestMethod -Uri http://localhost:3000/api/books

# Test 2: Create a book
$body = @{
    title = "The Great Gatsby"
    author = "F. Scott Fitzgerald"
    category = "fiction"
    price = 12.99
    inStock = $true
} | ConvertTo-Json

Invoke-RestMethod -Uri http://localhost:3000/api/books -Method Post -ContentType "application/json" -Body $body

# Test 3: Get single book (use the _id from previous response)
Invoke-RestMethod -Uri http://localhost:3000/api/books/PUT_ID_HERE

# Test 4: Update book
$body = @{price=9.99} | ConvertTo-Json
Invoke-RestMethod -Uri http://localhost:3000/api/books/PUT_ID_HERE -Method Put -ContentType "application/json" -Body $body

# Test 5: Delete book
Invoke-RestMethod -Uri http://localhost:3000/api/books/PUT_ID_HERE -Method Delete

# Test 6: Query with filters
Invoke-RestMethod -Uri http://localhost:3000/api/books?category=fiction
Invoke-RestMethod -Uri http://localhost:3000/api/books?category=fiction&minPrice=10
```

### Using VS Code REST Client:

Open `test-api.http` and click "Send Request" above each request.

## Step 8: Verify Your Solution

Check the console output - you should see logger messages for each request:
```
GET /api/books
POST /api/books
PUT /api/books/...
DELETE /api/books/...
```

## Step 9: Check the Solution (If You Get Stuck)

If you're having trouble, you can compare your code with the solution files:
- `index-solution.js` - Complete server solution
- `models/Book-solution.js` - Complete Book model solution

**Important:** Try to complete the lab yourself first! Only check the solution if you're really stuck.

## Common Issues

### MongoDB Connection Error
- Check your connection string
- Make sure MongoDB is running (if local)
- Check firewall/network (if Atlas)

### Port Already in Use
```bash
# Change port in index.js to something else (3001, 5000, etc.)
```

### Cannot find module 'mongoose'
```bash
npm install
```

### Request body is undefined
- Make sure `express.json()` middleware is BEFORE your routes!

## Next Steps

Once everything works:
1. Add more fields to the Book schema (description, pages, ISBN, etc.)
2. Add pagination to GET /api/books
3. Add sorting (by price, title, etc.)
4. Add validation for category (enum)

Happy coding! 🎉
