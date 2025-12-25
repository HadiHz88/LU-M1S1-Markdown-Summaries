// files.js - Working with the fs module
// Run: node files.js

const fs = require('fs');

// 1. Write a file
console.log("1. Writing file...");
fs.writeFileSync('message.txt', 'Hello from Node.js!\nThis is line 2.');
console.log("   ✅ File created: message.txt");

// 2. Read a file
console.log("\n2. Reading file...");
const content = fs.readFileSync('message.txt', 'utf8');
console.log("   File content:");
console.log("   ---");
console.log("   " + content.replace(/\n/g, '\n   '));
console.log("   ---");

// 3. Append to file
console.log("\n3. Appending to file...");
fs.appendFileSync('message.txt', '\nThis line was appended!');
console.log("   ✅ Line appended");

// 4. Read updated file
console.log("\n4. Reading updated file...");
const updatedContent = fs.readFileSync('message.txt', 'utf8');
console.log("   " + updatedContent.replace(/\n/g, '\n   '));

// 5. List files in directory
console.log("\n5. Files in current directory:");
const files = fs.readdirSync('.');
files.forEach(file => {
  console.log("   - " + file);
});

// 6. Check if file exists
console.log("\n6. File existence check:");
console.log("   message.txt exists:", fs.existsSync('message.txt'));
console.log("   unknown.txt exists:", fs.existsSync('unknown.txt'));

// 7. Get file info
console.log("\n7. File information:");
const stats = fs.statSync('message.txt');
console.log("   Size:", stats.size, "bytes");
console.log("   Is File:", stats.isFile());
console.log("   Is Directory:", stats.isDirectory());
console.log("   Created:", stats.birthtime);

console.log("\n✅ All file operations completed!");

