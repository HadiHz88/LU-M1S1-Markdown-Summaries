// promises.js - Understanding Promises in Node.js
// Run: node promises.js
//
// ⚠️ IMPORTANT: Before learning Promises, understand Asynchronous APIs!
// See: async-apis.js for examples of async operations ⬅️

console.log("=== Understanding Promises ===\n");

/*
  📘 What is a Promise?
  ---------------------
  A Promise is an object representing the eventual completion 
  or failure of an asynchronous operation.
  
  💡 Why do we need Promises?
  Remember those asynchronous operations we learned about?
  (setTimeout, fs.readFile, fetch, database queries, etc.)
  Many of them RETURN Promises to handle their results!
  
  Think of it like ordering food at a restaurant:
  - You place an order (create a Promise)
  - You get a receipt/number (the Promise object)
  - You wait...
  - Eventually: food arrives (resolved) OR order fails (rejected)
  
  Promise States:
  1. pending   - Initial state, waiting for result
  2. fulfilled - Operation completed successfully (resolved)
  3. rejected  - Operation failed (rejected)
  
  ─────────────────────────────────────────────────────────────
  
  📌 About resolve and reject:
  ----------------------------
  
  Q: Where are resolve and reject DECLARED?
  A: They are callback functions PROVIDED BY JAVASCRIPT!
     When you write: new Promise((resolve, reject) => { ... })
     JavaScript gives you these two functions automatically.
  
  Q: When do we CALL them?
  A: - Call resolve(value) when the operation SUCCEEDS
     - Call reject(error) when the operation FAILS
  
  Q: What types can they accept?
  A: ANYTHING! String, Number, Object, Array, Error, etc.
  
     resolve("Success");           // String
     resolve(42);                  // Number
     resolve({ id: 1 });           // Object
     resolve([1, 2, 3]);           // Array
     
     reject("Error message");      // String
     reject(404);                  // Number
     reject(new Error("Failed"));  // Error object (RECOMMENDED!)
  
  💡 Best Practice: Use new Error("message") with reject()
     because it includes a stack trace for debugging!
  
  Q: Can I omit reject?
  A: YES! You only declare what you need:
  
     // Only resolve (no error possible)
     new Promise((resolve) => {
       resolve("Always works!");
     });
     
     // Both (error is possible)
     new Promise((resolve, reject) => {
       if (ok) resolve("Success");
       else reject(new Error("Failed"));
     });
     
  ⚠️ In real apps, always include reject - things can fail!
  
  ─────────────────────────────────────────────────────────────
*/

// ============================================
// 1️⃣ Creating a Simple Promise
// ============================================

const myPromise = new Promise((resolve, reject) => {
  // Simulating an async operation (like fetching data)
  const success = true;
  
  setTimeout(() => {
    if (success) {
      resolve("Operation succeeded! ✅");  // Fulfilled
    } else {
      reject("Operation failed! ❌");       // Rejected
    }
  }, 1000);
});

// Using the Promise with .then() and .catch()
console.log("1. Creating a simple Promise...");

myPromise
  .then(result => {
    console.log("   Result:", result);
  })
  .catch(error => {
    console.log("   Error:", error);
  });

// ============================================
// 2️⃣ Promise that simulates database query
// ============================================

function getUser(id) {
  return new Promise((resolve, reject) => {
    console.log("\n2. Fetching user from database...");
    
    setTimeout(() => {
      if (id > 0) {
        // SUCCESS: Call resolve() with the data
        // This value goes to → .then(user => ...)
        resolve({ id: id, name: "Ahmad", email: "ahmad@example.com" });
      } else {
        // FAILURE: Call reject() with an Error object (best practice!)
        // This error goes to → .catch(error => ...)
        reject(new Error("Invalid user ID! Must be positive."));
      }
    }, 1500);
  });
}

// Using the Promise
// Try changing getUser(1) to getUser(-1) to see the error!
getUser(1)
  .then(user => {
    // ✅ resolve() was called → we get the user here
    console.log("   User found:", user);
  })
  .catch(error => {
    // ❌ reject() was called → we get the error here
    console.log("   Error:", error.message);
  });

// ============================================
// 3️⃣ Chaining Promises (multiple .then())
// ============================================

function getProduct(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id: id, name: "Laptop", price: 999 });
    }, 500);
  });
}

function calculateDiscount(product) {
  return new Promise(resolve => {
    setTimeout(() => {
      product.discount = product.price * 0.1;
      product.finalPrice = product.price - product.discount;
      resolve(product);
    }, 500);
  });
}

setTimeout(() => {
  console.log("\n3. Chaining Promises...");
  
  getProduct(101)
    .then(product => {
      console.log("   Got product:", product.name);
      return calculateDiscount(product);  // Return another Promise
    })
    .then(productWithDiscount => {
      console.log("   With discount:", productWithDiscount);
    })
    .catch(error => {
      console.log("   Error:", error);
    });
}, 3000);

// ============================================
// 4️⃣ Promise.all - Run multiple promises together
// ============================================

setTimeout(() => {
  console.log("\n4. Promise.all - Running multiple promises together...");
  
  const promise1 = new Promise(resolve => 
    setTimeout(() => resolve("First done"), 1000)
  );
  const promise2 = new Promise(resolve => 
    setTimeout(() => resolve("Second done"), 500)
  );
  const promise3 = new Promise(resolve => 
    setTimeout(() => resolve("Third done"), 800)
  );
  
  // Wait for ALL promises to complete
  Promise.all([promise1, promise2, promise3])
    .then(results => {
      console.log("   All results:", results);
    });
}, 5000);

// ============================================
// 5️⃣ Real-World Example: fs.promises.readFile
// ============================================

setTimeout(() => {
  console.log("\n5. Real-World Example: fs.promises.readFile returns a Promise...");
  
  const fs = require('fs').promises;
  const path = require('path');
  
  // Create a test file
  const testFile = path.join(__dirname, 'test-promise.txt');
  
  // fs.promises.writeFile returns a Promise!
  fs.writeFile(testFile, 'Hello from Promise!')
    .then(() => {
      console.log("   File written successfully");
      
      // fs.promises.readFile also returns a Promise!
      return fs.readFile(testFile, 'utf8');
    })
    .then(content => {
      console.log("   File content:", content);
      
      // Clean up
      return fs.unlink(testFile);
    })
    .then(() => {
      console.log("   File deleted");
      console.log("\n✅ All examples completed!");
      console.log("\n💡 Notice: fs.promises methods return Promises!");
      console.log("   This is why understanding Promises is so important!");
    })
    .catch(error => {
      console.log("   Error:", error.message);
    });
}, 7000);

/*
  📌 Key Points:
  --------------
  1. Promise = object for async operations
  2. new Promise((resolve, reject) => { ... })
     - resolve and reject are PROVIDED by JavaScript (not declared by you!)
     - Call resolve(value) when SUCCESS → goes to .then()
     - Call reject(error) when FAILURE → goes to .catch()
  3. resolve/reject can accept ANY type (String, Number, Object, Array, Error)
  4. Best practice: Use new Error("message") with reject() for stack traces
  5. .then(result) - handles success (receives what you passed to resolve)
  6. .catch(error) - handles failure (receives what you passed to reject)
  7. Can chain multiple .then()
  8. Promise.all() - wait for multiple promises
  
  ⚠️ Important:
  async/await is just SYNTACTIC SUGAR for Promises!
  It makes Promise code look synchronous and easier to read.
  
  📚 Related Files:
  - async-apis.js      - Examples of async Node.js APIs ⬅️
  - async-await.js     - Cleaner syntax for Promises ➡️
  - try-catch.js       - Error handling with async/await ➡️
*/

