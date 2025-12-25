// async-await.js - Using async/await in Node.js
// Run: node async-await.js

/*
  ⚠️ IMPORTANT: async/await is built on top of Promises!
  You must understand Promises first.
  
  📚 Prerequisites:
  - async-apis.js  - Understand async Node.js APIs ⬅️
  - promises.js   - Understand Promises ⬅️
  
  async/await is "syntactic sugar" - it makes Promise code
  look like synchronous code, making it easier to read and write.
*/

console.log("=== async/await Example ===\n");

// This function returns a PROMISE (with proper error handling!)
// We can use 'await' to wait for it
function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        // SUCCESS: resolve with the data
        resolve({ id: id, name: 'John Doe' });
      } else {
        // FAILURE: reject with an error
        reject(new Error('User ID must be positive'));
      }
    }, 1000);
  });
}

// Using async/await with try/catch (BEST PRACTICE!)
async function main() {
  try {
    console.log("1. Getting user...");
    
    const user = await getUser(1);  // Wait for result
    
    console.log("2. User:", user);
    
    console.log("\n✅ Done!");
  } catch (error) {
    console.log("❌ Error:", error.message);
  }
}

// Run it
// Try changing getUser(1) to getUser(-1) to see the error!
main();

// ============================================
// Real-World Example: Using fs.promises.readFile
// ============================================

const fs = require('fs').promises;
const path = require('path');

async function readFileExample() {
  try {
    console.log("\n=== Real-World Example: Reading File ===\n");
    
    // Create a test file
    const testFile = path.join(__dirname, 'test-read.txt');
    await fs.writeFile(testFile, 'Hello from async/await!');
    console.log("1. File created");
    
    // Read file using async/await (much cleaner than callbacks!)
    const content = await fs.readFile(testFile, 'utf8');
    console.log("2. File content:", content);
    
    // Clean up
    await fs.unlink(testFile);
    console.log("3. File deleted");
    
    console.log("\n✅ File operations completed!");
  } catch (error) {
    console.log("❌ Error:", error.message);
  }
}

// Run the file example after a delay
setTimeout(() => {
  readFileExample();
}, 2000);

/*
  📌 Comparison: Promise vs async/await
  =====================================
  
  Using Promise .then():
  ----------------------
  getUser(1)
    .then(user => {
      console.log(user);
    })
    .catch(error => {
      console.log(error);
    });
  
  Using async/await:
  ------------------
  async function main() {
    try {
      const user = await getUser(1);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  }
  
  ✅ Both do the same thing!
  async/await is just cleaner and easier to read.
  
  📚 Related Files:
  - async-apis.js      - Examples of async Node.js APIs ⬅️
  - promises.js        - Understanding Promises ⬅️
  - try-catch.js       - Error handling with async/await ➡️
*/
