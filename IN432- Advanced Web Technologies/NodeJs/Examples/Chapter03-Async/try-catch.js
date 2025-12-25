// try-catch.js - Error handling with async/await
// Run: node try-catch.js

/*
  📚 Prerequisites:
  - async-apis.js  - Understand async Node.js APIs ⬅️
  - promises.js    - Understand Promises ⬅️
  - async-await.js - Understand async/await ⬅️
  
  This file shows how to handle errors when using async/await.
  Always wrap await in try/catch blocks!
*/

console.log("=== Error Handling Example ===\n");

// Function that might fail
function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id: id, name: 'John' });
      } else {
        reject(new Error('User not found'));
      }
    }, 500);
  });
}

// Using try/catch
async function main() {
  
  // 1. Successful request
  console.log("1. Getting user 1 (valid)...");
  try {
    const user = await getUser(1);
    console.log("   ✅ Success:", user);
  } catch (error) {
    console.log("   ❌ Error:", error.message);
  }
  
  // 2. Failed request
  console.log("\n2. Getting user -1 (invalid)...");
  try {
    const user = await getUser(-1);
    console.log("   ✅ Success:", user);
  } catch (error) {
    console.log("   ❌ Error:", error.message);
  }
  
  console.log("\n✅ Program continues after errors!");
}

main();

/*
  📌 Key Points:
  --------------
  1. Always wrap await in try/catch blocks
  2. Errors from rejected Promises are caught in catch block
  3. Program continues execution even if errors occur
  4. This is the pattern you'll use in Express routes!
  
  📚 Related Files:
  - async-apis.js      - Examples of async Node.js APIs ⬅️
  - promises.js        - Understanding Promises ⬅️
  - async-await.js     - Understanding async/await ⬅️
*/

