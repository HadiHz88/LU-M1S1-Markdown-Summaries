# Chapter 3: Asynchronous Programming

This folder contains examples for understanding asynchronous programming in Node.js.

## 📚 Learning Order

Follow these files in order:

### 1. `async-apis.js` - Start Here! ⭐
**What you'll learn:**
- What operations are asynchronous in Node.js
- Why async operations don't block your code
- Common async APIs: `setTimeout()`, `fs.readFile()`, `fs.writeFile()`, `fetch()`, database queries

**Run:**
```bash
node async-apis.js
```

**Key Concepts:**
- Asynchronous operations run without blocking
- Results come back through callbacks or Promises
- Node.js can handle many operations simultaneously

---

### 2. `promises.js` - Understanding Promises
**What you'll learn:**
- What is a Promise?
- How to create and use Promises
- `.then()` and `.catch()` methods
- How async APIs return Promises
- Promise chaining and `Promise.all()`

**Run:**
```bash
node promises.js
```

**Key Concepts:**
- Promise states: pending, fulfilled, rejected
- `resolve()` and `reject()` functions
- Many async APIs return Promises!

---

### 3. `async-await.js` - Cleaner Promise Syntax
**What you'll learn:**
- `async` and `await` keywords
- How async/await makes Promise code cleaner
- Real-world examples with `fs.promises`
- Comparison: Promise vs async/await

**Run:**
```bash
node async-await.js
```

**Key Concepts:**
- `async` makes a function return a Promise
- `await` waits for a Promise to resolve
- Much cleaner than `.then()` chains!

---

### 4. `try-catch.js` - Error Handling
**What you'll learn:**
- How to handle errors with async/await
- Using `try/catch` blocks
- Best practices for error handling

**Run:**
```bash
node try-catch.js
```

**Key Concepts:**
- Always wrap `await` in `try/catch`
- Errors from rejected Promises go to `catch` block
- This is the pattern you'll use in Express routes!

---

## 🎯 Quick Reference

### Asynchronous Node.js APIs
These operations run without blocking:
- `setTimeout()` - Schedule code to run later
- `fs.readFile()` / `fs.writeFile()` - File operations
- `fetch()` - HTTP requests
- Database queries - MongoDB, MySQL, etc.
- Network operations - Sending/receiving data

### Promise Basics
```javascript
// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
  if (success) {
    resolve(value);  // ✅ Success → goes to .then()
  } else {
    reject(error);   // ❌ Failure → goes to .catch()
  }
});

// Using a Promise
myPromise
  .then(result => console.log(result))
  .catch(error => console.log(error));
```

### async/await Pattern
```javascript
async function main() {
  try {
    const result = await someAsyncOperation();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
```

### Express Route Pattern (You'll use this everywhere!)
```javascript
app.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

---

## 📖 Related Tutorial

See the full tutorial: `NodeJS_Tutorial/03-async-programming.html`

---

## ✅ Checklist

After going through these examples, you should understand:

- [ ] What operations are asynchronous in Node.js
- [ ] Why async operations don't block your code
- [ ] What a Promise is and how it works
- [ ] How to create and use Promises
- [ ] How to use `async/await` syntax
- [ ] How to handle errors with `try/catch`
- [ ] The Express route pattern with async/await

---

Happy learning! 🚀

