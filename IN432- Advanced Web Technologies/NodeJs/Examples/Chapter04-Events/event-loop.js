// event-loop.js - Understanding the Event Loop
// Run: node event-loop.js

console.log("=== Event Loop Demo ===\n");

console.log("1. Order of execution:");
console.log("   Watch the numbers - they don't run in order!\n");

console.log("   [1] Script start (synchronous)");

// setTimeout - goes to timer queue
setTimeout(() => {
  console.log("   [4] setTimeout callback (timer queue)");
}, 0);

// Promise - goes to microtask queue (runs before timers!)
Promise.resolve().then(() => {
  console.log("   [3] Promise callback (microtask queue)");
});

// setImmediate (Node.js specific)
setImmediate(() => {
  console.log("   [5] setImmediate callback (check queue)");
});

console.log("   [2] Script end (synchronous)");

/*
Expected output (ALWAYS the same - deterministic!):
   [1] Script start (synchronous)
   [2] Script end (synchronous)
   [3] Promise callback (microtask queue)
   [4] setTimeout callback (timer queue)
   [5] setImmediate callback (check queue)

Why this order?
1. Synchronous code runs first (1, 2)
2. Microtasks (Promises) run next (3)
3. Timers run after microtasks (4)
4. Check queue (setImmediate) runs after timers (5)

✅ This output is PREDICTABLE and will be the same every time you run it!
   The event loop order is a fundamental, consistent behavior of JavaScript.
*/

// 2. Non-blocking I/O demo
setTimeout(() => {
  console.log("\n2. Non-blocking I/O demo:");
  
  const fs = require('fs');
  
  console.log("   Starting file read...");
  
  fs.readFile(__filename, 'utf8', (err, data) => {
    console.log("   File read complete! (" + data.length + " bytes)");
  });
  
  console.log("   This runs while file is being read!");
  
  setTimeout(() => {
    console.log("   Even this runs before file read completes (if file is large)");
  }, 0);
}, 100);

// 3. Simulating multiple requests
setTimeout(() => {
  console.log("\n3. Simulating API server handling multiple requests:");
  
  function handleRequest(id, delay) {
    console.log(`   Request ${id} received`);
    
    setTimeout(() => {
      console.log(`   Response ${id} sent (after ${delay}ms)`);
    }, delay);
  }
  
  // These all start immediately, responses come back later
  handleRequest(1, 300);
  handleRequest(2, 100);
  handleRequest(3, 200);
  
  console.log("   Server continues working (non-blocking!)");
  
  setTimeout(() => {
    console.log("\n✅ Event loop demo complete!");
  }, 500);
}, 200);

