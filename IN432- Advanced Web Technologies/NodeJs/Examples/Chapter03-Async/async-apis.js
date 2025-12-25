// async-apis.js - Understanding Asynchronous Node.js APIs
// Run: node async-apis.js
//
// This file demonstrates common asynchronous operations in Node.js
// that run without blocking your code.

console.log("=== Asynchronous Node.js APIs ===\n");

const fs = require('fs');
const path = require('path');

/*
  📘 What are Asynchronous APIs?
  -------------------------------
  These Node.js operations run WITHOUT blocking your code:
  
  1. setTimeout()        - Schedule code to run later
  2. fs.readFile()       - Read files from disk
  3. fs.writeFile()      - Write files to disk
  4. fetch()             - Make HTTP requests
  5. Database queries    - MongoDB, MySQL, PostgreSQL operations
  6. Network operations  - Sending/receiving data over network
  
  ⚠️ Key Point: These operations START immediately but DON'T BLOCK.
  Your code continues running while they work in the background.
  Results come back through callbacks or Promises.
*/

// ============================================
// 1️⃣ setTimeout() - Schedule code to run later
// ============================================

console.log("1. setTimeout() Example:");
console.log("   Start");

setTimeout(() => {
  console.log("   This runs after 1 second (non-blocking!)");
}, 1000);

console.log("   End (runs immediately, doesn't wait!)");
console.log("   Notice: 'End' prints BEFORE the setTimeout callback\n");

// ============================================
// 2️⃣ fs.readFile() - Read file asynchronously
// ============================================

console.log("2. fs.readFile() Example:");

// Create a test file first
const testFile = path.join(__dirname, 'test-data.txt');
fs.writeFileSync(testFile, 'Hello from async file read!');

console.log("   Before reading file");

fs.readFile(testFile, 'utf8', (err, data) => {
  // This callback runs AFTER the file is read (non-blocking!)
  if (err) {
    console.log("   Error:", err.message);
  } else {
    console.log("   File content:", data);
  }
  console.log("   (This runs after file read completes)\n");
  
  // Continue with next examples after file read
  demonstrateWriteFile();
});

console.log("   After reading file (but file might not be read yet!)");
console.log("   Notice: This line runs BEFORE the file is read!\n");

// ============================================
// 3️⃣ fs.writeFile() - Write file asynchronously
// ============================================

function demonstrateWriteFile() {
  console.log("3. fs.writeFile() Example:");
  
  const outputFile = path.join(__dirname, 'output.txt');
  const data = 'This file was written asynchronously!';
  
  console.log("   Before writing file");
  
  fs.writeFile(outputFile, data, 'utf8', (err) => {
    // This callback runs AFTER the file is written (non-blocking!)
    if (err) {
      console.log("   Error:", err.message);
    } else {
      console.log("   File written successfully!");
      console.log("   (This runs after file write completes)\n");
    }
    
    // Clean up test files
    setTimeout(() => {
      if (fs.existsSync(testFile)) fs.unlinkSync(testFile);
      if (fs.existsSync(outputFile)) fs.unlinkSync(outputFile);
      console.log("✅ All examples completed!");
      console.log("\n💡 Key Takeaway:");
      console.log("   All these operations started immediately but didn't block.");
      console.log("   Your code continued running while they worked in the background!");
    }, 500);
  });
  
  console.log("   After writing file (but file might not be written yet!)");
  console.log("   Notice: This line runs BEFORE the file is written!\n");
}

// ============================================
// 4️⃣ Simulating Database Query (Promise-based)
// ============================================

console.log("4. Database Query Example (simulated):");

function simulateDatabaseQuery(userId) {
  return new Promise((resolve, reject) => {
    // Simulate database query delay
    setTimeout(() => {
      if (userId > 0) {
        resolve({ id: userId, name: 'John Doe', email: 'john@example.com' });
      } else {
        reject(new Error('Invalid user ID'));
      }
    }, 800);
  });
}

console.log("   Before database query");

simulateDatabaseQuery(1)
  .then(user => {
    console.log("   User found:", user);
    console.log("   (This runs after database responds)\n");
  })
  .catch(error => {
    console.log("   Error:", error.message);
  });

console.log("   After database query (but query might not be done yet!)");
console.log("   Notice: This line runs BEFORE the database responds!\n");

// ============================================
// 5️⃣ Simulating Network Request (fetch-like)
// ============================================

console.log("5. Network Request Example (simulated):");

function simulateFetch(url) {
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      resolve({ data: 'Response from ' + url, status: 200 });
    }, 600);
  });
}

console.log("   Before network request");

simulateFetch('https://api.example.com/data')
  .then(response => {
    console.log("   Response received:", response);
    console.log("   (This runs after network request completes)\n");
  });

console.log("   After network request (but request might not be done yet!)");
console.log("   Notice: This line runs BEFORE the network responds!\n");

/*
  📌 Key Points:
  --------------
  
  1. All these operations are ASYNCHRONOUS (non-blocking)
  2. They START immediately but DON'T WAIT for results
  3. Your code CONTINUES running while they work in background
  4. Results come back through:
     - Callbacks (fs.readFile, fs.writeFile)
     - Promises (fetch, database queries)
     - async/await (we'll learn this next!)
  
  5. This allows Node.js to handle MANY operations simultaneously
     - One user reading a file doesn't block another user
     - Server can handle thousands of requests at once
  
  ⚠️ Important:
  These operations return Promises or use callbacks.
  We'll learn how to handle them properly with async/await!
  
  See: promises.js and async-await.js for how to work with these ➡️
*/

