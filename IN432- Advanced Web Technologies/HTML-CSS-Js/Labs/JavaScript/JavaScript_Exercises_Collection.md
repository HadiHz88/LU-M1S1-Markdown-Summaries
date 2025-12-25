# IN432 - JavaScript Exercises Collection

## JavaScript Fundamentals with HTML & CSS Integration

---

## Exercise Set 1: JavaScript Basics & DOM Manipulation

### Exercise 1.1: Hello World & Variables

**Objective:** Learn basic JavaScript syntax, variables, and output methods

**HTML Structure:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Basics</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .container {
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .output {
            background: #e8f4fd;
            padding: 15px;
            border-radius: 5px;
            margin: 10px 0;
            border-left: 4px solid #2196F3;
        }
        button {
            background: #4CAF50;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin: 5px;
        }
        button:hover {
            background: #45a049;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>JavaScript Variables & Output</h1>
        <button onclick="showVariables()">Show Variables</button>
        <button onclick="showDataTypes()">Show Data Types</button>
        <button onclick="clearOutput()">Clear</button>
        <div id="output" class="output"></div>
    </div>

    <script>
        // Your JavaScript code here
        function showVariables() {
            // TODO: Create variables of different types and display them
        }
        
        function showDataTypes() {
            // TODO: Demonstrate different data types
        }
        
        function clearOutput() {
            // TODO: Clear the output div
        }
    </script>
</body>
</html>
```

**Tasks:**

1. Create variables for: name (string), age (number), isStudent (boolean)
2. Display them in the output div using `innerHTML`
3. Show the `typeof` operator for each variable
4. Demonstrate variable reassignment

---

### Exercise 1.2: Interactive Calculator

**Objective:** Learn functions, parameters, and basic arithmetic operations

**HTML Structure:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Calculator</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            margin: 0;
            padding: 20px;
            min-height: 100vh;
        }
        .calculator {
            max-width: 400px;
            margin: 50px auto;
            background: white;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }
        .input-group {
            margin: 15px 0;
        }
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
            color: #333;
        }
        input[type="number"] {
            width: 100%;
            padding: 12px;
            border: 2px solid #ddd;
            border-radius: 8px;
            font-size: 16px;
            box-sizing: border-box;
        }
        input[type="number"]:focus {
            border-color: #667eea;
            outline: none;
        }
        .buttons {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
            margin: 20px 0;
        }
        .calc-btn {
            padding: 15px;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .calc-btn.add { background: #4CAF50; color: white; }
        .calc-btn.subtract { background: #FF9800; color: white; }
        .calc-btn.multiply { background: #2196F3; color: white; }
        .calc-btn.divide { background: #f44336; color: white; }
        .calc-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }
        .result {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
            font-size: 24px;
            font-weight: bold;
            color: #333;
            border: 2px solid #e9ecef;
        }
    </style>
</head>
<body>
    <div class="calculator">
        <h1 style="text-align: center; color: #333;">JavaScript Calculator</h1>
        
        <div class="input-group">
            <label for="num1">First Number:</label>
            <input type="number" id="num1" placeholder="Enter first number">
        </div>
        
        <div class="input-group">
            <label for="num2">Second Number:</label>
            <input type="number" id="num2" placeholder="Enter second number">
        </div>
        
        <div class="buttons">
            <button class="calc-btn add" onclick="calculate('add')">Add (+)</button>
            <button class="calc-btn subtract" onclick="calculate('subtract')">Subtract (-)</button>
            <button class="calc-btn multiply" onclick="calculate('multiply')">Multiply (×)</button>
            <button class="calc-btn divide" onclick="calculate('divide')">Divide (÷)</button>
        </div>
        
        <div id="result" class="result">Result will appear here</div>
    </div>

    <script>
        function calculate(operation) {
            // TODO: Get values from input fields
            // TODO: Convert to numbers
            // TODO: Perform calculation based on operation
            // TODO: Display result
            // TODO: Handle division by zero
        }
        
        // TODO: Add input validation function
        function validateInputs(num1, num2) {
            // Check if inputs are valid numbers
        }
    </script>
</body>
</html>
```

**Tasks:**

1. Get input values using `getElementById()` and `.value`
2. Convert strings to numbers using `parseFloat()` or `Number()`
3. Create calculation logic for all four operations
4. Handle division by zero error
5. Display results with proper formatting

---

## Exercise Set 2: Control Structures & Loops

### Exercise 2.1: Grade Calculator with Conditions

**Objective:** Learn if-else statements and conditional logic

**HTML Structure:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grade Calculator</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
            margin: 0;
            padding: 20px;
            min-height: 100vh;
        }
        .grade-calculator {
            max-width: 500px;
            margin: 30px auto;
            background: white;
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 15px 35px rgba(0,0,0,0.1);
        }
        .score-input {
            width: 100%;
            padding: 15px;
            border: 2px solid #ddd;
            border-radius: 10px;
            font-size: 18px;
            margin: 10px 0;
            box-sizing: border-box;
        }
        .calculate-btn {
            width: 100%;
            padding: 15px;
            background: linear-gradient(45deg, #667eea, #764ba2);
            color: white;
            border: none;
            border-radius: 10px;
            font-size: 18px;
            font-weight: bold;
            cursor: pointer;
            margin: 20px 0;
            transition: transform 0.3s ease;
        }
        .calculate-btn:hover {
            transform: scale(1.05);
        }
        .grade-result {
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            font-size: 24px;
            font-weight: bold;
            margin: 20px 0;
            transition: all 0.3s ease;
        }
        .grade-a { background: #d4edda; color: #155724; border: 2px solid #c3e6cb; }
        .grade-b { background: #cce5ff; color: #004085; border: 2px solid #99d6ff; }
        .grade-c { background: #fff3cd; color: #856404; border: 2px solid #ffeaa7; }
        .grade-d { background: #f8d7da; color: #721c24; border: 2px solid #f5c6cb; }
        .grade-f { background: #f8d7da; color: #721c24; border: 2px solid #f5c6cb; }
        .statistics {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 10px;
            margin: 20px 0;
        }
    </style>
</head>
<body>
    <div class="grade-calculator">
        <h1 style="text-align: center; color: #333;">Grade Calculator</h1>
        
        <label for="score">Enter your score (0-100):</label>
        <input type="number" id="score" class="score-input" min="0" max="100" placeholder="Enter score">
        
        <button class="calculate-btn" onclick="calculateGrade()">Calculate Grade</button>
        
        <div id="gradeResult" class="grade-result" style="display: none;"></div>
        
        <div class="statistics">
            <h3>Grading Scale:</h3>
            <ul>
                <li><strong>A:</strong> 90-100 (Excellent)</li>
                <li><strong>B:</strong> 80-89 (Good)</li>
                <li><strong>C:</strong> 70-79 (Average)</li>
                <li><strong>D:</strong> 60-69 (Below Average)</li>
                <li><strong>F:</strong> 0-59 (Fail)</li>
            </ul>
        </div>
    </div>

    <script>
        function calculateGrade() {
            // TODO: Get the score from input
            // TODO: Validate the score (0-100)
            // TODO: Use if-else statements to determine grade
            // TODO: Display the result with appropriate styling
            // TODO: Add motivational messages
        }
        
        function getGradeMessage(grade) {
            // TODO: Return appropriate message based on grade
        }
    </script>
</body>
</html>
```

**Tasks:**

1. Use `if-else if-else` statements for grade determination
2. Validate input range (0-100)
3. Apply different CSS classes based on grade
4. Add motivational messages for each grade level
5. Handle invalid input cases

---

### Exercise 2.2: Multiplication Table Generator

**Objective:** Learn loops (for, while) and dynamic HTML generation

**HTML Structure:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Multiplication Table</title>
    <style>
        body {
            font-family: 'Courier New', monospace;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            margin: 0;
            padding: 20px;
            min-height: 100vh;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }
        .controls {
            display: flex;
            gap: 15px;
            margin-bottom: 30px;
            align-items: end;
        }
        .input-group {
            flex: 1;
        }
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        input, select {
            width: 100%;
            padding: 10px;
            border: 2px solid #ddd;
            border-radius: 5px;
            font-size: 16px;
            box-sizing: border-box;
        }
        .generate-btn {
            padding: 12px 25px;
            background: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            font-weight: bold;
        }
        .generate-btn:hover {
            background: #45a049;
        }
        .table-container {
            overflow-x: auto;
        }
        .multiplication-table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            font-size: 14px;
        }
        .multiplication-table th,
        .multiplication-table td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: center;
        }
        .multiplication-table th {
            background: #f2f2f2;
            font-weight: bold;
        }
        .multiplication-table tr:nth-child(even) {
            background: #f9f9f9;
        }
        .multiplication-table tr:hover {
            background: #e8f4fd;
        }
        .single-table {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 10px;
            margin: 20px 0;
        }
        .single-table h3 {
            color: #333;
            margin-bottom: 15px;
        }
        .equation {
            font-size: 18px;
            margin: 5px 0;
            padding: 5px;
            background: white;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1 style="text-align: center; color: #333;">Multiplication Table Generator</h1>
        
        <div class="controls">
            <div class="input-group">
                <label for="tableNumber">Table Number:</label>
                <input type="number" id="tableNumber" min="1" max="20" value="5">
            </div>
            <div class="input-group">
                <label for="tableRange">Range (up to):</label>
                <input type="number" id="tableRange" min="1" max="20" value="10">
            </div>
            <div class="input-group">
                <label for="tableType">Table Type:</label>
                <select id="tableType">
                    <option value="single">Single Table</option>
                    <option value="multiple">Multiple Tables</option>
                    <option value="grid">Grid Format</option>
                </select>
            </div>
            <button class="generate-btn" onclick="generateTable()">Generate</button>
        </div>
        
        <div id="tableOutput"></div>
    </div>

    <script>
        function generateTable() {
            // TODO: Get input values
            // TODO: Determine table type and call appropriate function
        }
        
        function generateSingleTable(number, range) {
            // TODO: Use for loop to generate single multiplication table
        }
        
        function generateMultipleTables(maxNumber, range) {
            // TODO: Use nested loops to generate multiple tables
        }
        
        function generateGridTable(maxNumber, range) {
            // TODO: Create grid-style multiplication table
        }
    </script>
</body>
</html>
```

**Tasks:**

1. Use `for` loops to generate multiplication tables
2. Create nested loops for multiple tables
3. Generate HTML dynamically using string concatenation
4. Implement different table formats (single, multiple, grid)
5. Add input validation and error handling

---

## Exercise Set 3: Arrays & Objects

### Exercise 3.1: Student Management System

**Objective:** Learn arrays, objects, and array methods

**HTML Structure:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Management System</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: #f0f2f5;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 1000px;
            margin: 0 auto;
            background: white;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        .form-section {
            background: #f8f9fa;
            padding: 25px;
            border-radius: 10px;
            margin-bottom: 30px;
        }
        .form-row {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin-bottom: 15px;
        }
        .form-group {
            display: flex;
            flex-direction: column;
        }
        label {
            margin-bottom: 5px;
            font-weight: bold;
            color: #333;
        }
        input, select {
            padding: 10px;
            border: 2px solid #ddd;
            border-radius: 5px;
            font-size: 14px;
        }
        input:focus, select:focus {
            border-color: #007bff;
            outline: none;
        }
        .btn {
            padding: 12px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 14px;
            font-weight: bold;
            margin: 5px;
            transition: all 0.3s ease;
        }
        .btn-primary { background: #007bff; color: white; }
        .btn-success { background: #28a745; color: white; }
        .btn-danger { background: #dc3545; color: white; }
        .btn-warning { background: #ffc107; color: black; }
        .btn:hover { transform: translateY(-2px); box-shadow: 0 4px 8px rgba(0,0,0,0.2); }
        
        .students-table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        .students-table th,
        .students-table td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
        }
        .students-table th {
            background: #007bff;
            color: white;
            font-weight: bold;
        }
        .students-table tr:nth-child(even) {
            background: #f8f9fa;
        }
        .students-table tr:hover {
            background: #e3f2fd;
        }
        .statistics {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin: 30px 0;
        }
        .stat-card {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
        }
        .stat-number {
            font-size: 2em;
            font-weight: bold;
            margin-bottom: 5px;
        }
        .search-section {
            margin: 20px 0;
            padding: 20px;
            background: #e8f4fd;
            border-radius: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1 style="text-align: center; color: #333;">Student Management System</h1>
        
        <!-- Add Student Form -->
        <div class="form-section">
            <h2>Add New Student</h2>
            <div class="form-row">
                <div class="form-group">
                    <label for="studentName">Name:</label>
                    <input type="text" id="studentName" placeholder="Enter student name">
                </div>
                <div class="form-group">
                    <label for="studentAge">Age:</label>
                    <input type="number" id="studentAge" min="15" max="25" placeholder="Enter age">
                </div>
                <div class="form-group">
                    <label for="studentGrade">Grade:</label>
                    <input type="number" id="studentGrade" min="0" max="100" placeholder="Enter grade">
                </div>
                <div class="form-group">
                    <label for="studentSubject">Subject:</label>
                    <select id="studentSubject">
                        <option value="">Select Subject</option>
                        <option value="Mathematics">Mathematics</option>
                        <option value="Science">Science</option>
                        <option value="English">English</option>
                        <option value="History">History</option>
                        <option value="Programming">Programming</option>
                    </select>
                </div>
            </div>
            <button class="btn btn-primary" onclick="addStudent()">Add Student</button>
            <button class="btn btn-warning" onclick="clearForm()">Clear Form</button>
        </div>
        
        <!-- Search Section -->
        <div class="search-section">
            <h3>Search & Filter Students</h3>
            <div class="form-row">
                <div class="form-group">
                    <label for="searchName">Search by Name:</label>
                    <input type="text" id="searchName" placeholder="Enter name to search" onkeyup="searchStudents()">
                </div>
                <div class="form-group">
                    <label for="filterSubject">Filter by Subject:</label>
                    <select id="filterSubject" onchange="filterStudents()">
                        <option value="">All Subjects</option>
                        <option value="Mathematics">Mathematics</option>
                        <option value="Science">Science</option>
                        <option value="English">English</option>
                        <option value="History">History</option>
                        <option value="Programming">Programming</option>
                    </select>
                </div>
            </div>
            <button class="btn btn-success" onclick="sortStudents('name')">Sort by Name</button>
            <button class="btn btn-success" onclick="sortStudents('grade')">Sort by Grade</button>
            <button class="btn btn-danger" onclick="clearFilters()">Clear Filters</button>
        </div>
        
        <!-- Statistics -->
        <div class="statistics">
            <div class="stat-card">
                <div class="stat-number" id="totalStudents">0</div>
                <div>Total Students</div>
            </div>
            <div class="stat-card">
                <div class="stat-number" id="averageGrade">0</div>
                <div>Average Grade</div>
            </div>
            <div class="stat-card">
                <div class="stat-number" id="highestGrade">0</div>
                <div>Highest Grade</div>
            </div>
            <div class="stat-card">
                <div class="stat-number" id="lowestGrade">0</div>
                <div>Lowest Grade</div>
            </div>
        </div>
        
        <!-- Students Table -->
        <table class="students-table" id="studentsTable">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Subject</th>
                    <th>Grade</th>
                    <th>Letter Grade</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody id="studentsTableBody">
                <!-- Students will be added here dynamically -->
            </tbody>
        </table>
    </div>

    <script>
        // Global array to store students
        let students = [];
        let studentIdCounter = 1;
        
        function addStudent() {
            // TODO: Get form values
            // TODO: Create student object
            // TODO: Add to students array
            // TODO: Update display
            // TODO: Clear form
        }
        
        function deleteStudent(id) {
            // TODO: Remove student from array
            // TODO: Update display
        }
        
        function editStudent(id) {
            // TODO: Find student and populate form
            // TODO: Change add button to update button
        }
        
        function displayStudents(studentsToShow = students) {
            // TODO: Generate HTML for table rows
            // TODO: Update table body
        }
        
        function updateStatistics() {
            // TODO: Calculate total, average, highest, lowest grades
            // TODO: Update statistics display
        }
        
        function searchStudents() {
            // TODO: Filter students by name
            // TODO: Display filtered results
        }
        
        function filterStudents() {
            // TODO: Filter students by subject
            // TODO: Display filtered results
        }
        
        function sortStudents(criteria) {
            // TODO: Sort students array by criteria
            // TODO: Display sorted results
        }
        
        function getLetterGrade(numericGrade) {
            // TODO: Convert numeric grade to letter grade
        }
        
        function clearForm() {
            // TODO: Clear all form inputs
        }
        
        function clearFilters() {
            // TODO: Clear search and filter inputs
            // TODO: Display all students
        }
        
        // Initialize with sample data
        function initializeSampleData() {
            // TODO: Add some sample students for testing
        }
        
        // Call initialization when page loads
        window.onload = function() {
            initializeSampleData();
        };
    </script>
</body>
</html>
```

**Tasks:**

1. Create student objects with properties (id, name, age, grade, subject)
2. Use array methods: `push()`, `splice()`, `find()`, `filter()`, `sort()`
3. Implement CRUD operations (Create, Read, Update, Delete)
4. Add search and filter functionality
5. Calculate statistics using array methods
6. Generate dynamic HTML for table display

---

## Exercise Set 4: Events & Interactive Features

### Exercise 4.1: Interactive To-Do List

**Objective:** Learn event handling, DOM manipulation, and local storage

**HTML Structure:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive To-Do List</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }
        .todo-container {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            border-radius: 20px;
            box-shadow: 0 15px 35px rgba(0,0,0,0.1);
            overflow: hidden;
        }
        .todo-header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            text-align: center;
        }
        .todo-header h1 {
            font-size: 2.5em;
            margin-bottom: 10px;
        }
        .add-todo {
            padding: 30px;
            border-bottom: 1px solid #eee;
        }
        .input-group {
            display: flex;
            gap: 10px;
            margin-bottom: 15px;
        }
        .todo-input {
            flex: 1;
            padding: 15px;
            border: 2px solid #ddd;
            border-radius: 10px;
            font-size: 16px;
        }
        .todo-input:focus {
            border-color: #667eea;
            outline: none;
        }
        .add-btn {
            padding: 15px 25px;
            background: #28a745;
            color: white;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            font-size: 16px;
            font-weight: bold;
            transition: all 0.3s ease;
        }
        .add-btn:hover {
            background: #218838;
            transform: translateY(-2px);
        }
        .priority-select {
            padding: 15px;
            border: 2px solid #ddd;
            border-radius: 10px;
            font-size: 16px;
        }
        .todo-filters {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin-bottom: 20px;
        }
        .filter-btn {
            padding: 8px 16px;
            border: 2px solid #667eea;
            background: white;
            color: #667eea;
            border-radius: 20px;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .filter-btn.active,
        .filter-btn:hover {
            background: #667eea;
            color: white;
        }
        .todo-list {
            padding: 0 30px 30px;
        }
        .todo-item {
            display: flex;
            align-items: center;
            padding: 15px;
            margin: 10px 0;
            background: #f8f9fa;
            border-radius: 10px;
            border-left: 4px solid #28a745;
            transition: all 0.3s ease;
        }
        .todo-item.completed {
            opacity: 0.7;
            border-left-color: #6c757d;
        }
        .todo-item.high-priority {
            border-left-color: #dc3545;
            background: #fff5f5;
        }
        .todo-item.medium-priority {
            border-left-color: #ffc107;
            background: #fffbf0;
        }
        .todo-checkbox {
            margin-right: 15px;
            transform: scale(1.2);
        }
        .todo-text {
            flex: 1;
            font-size: 16px;
        }
        .todo-text.completed {
            text-decoration: line-through;
            color: #6c757d;
        }
        .todo-priority {
            padding: 4px 8px;
            border-radius: 12px;
            font-size: 12px;
            font-weight: bold;
            margin: 0 10px;
        }
        .priority-high {
            background: #dc3545;
            color: white;
        }
        .priority-medium {
            background: #ffc107;
            color: black;
        }
        .priority-low {
            background: #28a745;
            color: white;
        }
        .todo-actions {
            display: flex;
            gap: 5px;
        }
        .action-btn {
            padding: 5px 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 12px;
            transition: all 0.3s ease;
        }
        .edit-btn {
            background: #007bff;
            color: white;
        }
        .delete-btn {
            background: #dc3545;
            color: white;
        }
        .action-btn:hover {
            transform: scale(1.1);
        }
        .todo-stats {
            padding: 20px 30px;
            background: #f8f9fa;
            display: flex;
            justify-content: space-around;
            text-align: center;
        }
        .stat-item {
            flex: 1;
        }
        .stat-number {
            font-size: 2em;
            font-weight: bold;
            color: #667eea;
        }
        .stat-label {
            font-size: 0.9em;
            color: #6c757d;
        }
        .empty-state {
            text-align: center;
            padding: 50px;
            color: #6c757d;
        }
        .empty-state img {
            width: 100px;
            opacity: 0.5;
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <div class="todo-container">
        <div class="todo-header">
            <h1>📝 My To-Do List</h1>
            <p>Stay organized and productive!</p>
        </div>
        
        <div class="add-todo">
            <div class="input-group">
                <input type="text" id="todoInput" class="todo-input" placeholder="What needs to be done?" maxlength="100">
                <select id="prioritySelect" class="priority-select">
                    <option value="low">Low Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="high">High Priority</option>
                </select>
                <button class="add-btn" onclick="addTodo()">Add Task</button>
            </div>
            
            <div class="todo-filters">
                <button class="filter-btn active" onclick="filterTodos('all')">All</button>
                <button class="filter-btn" onclick="filterTodos('active')">Active</button>
                <button class="filter-btn" onclick="filterTodos('completed')">Completed</button>
                <button class="filter-btn" onclick="filterTodos('high')">High Priority</button>
            </div>
        </div>
        
        <div class="todo-list">
            <div id="todoList">
                <!-- Todos will be added here dynamically -->
            </div>
            
            <div id="emptyState" class="empty-state" style="display: none;">
                <div style="font-size: 4em;">📋</div>
                <h3>No tasks yet!</h3>
                <p>Add a task above to get started.</p>
            </div>
        </div>
        
        <div class="todo-stats">
            <div class="stat-item">
                <div class="stat-number" id="totalTasks">0</div>
                <div class="stat-label">Total Tasks</div>
            </div>
            <div class="stat-item">
                <div class="stat-number" id="completedTasks">0</div>
                <div class="stat-label">Completed</div>
            </div>
            <div class="stat-item">
                <div class="stat-number" id="pendingTasks">0</div>
                <div class="stat-label">Pending</div>
            </div>
        </div>
    </div>

    <script>
        // Global variables
        let todos = [];
        let todoIdCounter = 1;
        let currentFilter = 'all';
        
        // Event listeners
        document.addEventListener('DOMContentLoaded', function() {
            loadTodosFromStorage();
            displayTodos();
            updateStats();
        });
        
        document.getElementById('todoInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                addTodo();
            }
        });
        
        function addTodo() {
            // TODO: Get input values
            // TODO: Validate input
            // TODO: Create todo object
            // TODO: Add to todos array
            // TODO: Save to localStorage
            // TODO: Update display
            // TODO: Clear input
        }
        
        function toggleTodo(id) {
            // TODO: Find todo and toggle completed status
            // TODO: Save to localStorage
            // TODO: Update display
        }
        
        function deleteTodo(id) {
            // TODO: Remove todo from array
            // TODO: Save to localStorage
            // TODO: Update display
        }
        
        function editTodo(id) {
            // TODO: Find todo and make text editable
            // TODO: Handle save/cancel actions
        }
        
        function displayTodos() {
            // TODO: Filter todos based on current filter
            // TODO: Generate HTML for each todo
            // TODO: Update todo list container
            // TODO: Show/hide empty state
        }
        
        function filterTodos(filter) {
            // TODO: Update current filter
            // TODO: Update filter button states
            // TODO: Display filtered todos
        }
        
        function updateStats() {
            // TODO: Calculate total, completed, pending tasks
            // TODO: Update statistics display
        }
        
        function saveTodosToStorage() {
            // TODO: Save todos array to localStorage
        }
        
        function loadTodosFromStorage() {
            // TODO: Load todos from localStorage
            // TODO: Parse JSON and update todos array
        }
        
        function clearAllTodos() {
            // TODO: Clear all todos with confirmation
        }
        
        function clearCompleted() {
            // TODO: Remove all completed todos
        }
        
        // Utility functions
        function generateTodoHTML(todo) {
            // TODO: Generate HTML string for a single todo
        }
        
        function updateFilterButtons(activeFilter) {
            // TODO: Update active state of filter buttons
        }
    </script>
</body>
</html>
```

**Tasks:**

1. Handle various events: `click`, `keypress`, `change`
2. Use `addEventListener()` for event handling
3. Implement localStorage for data persistence
4. Create dynamic HTML generation
5. Add input validation and error handling
6. Implement filtering and sorting functionality

---

## Exercise Set 5: Advanced JavaScript Features

### Exercise 5.1: Weather Dashboard with API Simulation

**Objective:** Learn functions, objects, JSON, and asynchronous concepts

**HTML Structure:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather Dashboard</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);
            min-height: 100vh;
            padding: 20px;
        }
        .weather-container {
            max-width: 1200px;
            margin: 0 auto;
        }
        .header {
            text-align: center;
            color: white;
            margin-bottom: 30px;
        }
        .header h1 {
            font-size: 3em;
            margin-bottom: 10px;
        }
        .search-section {
            background: white;
            padding: 30px;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            margin-bottom: 30px;
        }
        .search-form {
            display: flex;
            gap: 15px;
            align-items: end;
        }
        .form-group {
            flex: 1;
        }
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
            color: #333;
        }
        input, select {
            width: 100%;
            padding: 12px;
            border: 2px solid #ddd;
            border-radius: 10px;
            font-size: 16px;
        }
        input:focus, select:focus {
            border-color: #74b9ff;
            outline: none;
        }
        .search-btn {
            padding: 12px 25px;
            background: #74b9ff;
            color: white;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            font-size: 16px;
            font-weight: bold;
            transition: all 0.3s ease;
        }
        .search-btn:hover {
            background: #0984e3;
            transform: translateY(-2px);
        }
        .weather-cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }
        .weather-card {
            background: white;
            border-radius: 20px;
            padding: 30px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            text-align: center;
            transition: transform 0.3s ease;
        }
        .weather-card:hover {
            transform: translateY(-5px);
        }
        .weather-icon {
            font-size: 4em;
            margin-bottom: 15px;
        }
        .city-name {
            font-size: 1.5em;
            font-weight: bold;
            color: #333;
            margin-bottom: 10px;
        }
        .temperature {
            font-size: 3em;
            font-weight: bold;
            color: #74b9ff;
            margin-bottom: 10px;
        }
        .weather-description {
            font-size: 1.1em;
            color: #666;
            margin-bottom: 20px;
            text-transform: capitalize;
        }
        .weather-details {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
            text-align: left;
        }
        .detail-item {
            background: #f8f9fa;
            padding: 10px;
            border-radius: 8px;
        }
        .detail-label {
            font-size: 0.9em;
            color: #666;
            margin-bottom: 5px;
        }
        .detail-value {
            font-weight: bold;
            color: #333;
        }
        .forecast-section {
            background: white;
            border-radius: 20px;
            padding: 30px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        .forecast-title {
            font-size: 1.5em;
            font-weight: bold;
            color: #333;
            margin-bottom: 20px;
            text-align: center;
        }
        .forecast-cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 15px;
        }
        .forecast-card {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 15px;
            text-align: center;
            transition: all 0.3s ease;
        }
        .forecast-card:hover {
            background: #e9ecef;
            transform: scale(1.05);
        }
        .forecast-day {
            font-weight: bold;
            color: #333;
            margin-bottom: 10px;
        }
        .forecast-icon {
            font-size: 2em;
            margin: 10px 0;
        }
        .forecast-temp {
            font-weight: bold;
            color: #74b9ff;
        }
        .loading {
            text-align: center;
            padding: 50px;
            color: white;
            font-size: 1.2em;
        }
        .error {
            background: #dc3545;
            color: white;
            padding: 15px;
            border-radius: 10px;
            margin: 20px 0;
            text-align: center;
        }
        .favorites {
            background: white;
            border-radius: 20px;
            padding: 30px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            margin-top: 30px;
        }
        .favorites-title {
            font-size: 1.5em;
            font-weight: bold;
            color: #333;
            margin-bottom: 20px;
        }
        .favorite-cities {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }
        .favorite-city {
            background: #74b9ff;
            color: white;
            padding: 8px 15px;
            border-radius: 20px;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .favorite-city:hover {
            background: #0984e3;
            transform: scale(1.05);
        }
    </style>
</head>
<body>
    <div class="weather-container">
        <div class="header">
            <h1>🌤️ Weather Dashboard</h1>
            <p>Get current weather and forecasts for any city</p>
        </div>
        
        <div class="search-section">
            <div class="search-form">
                <div class="form-group">
                    <label for="cityInput">City Name:</label>
                    <input type="text" id="cityInput" placeholder="Enter city name" list="citySuggestions">
                    <datalist id="citySuggestions">
                        <option value="New York">
                        <option value="London">
                        <option value="Tokyo">
                        <option value="Paris">
                        <option value="Sydney">
                        <option value="Dubai">
                        <option value="Singapore">
                        <option value="Mumbai">
                    </datalist>
                </div>
                <div class="form-group">
                    <label for="unitSelect">Temperature Unit:</label>
                    <select id="unitSelect">
                        <option value="celsius">Celsius (°C)</option>
                        <option value="fahrenheit">Fahrenheit (°F)</option>
                        <option value="kelvin">Kelvin (K)</option>
                    </select>
                </div>
                <button class="search-btn" onclick="getWeather()">Get Weather</button>
            </div>
        </div>
        
        <div id="loadingMessage" class="loading" style="display: none;">
            <div>🔄 Loading weather data...</div>
        </div>
        
        <div id="errorMessage" class="error" style="display: none;"></div>
        
        <div id="weatherResults" class="weather-cards"></div>
        
        <div id="forecastSection" class="forecast-section" style="display: none;">
            <div class="forecast-title">5-Day Forecast</div>
            <div id="forecastCards" class="forecast-cards"></div>
        </div>
        
        <div class="favorites">
            <div class="favorites-title">Favorite Cities</div>
            <div id="favoriteCities" class="favorite-cities">
                <div class="favorite-city" onclick="searchCity('New York')">New York</div>
                <div class="favorite-city" onclick="searchCity('London')">London</div>
                <div class="favorite-city" onclick="searchCity('Tokyo')">Tokyo</div>
                <div class="favorite-city" onclick="searchCity('Paris')">Paris</div>
            </div>
        </div>
    </div>

    <script>
        // Simulated weather data (since we can't use real API in this exercise)
        const weatherData = {
            "New York": {
                city: "New York",
                temperature: 22,
                description: "partly cloudy",
                humidity: 65,
                windSpeed: 12,
                pressure: 1013,
                visibility: 10,
                uvIndex: 6,
                icon: "⛅",
                forecast: [
                    { day: "Tomorrow", icon: "☀️", temp: 25 },
                    { day: "Tuesday", icon: "🌧️", temp: 18 },
                    { day: "Wednesday", icon: "⛅", temp: 21 },
                    { day: "Thursday", icon: "☀️", temp: 26 },
                    { day: "Friday", icon: "🌩️", temp: 19 }
                ]
            },
            "London": {
                city: "London",
                temperature: 15,
                description: "light rain",
                humidity: 78,
                windSpeed: 8,
                pressure: 1008,
                visibility: 8,
                uvIndex: 3,
                icon: "🌧️",
                forecast: [
                    { day: "Tomorrow", icon: "🌧️", temp: 14 },
                    { day: "Tuesday", icon: "⛅", temp: 17 },
                    { day: "Wednesday", icon: "🌧️", temp: 13 },
                    { day: "Thursday", icon: "☁️", temp: 16 },
                    { day: "Friday", icon: "⛅", temp: 18 }
                ]
            },
            "Tokyo": {
                city: "Tokyo",
                temperature: 28,
                description: "sunny",
                humidity: 55,
                windSpeed: 6,
                pressure: 1020,
                visibility: 12,
                uvIndex: 8,
                icon: "☀️",
                forecast: [
                    { day: "Tomorrow", icon: "☀️", temp: 30 },
                    { day: "Tuesday", icon: "⛅", temp: 27 },
                    { day: "Wednesday", icon: "☀️", temp: 29 },
                    { day: "Thursday", icon: "🌧️", temp: 24 },
                    { day: "Friday", icon: "⛅", temp: 26 }
                ]
            },
            "Paris": {
                city: "Paris",
                temperature: 19,
                description: "overcast",
                humidity: 70,
                windSpeed: 10,
                pressure: 1015,
                visibility: 9,
                uvIndex: 4,
                icon: "☁️",
                forecast: [
                    { day: "Tomorrow", icon: "☁️", temp: 20 },
                    { day: "Tuesday", icon: "🌧️", temp: 16 },
                    { day: "Wednesday", icon: "⛅", temp: 22 },
                    { day: "Thursday", icon: "☀️", temp: 24 },
                    { day: "Friday", icon: "⛅", temp: 21 }
                ]
            }
        };
        
        // Event listeners
        document.getElementById('cityInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                getWeather();
            }
        });
        
        function getWeather() {
            // TODO: Get city name and unit from inputs
            // TODO: Show loading message
            // TODO: Simulate API call with setTimeout
            // TODO: Get weather data from simulated database
            // TODO: Display weather information
            // TODO: Hide loading message
        }
        
        function searchCity(cityName) {
            // TODO: Set city input value and get weather
        }
        
        function displayWeather(data, unit) {
            // TODO: Convert temperature based on unit
            // TODO: Generate HTML for weather card
            // TODO: Display current weather
            // TODO: Display forecast
        }
        
        function displayForecast(forecast, unit) {
            // TODO: Generate HTML for forecast cards
            // TODO: Convert temperatures based on unit
            // TODO: Display forecast section
        }
        
        function convertTemperature(celsius, unit) {
            // TODO: Convert celsius to requested unit
            // TODO: Return formatted temperature string
        }
        
        function showError(message) {
            // TODO: Display error message
            // TODO: Hide other sections
        }
        
        function hideError() {
            // TODO: Hide error message
        }
        
        function showLoading() {
            // TODO: Show loading message
            // TODO: Hide other sections
        }
        
        function hideLoading() {
            // TODO: Hide loading message
        }
        
        // Utility functions
        function formatWeatherData(data) {
            // TODO: Format weather data for display
        }
        
        function getWeatherIcon(description) {
            // TODO: Return appropriate emoji based on weather description
        }
        
        function addToFavorites(cityName) {
            // TODO: Add city to favorites list
            // TODO: Save to localStorage
        }
        
        function loadFavorites() {
            // TODO: Load favorite cities from localStorage
            // TODO: Display favorite cities
        }
        
        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            loadFavorites();
        });
    </script>
</body>
</html>
```

**Tasks:**

1. Simulate asynchronous operations with `setTimeout()`
2. Work with JSON data structures
3. Implement temperature unit conversions
4. Create dynamic HTML generation for complex layouts
5. Handle loading states and error messages
6. Use localStorage for favorites functionality

---

## Summary & Learning Objectives

### **Skills Covered:**

1. **JavaScript Fundamentals:** Variables, data types, operators
2. **Control Structures:** if-else, loops (for, while)
3. **Functions:** Declaration, parameters, return values
4. **Arrays & Objects:** Creation, manipulation, methods
5. **DOM Manipulation:** getElementById, innerHTML, event handling
6. **Events:** click, keypress, change, form submission
7. **Local Storage:** Saving and retrieving data
8. **Error Handling:** Validation, try-catch concepts
9. **Asynchronous Concepts:** setTimeout, simulated API calls

### **HTML & CSS Integration:**

- Semantic HTML structure
- Responsive CSS layouts
- Interactive styling with hover effects
- Form styling and validation feedback
- Dynamic class manipulation
- CSS animations and transitions

### **Best Practices:**

- Clean, readable code structure
- Proper variable naming
- Function organization
- Input validation
- Error handling
- User experience considerations

Each exercise builds upon previous concepts while introducing new JavaScript features in a practical, hands-on manner. Students will create functional, interactive web applications that demonstrate real-world programming skills.
