# Lab 05-08: Book Library REST API

## 📋 Objective

Create a complete REST API for managing a book library using Express.js, Middleware, MongoDB, and Mongoose. This lab combines concepts from chapters 5, 6, 7, and 8.

## 🎯 Learning Goals

### Chapter 5: Express.js
- Create Express server with routing
- Handle different HTTP methods (GET, POST, PUT, DELETE)
- Use `req.params`, `req.query`, and `req.body`
- Return appropriate HTTP status codes

### Chapter 6: Middleware
- Use `express.json()` to parse request bodies
- Create custom middleware (logger, error handler)
- Understand middleware order

### Chapter 7: Database (MongoDB + Mongoose)
- Create Mongoose models and schemas
- Connect to MongoDB
- Perform CRUD operations (Create, Read, Update, Delete)
- Use query methods (find, findById, findByIdAndUpdate, etc.)

### Chapter 8: Complete REST API
- Build a full REST API
- Handle errors properly
- Use async/await with try/catch

## 📝 Requirements

Your API should handle these endpoints:

### Books Endpoints
1. **GET `/api/books`** - Get all books (with optional query filters)
   - Query params: `?category=fiction&minPrice=10`
2. **GET `/api/books/:id`** - Get a single book by ID
3. **POST `/api/books`** - Create a new book
4. **PUT `/api/books/:id`** - Update a book by ID
5. **DELETE `/api/books/:id`** - Delete a book by ID

### Required Features
- ✅ Express server with proper routing
- ✅ `express.json()` middleware for parsing JSON
- ✅ Custom logger middleware (logs method and URL)
- ✅ MongoDB connection using Mongoose
- ✅ Book model with schema (title, author, category, price, inStock)
- ✅ Error handling with try/catch
- ✅ Proper HTTP status codes (200, 201, 404, 400, 500)
- ✅ 404 handler middleware (catch-all for unknown routes)

## 🚀 Getting Started

### Step 1: Setup Project

```bash
# Navigate to the lab folder
cd NodeJs_Lab_Chap_05_08

# Initialize npm (creates package.json)
npm init -y

# Install required dependencies
npm install express mongoose cors
```

### Step 2: Setup MongoDB

**Option A: MongoDB Atlas (Cloud - Recommended)**
1. Go to [mongodb.com/atlas](https://www.mongodb.com/atlas)
2. Create a free account and cluster
3. Get your connection string

**Option B: Local MongoDB**
1. Install MongoDB locally or use Docker
2. Connection string: `mongodb://localhost:27017/booklibrary`

### Step 3: Use the Template

1. Copy the template file:
   ```bash
   cp index-template.js index.js
   cp models/Book-template.js models/Book.js
   ```

2. Fill in the TODO sections in:
   - `index.js` - Main server file
   - `models/Book.js` - Book model/schema

### Step 4: Start Your Server

```bash
# Update the MongoDB connection string in index.js
# Then start the server:
node index.js
```

### Step 5: Test Your API

Use PowerShell to test:

```powershell
# Get all books
Invoke-RestMethod -Uri http://localhost:3000/api/books

# Get books by category (query parameter)
Invoke-RestMethod -Uri http://localhost:3000/api/books?category=fiction

# Get books with filters
Invoke-RestMethod -Uri http://localhost:3000/api/books?category=fiction&minPrice=10

# Get single book (replace ID)
Invoke-RestMethod -Uri http://localhost:3000/api/books/BOOK_ID_HERE

# Create a book (Method 1: Single quotes)
Invoke-RestMethod -Uri http://localhost:3000/api/books -Method Post -ContentType "application/json" -Body '{"title":"The Great Gatsby","author":"F. Scott Fitzgerald","category":"fiction","price":12.99,"inStock":true}'

# Create a book (Method 2: Using ConvertTo-Json - recommended)
$body = @{
    title = "1984"
    author = "George Orwell"
    category = "fiction"
    price = 10.99
    inStock = $true
} | ConvertTo-Json

Invoke-RestMethod -Uri http://localhost:3000/api/books -Method Post -ContentType "application/json" -Body $body

# Update a book (replace ID)
$body = @{price=9.99} | ConvertTo-Json
Invoke-RestMethod -Uri http://localhost:3000/api/books/BOOK_ID_HERE -Method Put -ContentType "application/json" -Body $body

# Delete a book (replace ID)
Invoke-RestMethod -Uri http://localhost:3000/api/books/BOOK_ID_HERE -Method Delete
```

Or use VS Code REST Client extension with `test-api.http` file.

## ✅ Checklist

### Express Setup (Chapter 5)
- [ ] Express server created
- [ ] Server listens on port 3000
- [ ] All routes respond correctly
- [ ] `req.params` used for route parameters (`:id`)
- [ ] `req.query` used for query parameters (`?category=...`)
- [ ] `req.body` used for POST/PUT data
- [ ] Correct HTTP status codes returned

### Middleware (Chapter 6)
- [ ] `express.json()` middleware added (before routes!)
- [ ] Custom logger middleware created (logs method + URL)
- [ ] Logger middleware calls `next()`
- [ ] 404 handler middleware added (after all routes)
- [ ] Middleware order is correct: json → logger → routes → 404

### Database (Chapter 7)
- [ ] MongoDB connection established
- [ ] Book schema created with required fields
- [ ] Book model exported correctly
- [ ] All CRUD operations work:
  - [ ] `Book.find()` - Get all books
  - [ ] `Book.findById()` - Get one book
  - [ ] `Book.create()` - Create book
  - [ ] `Book.findByIdAndUpdate()` - Update book
  - [ ] `Book.findByIdAndDelete()` - Delete book

### Error Handling (Chapter 8)
- [ ] All async routes use try/catch
- [ ] Errors return appropriate status codes
- [ ] 404 returned when book not found
- [ ] 400 returned for validation errors
- [ ] 500 returned for server errors

## 📚 Hints

### Book Schema Fields
```javascript
{
  title: String, required
  author: String, required
  category: String, required (fiction, non-fiction, science, history, etc.)
  price: Number, required, min: 0
  inStock: Boolean, default: true
  timestamps: true (adds createdAt, updatedAt)
}
```

### Query Filtering (GET /api/books)
```javascript
// Handle query params like: ?category=fiction&minPrice=10
let filter = {};
if (req.query.category) {
  filter.category = req.query.category;
}
if (req.query.minPrice) {
  filter.price = { $gte: parseFloat(req.query.minPrice) };
}
const books = await Book.find(filter);
```

### Middleware Order
```javascript
// 1. JSON parsing (must be first for POST/PUT)
app.use(express.json());

// 2. Logger middleware
app.use((req, res, next) => { ... });

// 3. Your routes
app.get('/api/books', ...);
app.post('/api/books', ...);
// etc.

// 4. 404 handler (must be last)
app.use((req, res) => { ... });
```

## 🎓 What You'll Practice

### Chapter 5: Express.js
- ✅ Express server setup
- ✅ HTTP routing (GET, POST, PUT, DELETE)
- ✅ URL parameters (`req.params`)
- ✅ Query parameters (`req.query`)
- ✅ Request body (`req.body`)
- ✅ HTTP status codes

### Chapter 6: Middleware
- ✅ Built-in middleware (`express.json()`)
- ✅ Custom middleware (logger)
- ✅ Middleware order
- ✅ 404 error handler

### Chapter 7: MongoDB + Mongoose
- ✅ Database connection
- ✅ Schema definition
- ✅ Model creation
- ✅ CRUD operations
- ✅ Query filtering

### Chapter 8: Complete REST API
- ✅ Full CRUD API
- ✅ Error handling
- ✅ Async/await patterns
- ✅ API structure and organization

## 🔍 Testing Tips

1. **Start with simple routes** - Get GET `/api/books` working first
2. **Test one endpoint at a time** - Don't try to build everything at once
3. **Check the console** - Your logger middleware should show all requests
4. **Use MongoDB Compass** - Visual tool to see your database
5. **Check for errors** - Look at console output for connection errors

## 📖 Expected Book Schema

Your Book model should have:
- `_id` - Auto-generated by MongoDB
- `title` - String, required
- `author` - String, required
- `category` - String, required
- `price` - Number, required, minimum 0
- `inStock` - Boolean, default true
- `createdAt` - Auto-generated timestamp
- `updatedAt` - Auto-generated timestamp

## 📂 Solution Files

If you get stuck, solution files are available for reference:
- `index-solution.js` - Complete server solution with all routes and middleware
- `models/Book-solution.js` - Complete Book model with schema definition

**Note:** Try to complete the lab yourself first! Only check the solution if you're really stuck. The learning comes from solving the problems yourself.

Good luck! 🚀
