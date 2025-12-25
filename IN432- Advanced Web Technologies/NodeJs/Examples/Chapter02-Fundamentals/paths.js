// paths.js - Working with the path module
// Run: node paths.js

const path = require('path');

console.log("=== Path Module Examples ===\n");

// 1. Join paths safely
console.log("1. Joining paths:");
const fullPath = path.join(__dirname, 'data', 'users.json');
console.log("   path.join(__dirname, 'data', 'users.json')");
console.log("   Result:", fullPath);

// 2. Get file extension
console.log("\n2. File extensions:");
console.log("   photo.jpg →", path.extname('photo.jpg'));
console.log("   document.pdf →", path.extname('document.pdf'));
console.log("   index.html →", path.extname('index.html'));
console.log("   README →", path.extname('README'));

// 3. Get filename
console.log("\n3. Get filename (basename):");
console.log("   /users/data/file.txt →", path.basename('/users/data/file.txt'));
console.log("   With extension removed →", path.basename('/users/data/file.txt', '.txt'));

// 4. Get directory name
console.log("\n4. Get directory (dirname):");
console.log("   /users/data/file.txt →", path.dirname('/users/data/file.txt'));

// 5. Parse path
console.log("\n5. Parse path into object:");
const parsed = path.parse('/home/user/documents/report.pdf');
console.log("   Input: /home/user/documents/report.pdf");
console.log("   Result:", parsed);

// 6. Special variables
console.log("\n6. Special variables:");
console.log("   __filename (this file):", __filename);
console.log("   __dirname (this directory):", __dirname);

// 7. Resolve path (absolute)
console.log("\n7. Resolve to absolute path:");
console.log("   resolve('./files.js'):", path.resolve('./files.js'));
console.log("   resolve('..'):", path.resolve('..'));

// 8. Normalize path
console.log("\n8. Normalize path (clean up):");
console.log("   '/users//data/../files/./doc.txt'");
console.log("   →", path.normalize('/users//data/../files/./doc.txt'));

console.log("\n✅ Path module demo complete!");

