# IN432 - DOM & Events Exercises (Chapter 12)

## Advanced DOM Manipulation and Event Handling

---

## Exercise Set 6: DOM Selection and Traversal

### Exercise 6.1: DOM Explorer

**Objective:** Master DOM selection methods and tree traversal

**HTML Structure:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Explorer</title>
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
        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            border-radius: 20px;
            box-shadow: 0 15px 35px rgba(0,0,0,0.2);
            overflow: hidden;
        }
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            text-align: center;
        }
        .header h1 {
            font-size: 2.5em;
            margin-bottom: 10px;
        }
        .content-wrapper {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            padding: 30px;
        }
        .sample-dom {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 10px;
            border: 2px solid #ddd;
        }
        .sample-dom h2 {
            color: #333;
            margin-bottom: 15px;
        }
        .menu {
            list-style: none;
            padding: 0;
        }
        .menu-item {
            padding: 10px;
            margin: 5px 0;
            background: white;
            border-radius: 5px;
            border: 1px solid #ddd;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .menu-item:hover {
            background: #e3f2fd;
            transform: translateX(5px);
        }
        .article {
            margin: 20px 0;
            padding: 15px;
            background: white;
            border-radius: 8px;
            border: 1px solid #ddd;
        }
        .article h3 {
            color: #667eea;
            margin-bottom: 10px;
        }
        .article p {
            color: #666;
            line-height: 1.6;
        }
        .highlighted {
            background: #ffd700 !important;
            border-color: #ff9800 !important;
            font-weight: bold;
        }
        .control-panel {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 10px;
        }
        .control-section {
            margin-bottom: 25px;
        }
        .control-section h3 {
            color: #333;
            margin-bottom: 15px;
            font-size: 1.2em;
            border-bottom: 2px solid #667eea;
            padding-bottom: 8px;
        }
        .button-group {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
            margin-bottom: 15px;
        }
        .control-btn {
            padding: 12px 15px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 14px;
            font-weight: bold;
            transition: all 0.3s ease;
            color: white;
        }
        .control-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }
        .btn-primary { background: #007bff; }
        .btn-success { background: #28a745; }
        .btn-warning { background: #ffc107; color: #333; }
        .btn-danger { background: #dc3545; }
        .btn-info { background: #17a2b8; }
        .btn-purple { background: #667eea; }
        .input-group {
            margin-bottom: 15px;
        }
        .input-group label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
            color: #333;
        }
        .input-group input {
            width: 100%;
            padding: 10px;
            border: 2px solid #ddd;
            border-radius: 5px;
            font-size: 14px;
        }
        .input-group input:focus {
            border-color: #667eea;
            outline: none;
        }
        .output-panel {
            background: #e8f4fd;
            padding: 15px;
            border-radius: 8px;
            border-left: 4px solid #2196F3;
            min-height: 100px;
            max-height: 300px;
            overflow-y: auto;
        }
        .output-panel h4 {
            color: #2196F3;
            margin-bottom: 10px;
        }
        .output-panel pre {
            background: white;
            padding: 10px;
            border-radius: 5px;
            font-size: 12px;
            overflow-x: auto;
        }
        .info-box {
            background: #fff3cd;
            border: 1px solid #ffc107;
            border-radius: 5px;
            padding: 10px;
            margin-bottom: 15px;
            font-size: 12px;
            color: #856404;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🔍 DOM Explorer</h1>
            <p>Master DOM Selection and Traversal Methods</p>
        </div>
        
        <div class="content-wrapper">
            <!-- Sample DOM Structure -->
            <div class="sample-dom">
                <h2>Sample Website Structure</h2>
                
                <nav id="mainNav">
                    <ul class="menu">
                        <li class="menu-item" data-category="home">Home</li>
                        <li class="menu-item" data-category="products">Products</li>
                        <li class="menu-item active" data-category="services">Services</li>
                        <li class="menu-item" data-category="about">About Us</li>
                        <li class="menu-item" data-category="contact">Contact</li>
                    </ul>
                </nav>
                
                <section id="content">
                    <article class="article featured" data-id="1">
                        <h3>Featured Article</h3>
                        <p class="intro">This is the introduction paragraph.</p>
                        <p>This is the main content of the article.</p>
                        <footer>
                            <span class="author">By John Doe</span>
                            <span class="date">2024-01-15</span>
                        </footer>
                    </article>
                    
                    <article class="article" data-id="2">
                        <h3>Second Article</h3>
                        <p class="intro">Another interesting article.</p>
                        <p>More detailed content here.</p>
                        <footer>
                            <span class="author">By Jane Smith</span>
                            <span class="date">2024-01-16</span>
                        </footer>
                    </article>
                    
                    <article class="article" data-id="3">
                        <h3>Third Article</h3>
                        <p class="intro">Yet another article.</p>
                        <p>Additional content information.</p>
                        <footer>
                            <span class="author">By Bob Johnson</span>
                            <span class="date">2024-01-17</span>
                        </footer>
                    </article>
                </section>
            </div>
            
            <!-- Control Panel -->
            <div class="control-panel">
                <div class="info-box">
                    💡 Click buttons to select and highlight DOM elements. Check the output panel below.
                </div>
                
                <!-- Selection Methods -->
                <div class="control-section">
                    <h3>🎯 Selection Methods</h3>
                    <div class="button-group">
                        <button class="control-btn btn-primary" onclick="selectById()">Select by ID</button>
                        <button class="control-btn btn-success" onclick="selectByClass()">Select by Class</button>
                        <button class="control-btn btn-warning" onclick="selectByTag()">Select by Tag</button>
                        <button class="control-btn btn-danger" onclick="selectByQuery()">querySelector</button>
                        <button class="control-btn btn-info" onclick="selectByQueryAll()">querySelectorAll</button>
                        <button class="control-btn btn-purple" onclick="selectByAttribute()">Select by Attribute</button>
                    </div>
                </div>
                
                <!-- Traversal Methods -->
                <div class="control-section">
                    <h3>🌳 DOM Traversal</h3>
                    <div class="button-group">
                        <button class="control-btn btn-primary" onclick="getParent()">Get Parent</button>
                        <button class="control-btn btn-success" onclick="getChildren()">Get Children</button>
                        <button class="control-btn btn-warning" onclick="getSiblings()">Get Siblings</button>
                        <button class="control-btn btn-danger" onclick="getFirstLast()">First/Last Child</button>
                        <button class="control-btn btn-info" onclick="getClosest()">Closest Ancestor</button>
                        <button class="control-btn btn-purple" onclick="traverseTree()">Traverse Tree</button>
                    </div>
                </div>
                
                <!-- Custom Selector -->
                <div class="control-section">
                    <h3>✨ Custom Selection</h3>
                    <div class="input-group">
                        <label for="customSelector">Enter CSS Selector:</label>
                        <input type="text" id="customSelector" placeholder="e.g., .menu-item[data-category='home']">
                    </div>
                    <button class="control-btn btn-primary" onclick="customSelect()" style="width: 100%;">Execute Custom Selector</button>
                </div>
                
                <!-- Actions -->
                <div class="control-section">
                    <h3>⚡ Actions</h3>
                    <div class="button-group">
                        <button class="control-btn btn-warning" onclick="clearHighlights()">Clear Highlights</button>
                        <button class="control-btn btn-danger" onclick="clearOutput()">Clear Output</button>
                    </div>
                </div>
                
                <!-- Output Panel -->
                <div class="output-panel">
                    <h4>📋 Selection Output</h4>
                    <pre id="output">Results will appear here...</pre>
                </div>
            </div>
        </div>
    </div>

    <script>
        // TODO: Implement DOM selection methods
        
        function selectById() {
            // TODO: Use getElementById to select an element
            // TODO: Highlight the selected element
            // TODO: Display element information in output
        }
        
        function selectByClass() {
            // TODO: Use getElementsByClassName to select elements
            // TODO: Highlight all selected elements
            // TODO: Display count and list in output
        }
        
        function selectByTag() {
            // TODO: Use getElementsByTagName to select elements
            // TODO: Highlight all selected elements
            // TODO: Display element information
        }
        
        function selectByQuery() {
            // TODO: Use querySelector to select first matching element
            // TODO: Highlight the selected element
            // TODO: Display element details
        }
        
        function selectByQueryAll() {
            // TODO: Use querySelectorAll to select all matching elements
            // TODO: Highlight all selected elements
            // TODO: Display NodeList information
        }
        
        function selectByAttribute() {
            // TODO: Use querySelector with attribute selector
            // TODO: Select elements with specific data attributes
            // TODO: Highlight and display results
        }
        
        function getParent() {
            // TODO: Select an element and get its parent
            // TODO: Use parentNode or parentElement
            // TODO: Highlight parent and display information
        }
        
        function getChildren() {
            // TODO: Select an element and get its children
            // TODO: Use children or childNodes
            // TODO: Highlight children and display count
        }
        
        function getSiblings() {
            // TODO: Select an element
            // TODO: Get nextElementSibling and previousElementSibling
            // TODO: Highlight siblings and display information
        }
        
        function getFirstLast() {
            // TODO: Select a container element
            // TODO: Get firstElementChild and lastElementChild
            // TODO: Highlight and display information
        }
        
        function getClosest() {
            // TODO: Select a nested element
            // TODO: Use closest() to find ancestor matching selector
            // TODO: Highlight and display result
        }
        
        function traverseTree() {
            // TODO: Traverse the entire DOM tree
            // TODO: Display tree structure in output
            // TODO: Count different element types
        }
        
        function customSelect() {
            // TODO: Get custom selector from input
            // TODO: Try to select elements using the selector
            // TODO: Handle errors if selector is invalid
            // TODO: Highlight selected elements and display results
        }
        
        function clearHighlights() {
            // TODO: Remove highlighted class from all elements
        }
        
        function clearOutput() {
            // TODO: Clear the output panel
        }
        
        // Utility function to highlight element
        function highlightElement(element) {
            // TODO: Add highlighted class to element
        }
        
        // Utility function to display element info
        function displayElementInfo(element) {
            // TODO: Get element's tag name, classes, id, attributes
            // TODO: Format and display in output panel
        }
    </script>
</body>
</html>
```

**Tasks:**

1. Implement all DOM selection methods (getElementById, getElementsByClassName, etc.)
2. Use querySelector and querySelectorAll with various selectors
3. Traverse DOM tree using parent, children, siblings methods
4. Implement closest() for ancestor selection
5. Create custom selector functionality with error handling
6. Display detailed element information in output panel

---

### Exercise 6.2: Dynamic Content Generator

**Objective:** Master creating, modifying, and removing DOM elements

**HTML Structure:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic Content Generator</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            min-height: 100vh;
            padding: 20px;
        }
        .container {
            max-width: 1400px;
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
            text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
        }
        .workspace {
            display: grid;
            grid-template-columns: 350px 1fr;
            gap: 20px;
        }
        .control-panel {
            background: white;
            border-radius: 15px;
            padding: 25px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            height: fit-content;
        }
        .control-section {
            margin-bottom: 25px;
            padding-bottom: 20px;
            border-bottom: 2px solid #f0f0f0;
        }
        .control-section:last-child {
            border-bottom: none;
        }
        .control-section h3 {
            color: #f5576c;
            margin-bottom: 15px;
            font-size: 1.1em;
        }
        .form-group {
            margin-bottom: 15px;
        }
        .form-group label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
            color: #333;
            font-size: 14px;
        }
        .form-group input,
        .form-group select,
        .form-group textarea {
            width: 100%;
            padding: 10px;
            border: 2px solid #ddd;
            border-radius: 8px;
            font-size: 14px;
            font-family: inherit;
        }
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
            border-color: #f5576c;
            outline: none;
        }
        .form-group textarea {
            resize: vertical;
            min-height: 80px;
        }
        .btn {
            width: 100%;
            padding: 12px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 14px;
            font-weight: bold;
            transition: all 0.3s ease;
            margin-bottom: 10px;
        }
        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }
        .btn-primary { background: #007bff; color: white; }
        .btn-success { background: #28a745; color: white; }
        .btn-warning { background: #ffc107; color: #333; }
        .btn-danger { background: #dc3545; color: white; }
        .btn-info { background: #17a2b8; color: white; }
        .canvas {
            background: white;
            border-radius: 15px;
            padding: 30px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            min-height: 600px;
        }
        .canvas h2 {
            color: #333;
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 3px solid #f5576c;
        }
        #dynamicContent {
            min-height: 400px;
        }
        .generated-card {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px;
            border-radius: 10px;
            margin: 15px 0;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            position: relative;
            transition: all 0.3s ease;
        }
        .generated-card:hover {
            transform: translateX(5px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        }
        .generated-card h3 {
            margin-bottom: 10px;
        }
        .generated-card p {
            line-height: 1.6;
            margin-bottom: 15px;
        }
        .generated-card .card-actions {
            display: flex;
            gap: 10px;
        }
        .generated-card button {
            padding: 8px 15px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 12px;
            font-weight: bold;
            transition: all 0.3s ease;
        }
        .generated-card button:hover {
            transform: scale(1.1);
        }
        .generated-list {
            list-style: none;
            padding: 0;
        }
        .generated-list li {
            background: #f8f9fa;
            padding: 15px;
            margin: 10px 0;
            border-radius: 8px;
            border-left: 4px solid #667eea;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: all 0.3s ease;
        }
        .generated-list li:hover {
            background: #e3f2fd;
            transform: translateX(5px);
        }
        .generated-table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        .generated-table th,
        .generated-table td {
            padding: 12px;
            text-align: left;
            border: 1px solid #ddd;
        }
        .generated-table th {
            background: #667eea;
            color: white;
            font-weight: bold;
        }
        .generated-table tr:nth-child(even) {
            background: #f8f9fa;
        }
        .generated-table tr:hover {
            background: #e3f2fd;
        }
        .stats {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 8px;
            margin-top: 20px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
        }
        .stat-item {
            text-align: center;
        }
        .stat-number {
            font-size: 2em;
            font-weight: bold;
            color: #667eea;
        }
        .stat-label {
            font-size: 0.9em;
            color: #666;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎨 Dynamic Content Generator</h1>
            <p>Create, Modify, and Remove DOM Elements</p>
        </div>
        
        <div class="workspace">
            <!-- Control Panel -->
            <div class="control-panel">
                <!-- Create Card -->
                <div class="control-section">
                    <h3>➕ Create Card</h3>
                    <div class="form-group">
                        <label for="cardTitle">Card Title:</label>
                        <input type="text" id="cardTitle" placeholder="Enter card title">
                    </div>
                    <div class="form-group">
                        <label for="cardContent">Card Content:</label>
                        <textarea id="cardContent" placeholder="Enter card content"></textarea>
                    </div>
                    <button class="btn btn-success" onclick="createCard()">Create Card</button>
                </div>
                
                <!-- Create List -->
                <div class="control-section">
                    <h3>📝 Create List Item</h3>
                    <div class="form-group">
                        <label for="listItem">List Item Text:</label>
                        <input type="text" id="listItem" placeholder="Enter list item">
                    </div>
                    <button class="btn btn-primary" onclick="addListItem()">Add to List</button>
                </div>
                
                <!-- Create Table Row -->
                <div class="control-section">
                    <h3>📊 Add Table Row</h3>
                    <div class="form-group">
                        <label for="rowName">Name:</label>
                        <input type="text" id="rowName" placeholder="Enter name">
                    </div>
                    <div class="form-group">
                        <label for="rowEmail">Email:</label>
                        <input type="email" id="rowEmail" placeholder="Enter email">
                    </div>
                    <div class="form-group">
                        <label for="rowRole">Role:</label>
                        <select id="rowRole">
                            <option value="Admin">Admin</option>
                            <option value="User">User</option>
                            <option value="Guest">Guest</option>
                        </select>
                    </div>
                    <button class="btn btn-info" onclick="addTableRow()">Add Row</button>
                </div>
                
                <!-- Bulk Actions -->
                <div class="control-section">
                    <h3>⚡ Bulk Actions</h3>
                    <button class="btn btn-warning" onclick="modifyAllCards()">Modify All Cards</button>
                    <button class="btn btn-danger" onclick="clearAll()">Clear All Content</button>
                </div>
            </div>
            
            <!-- Canvas Area -->
            <div class="canvas">
                <h2>📱 Generated Content</h2>
                
                <div id="dynamicContent">
                    <h3 style="color: #666; margin: 20px 0;">Cards Section</h3>
                    <div id="cardsContainer">
                        <!-- Cards will be added here -->
                    </div>
                    
                    <h3 style="color: #666; margin: 20px 0;">List Section</h3>
                    <ul id="listContainer" class="generated-list">
                        <!-- List items will be added here -->
                    </ul>
                    
                    <h3 style="color: #666; margin: 20px 0;">Table Section</h3>
                    <table id="tableContainer" class="generated-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody id="tableBody">
                            <!-- Table rows will be added here -->
                        </tbody>
                    </table>
                </div>
                
                <div class="stats">
                    <div class="stat-item">
                        <div class="stat-number" id="cardCount">0</div>
                        <div class="stat-label">Cards</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number" id="listCount">0</div>
                        <div class="stat-label">List Items</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number" id="tableCount">0</div>
                        <div class="stat-label">Table Rows</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        let cardCounter = 0;
        let listCounter = 0;
        let tableCounter = 0;
        
        // TODO: Implement createElement and appendChild
        function createCard() {
            // TODO: Get input values
            // TODO: Create card element using createElement
            // TODO: Set innerHTML or create child elements
            // TODO: Add event listeners for edit/delete buttons
            // TODO: Append to cardsContainer
            // TODO: Update statistics
            // TODO: Clear input fields
        }
        
        function addListItem() {
            // TODO: Get input value
            // TODO: Create li element
            // TODO: Create delete button
            // TODO: Append to listContainer
            // TODO: Update statistics
            // TODO: Clear input field
        }
        
        function addTableRow() {
            // TODO: Get input values
            // TODO: Create tr element
            // TODO: Create td elements
            // TODO: Add action buttons (edit/delete)
            // TODO: Append to tableBody
            // TODO: Update statistics
            // TODO: Clear input fields
        }
        
        // TODO: Implement element modification
        function editCard(cardElement) {
            // TODO: Get current card content
            // TODO: Make content editable or show input
            // TODO: Add save/cancel buttons
            // TODO: Update card on save
        }
        
        function deleteCard(cardElement) {
            // TODO: Confirm deletion
            // TODO: Remove element from DOM using removeChild or remove()
            // TODO: Update statistics
        }
        
        function deleteListItem(listItem) {
            // TODO: Remove list item from DOM
            // TODO: Update statistics
        }
        
        function deleteTableRow(row) {
            // TODO: Remove table row from DOM
            // TODO: Update statistics
        }
        
        // TODO: Implement bulk operations
        function modifyAllCards() {
            // TODO: Select all cards
            // TODO: Modify their styles or content
            // TODO: Add animation effect
        }
        
        function clearAll() {
            // TODO: Confirm action
            // TODO: Remove all cards, list items, and table rows
            // TODO: Reset counters
            // TODO: Update statistics
        }
        
        // TODO: Implement statistics update
        function updateStats() {
            // TODO: Count cards in cardsContainer
            // TODO: Count list items in listContainer
            // TODO: Count rows in tableBody
            // TODO: Update stat displays
        }
        
        // TODO: Implement element cloning
        function cloneCard(cardElement) {
            // TODO: Use cloneNode() to duplicate card
            // TODO: Modify cloned card's content
            // TODO: Append to container
        }
        
        // TODO: Implement element attribute manipulation
        function setElementAttributes(element, attributes) {
            // TODO: Use setAttribute for each attribute
            // TODO: Set data attributes
            // TODO: Set class and id
        }
        
        // Utility functions
        function clearInputs(inputIds) {
            // TODO: Clear specified inputs
        }
        
        function showNotification(message, type) {
            // TODO: Create and show notification element
            // TODO: Auto-remove after delay
        }
    </script>
</body>
</html>
```

**Tasks:**

1. Use createElement() to create new DOM elements
2. Use appendChild(), insertBefore(), replaceChild()
3. Implement removeChild() and remove() for deletion
4. Use cloneNode() to duplicate elements
5. Manipulate element attributes with setAttribute/getAttribute
6. Create edit functionality with contenteditable or input replacement
7. Implement bulk operations on multiple elements

---

## Exercise Set 7: Event Handling Mastery

### Exercise 7.1: Event Types Showcase

**Objective:** Learn and practice all major event types

**HTML Structure:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Types Showcase</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
            min-height: 100vh;
            padding: 20px;
        }
        .container {
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
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        .event-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 20px;
        }
        .event-card {
            background: white;
            border-radius: 15px;
            padding: 25px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }
        .event-card h2 {
            color: #2575fc;
            margin-bottom: 15px;
            padding-bottom: 10px;
            border-bottom: 2px solid #e0e0e0;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .demo-area {
            background: #f8f9fa;
            border-radius: 10px;
            padding: 20px;
            margin: 15px 0;
            min-height: 150px;
            border: 2px dashed #ddd;
            transition: all 0.3s ease;
        }
        .demo-area.active {
            border-color: #2575fc;
            background: #e3f2fd;
        }
        .event-log {
            background: #1e1e1e;
            color: #0f0;
            padding: 15px;
            border-radius: 8px;
            font-family: 'Courier New', monospace;
            font-size: 12px;
            max-height: 200px;
            overflow-y: auto;
            margin-top: 15px;
        }
        .event-log-entry {
            margin: 3px 0;
            padding: 3px;
        }
        .event-log-entry.mouse { color: #00ff00; }
        .event-log-entry.keyboard { color: #00ffff; }
        .event-log-entry.form { color: #ffff00; }
        .event-log-entry.window { color: #ff00ff; }
        .interactive-box {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            border-radius: 10px;
            text-align: center;
            cursor: pointer;
            user-select: none;
            transition: all 0.3s ease;
        }
        .interactive-box:hover {
            transform: scale(1.05);
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }
        .interactive-box:active {
            transform: scale(0.95);
        }
        .draggable-item {
            background: #ff6b6b;
            color: white;
            padding: 15px;
            border-radius: 8px;
            margin: 10px 0;
            cursor: move;
            user-select: none;
            transition: all 0.3s ease;
        }
        .draggable-item:hover {
            background: #ff5252;
        }
        .draggable-item.dragging {
            opacity: 0.5;
            transform: scale(1.1);
        }
        .drop-zone {
            background: #f8f9fa;
            border: 3px dashed #ddd;
            border-radius: 10px;
            padding: 20px;
            min-height: 150px;
            text-align: center;
            transition: all 0.3s ease;
        }
        .drop-zone.drag-over {
            border-color: #2575fc;
            background: #e3f2fd;
        }
        .form-group {
            margin: 15px 0;
        }
        .form-group label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
            color: #333;
        }
        .form-group input,
        .form-group select,
        .form-group textarea {
            width: 100%;
            padding: 10px;
            border: 2px solid #ddd;
            border-radius: 5px;
            font-size: 14px;
        }
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
            border-color: #2575fc;
            outline: none;
        }
        .btn {
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 14px;
            font-weight: bold;
            transition: all 0.3s ease;
            margin: 5px;
        }
        .btn-clear {
            background: #dc3545;
            color: white;
            width: 100%;
        }
        .btn-clear:hover {
            background: #c82333;
        }
        .coordinate-display {
            background: #e3f2fd;
            padding: 10px;
            border-radius: 5px;
            font-family: 'Courier New', monospace;
            margin: 10px 0;
        }
        .key-display {
            display: inline-block;
            background: #667eea;
            color: white;
            padding: 8px 12px;
            border-radius: 5px;
            margin: 5px;
            font-weight: bold;
            min-width: 50px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎯 Event Types Showcase</h1>
            <p>Explore and Master JavaScript Events</p>
        </div>
        
        <div class="event-grid">
            <!-- Mouse Events -->
            <div class="event-card">
                <h2>🖱️ Mouse Events</h2>
                <div class="demo-area" id="mouseDemo">
                    <div class="interactive-box" id="mouseBox">
                        Interact with me!
                        <br><small>Click, Double-click, Right-click, Hover</small>
                    </div>
                    <div class="coordinate-display" id="mouseCoords">
                        X: 0, Y: 0
                    </div>
                </div>
                <div class="event-log" id="mouseLog">
                    <div class="event-log-entry mouse">Mouse events will appear here...</div>
                </div>
                <button class="btn btn-clear" onclick="clearLog('mouseLog')">Clear Log</button>
            </div>
            
            <!-- Keyboard Events -->
            <div class="event-card">
                <h2>⌨️ Keyboard Events</h2>
                <div class="demo-area" id="keyboardDemo">
                    <div class="form-group">
                        <label for="keyInput">Type here to test keyboard events:</label>
                        <input type="text" id="keyInput" placeholder="Start typing...">
                    </div>
                    <div>
                        <strong>Last Key:</strong>
                        <span class="key-display" id="lastKey">-</span>
                    </div>
                    <div>
                        <strong>Key Code:</strong>
                        <span class="key-display" id="keyCode">-</span>
                    </div>
                </div>
                <div class="event-log" id="keyboardLog">
                    <div class="event-log-entry keyboard">Keyboard events will appear here...</div>
                </div>
                <button class="btn btn-clear" onclick="clearLog('keyboardLog')">Clear Log</button>
            </div>
            
            <!-- Form Events -->
            <div class="event-card">
                <h2>📝 Form Events</h2>
                <div class="demo-area" id="formDemo">
                    <form id="demoForm">
                        <div class="form-group">
                            <label for="username">Username:</label>
                            <input type="text" id="username" placeholder="Enter username">
                        </div>
                        <div class="form-group">
                            <label for="email">Email:</label>
                            <input type="email" id="email" placeholder="Enter email">
                        </div>
                        <div class="form-group">
                            <label for="country">Country:</label>
                            <select id="country">
                                <option value="">Select country</option>
                                <option value="usa">USA</option>
                                <option value="uk">UK</option>
                                <option value="canada">Canada</option>
                            </select>
                        </div>
                        <button type="submit" class="btn" style="background: #28a745; color: white; width: 100%;">Submit Form</button>
                    </form>
                </div>
                <div class="event-log" id="formLog">
                    <div class="event-log-entry form">Form events will appear here...</div>
                </div>
                <button class="btn btn-clear" onclick="clearLog('formLog')">Clear Log</button>
            </div>
            
            <!-- Drag and Drop Events -->
            <div class="event-card">
                <h2>🎯 Drag & Drop Events</h2>
                <div class="demo-area" id="dragDemo">
                    <div>
                        <strong>Draggable Items:</strong>
                        <div class="draggable-item" draggable="true">Item 1</div>
                        <div class="draggable-item" draggable="true">Item 2</div>
                        <div class="draggable-item" draggable="true">Item 3</div>
                    </div>
                    <div class="drop-zone" id="dropZone">
                        Drop items here
                    </div>
                </div>
                <div class="event-log" id="dragLog">
                    <div class="event-log-entry">Drag events will appear here...</div>
                </div>
                <button class="btn btn-clear" onclick="clearLog('dragLog')">Clear Log</button>
            </div>
            
            <!-- Focus Events -->
            <div class="event-card">
                <h2>🎯 Focus Events</h2>
                <div class="demo-area" id="focusDemo">
                    <div class="form-group">
                        <label for="field1">Field 1:</label>
                        <input type="text" id="field1" class="focus-field" placeholder="Click to focus">
                    </div>
                    <div class="form-group">
                        <label for="field2">Field 2:</label>
                        <input type="text" id="field2" class="focus-field" placeholder="Click to focus">
                    </div>
                    <div class="form-group">
                        <label for="field3">Field 3:</label>
                        <input type="text" id="field3" class="focus-field" placeholder="Click to focus">
                    </div>
                </div>
                <div class="event-log" id="focusLog">
                    <div class="event-log-entry">Focus events will appear here...</div>
                </div>
                <button class="btn btn-clear" onclick="clearLog('focusLog')">Clear Log</button>
            </div>
            
            <!-- Window Events -->
            <div class="event-card">
                <h2>🪟 Window Events</h2>
                <div class="demo-area" id="windowDemo">
                    <p><strong>Window Width:</strong> <span id="windowWidth">-</span>px</p>
                    <p><strong>Window Height:</strong> <span id="windowHeight">-</span>px</p>
                    <p><strong>Scroll Position:</strong> <span id="scrollPos">-</span>px</p>
                    <p><small>Try resizing window or scrolling</small></p>
                </div>
                <div class="event-log" id="windowLog">
                    <div class="event-log-entry window">Window events will appear here...</div>
                </div>
                <button class="btn btn-clear" onclick="clearLog('windowLog')">Clear Log</button>
            </div>
        </div>
    </div>

    <script>
        // TODO: Implement Mouse Events
        function setupMouseEvents() {
            // TODO: Add click event listener
            // TODO: Add dblclick event listener
            // TODO: Add contextmenu event listener
            // TODO: Add mouseenter and mouseleave listeners
            // TODO: Add mousemove listener to track coordinates
            // TODO: Add mousedown and mouseup listeners
            // TODO: Log all events to mouseLog
        }
        
        // TODO: Implement Keyboard Events
        function setupKeyboardEvents() {
            // TODO: Add keydown event listener
            // TODO: Add keyup event listener
            // TODO: Add keypress event listener (if supported)
            // TODO: Display key and keyCode
            // TODO: Handle special keys (Ctrl, Alt, Shift)
            // TODO: Log all events to keyboardLog
        }
        
        // TODO: Implement Form Events
        function setupFormEvents() {
            // TODO: Add submit event listener (prevent default)
            // TODO: Add input event listeners for real-time validation
            // TODO: Add change event listeners for select
            // TODO: Add focus and blur events
            // TODO: Implement form validation
            // TODO: Log all events to formLog
        }
        
        // TODO: Implement Drag and Drop Events
        function setupDragDropEvents() {
            // TODO: Add dragstart event to draggable items
            // TODO: Add dragend event
            // TODO: Add dragover event to drop zone (prevent default)
            // TODO: Add drop event to drop zone
            // TODO: Add dragenter and dragleave for visual feedback
            // TODO: Implement item transfer logic
            // TODO: Log all events to dragLog
        }
        
        // TODO: Implement Focus Events
        function setupFocusEvents() {
            // TODO: Add focus event listeners to all focus-field inputs
            // TODO: Add blur event listeners
            // TODO: Add focusin and focusout event listeners
            // TODO: Change styles on focus/blur
            // TODO: Log all events to focusLog
        }
        
        // TODO: Implement Window Events
        function setupWindowEvents() {
            // TODO: Add resize event listener
            // TODO: Add scroll event listener
            // TODO: Add load event listener
            // TODO: Update window dimensions display
            // TODO: Update scroll position display
            // TODO: Log all events to windowLog (with throttling)
        }
        
        // Utility Functions
        function logEvent(logId, message, className = '') {
            // TODO: Create log entry element
            // TODO: Add to specified log container
            // TODO: Auto-scroll to bottom
            // TODO: Limit number of entries (max 50)
        }
        
        function clearLog(logId) {
            // TODO: Clear specified event log
        }
        
        function formatTime() {
            // TODO: Return formatted timestamp
        }
        
        // Initialize all event listeners when DOM is ready
        document.addEventListener('DOMContentLoaded', function() {
            // TODO: Call all setup functions
            // TODO: Set initial window dimensions
        });
    </script>
</body>
</html>
```

**Tasks:**

1. Implement mouse events (click, dblclick, mouseenter, mouseleave, mousemove)
2. Handle keyboard events (keydown, keyup, keypress) with key detection
3. Work with form events (submit, input, change, focus, blur)
4. Implement drag and drop functionality
5. Handle focus and blur events with visual feedback
6. Monitor window events (resize, scroll, load)
7. Create comprehensive event logging system

---

### Exercise 7.2: Event Delegation and Propagation

**Objective:** Understand event bubbling, capturing, and delegation

**HTML Structure:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Delegation & Propagation</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #ff6b6b 0%, #feca57 100%);
            min-height: 100vh;
            padding: 20px;
        }
        .container {
            max-width: 1400px;
            margin: 0 auto;
        }
        .header {
            text-align: center;
            color: white;
            margin-bottom: 30px;
        }
        .header h1 {
            font-size: 3em;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        .demo-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-bottom: 20px;
        }
        .demo-card {
            background: white;
            border-radius: 15px;
            padding: 25px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }
        .demo-card h2 {
            color: #ff6b6b;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #e0e0e0;
        }
        .nested-boxes {
            position: relative;
        }
        .box {
            padding: 30px;
            border: 3px solid;
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .box-grandparent {
            border-color: #e74c3c;
            background: rgba(231, 76, 60, 0.1);
        }
        .box-parent {
            border-color: #3498db;
            background: rgba(52, 152, 219, 0.1);
            margin: 20px;
        }
        .box-child {
            border-color: #2ecc71;
            background: rgba(46, 204, 113, 0.1);
            margin: 20px;
        }
        .box-inner {
            border-color: #f39c12;
            background: rgba(243, 156, 18, 0.1);
            margin: 20px;
            text-align: center;
            padding: 20px;
        }
        .box:hover {
            transform: scale(1.02);
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }
        .box-label {
            font-weight: bold;
            font-size: 14px;
            margin-bottom: 10px;
        }
        .event-flow-log {
            background: #1e1e1e;
            color: #fff;
            padding: 15px;
            border-radius: 8px;
            font-family: 'Courier New', monospace;
            font-size: 12px;
            max-height: 300px;
            overflow-y: auto;
            margin: 15px 0;
        }
        .log-entry {
            padding: 5px;
            margin: 3px 0;
            border-left: 3px solid;
        }
        .log-capture {
            border-left-color: #e74c3c;
            color: #ff6b6b;
        }
        .log-bubble {
            border-left-color: #3498db;
            color: #5dade2;
        }
        .log-target {
            border-left-color: #2ecc71;
            color: #58d68d;
            font-weight: bold;
        }
        .controls {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 8px;
            margin: 15px 0;
        }
        .control-group {
            margin: 10px 0;
        }
        .control-group label {
            display: flex;
            align-items: center;
            gap: 10px;
            cursor: pointer;
            font-weight: bold;
        }
        .control-group input[type="checkbox"] {
            transform: scale(1.5);
        }
        .btn {
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 14px;
            font-weight: bold;
            transition: all 0.3s ease;
            margin: 5px;
        }
        .btn-clear {
            background: #dc3545;
            color: white;
            width: 100%;
        }
        .btn-add {
            background: #28a745;
            color: white;
        }
        .btn-remove {
            background: #ffc107;
            color: #333;
        }
        .dynamic-list {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 10px;
            min-height: 200px;
        }
        .dynamic-item {
            background: white;
            padding: 15px;
            margin: 10px 0;
            border-radius: 8px;
            border-left: 4px solid #667eea;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: all 0.3s ease;
            cursor: pointer;
        }
        .dynamic-item:hover {
            background: #e3f2fd;
            transform: translateX(5px);
        }
        .dynamic-item.clicked {
            background: #c8e6c9;
            border-left-color: #4caf50;
        }
        .item-btn {
            padding: 5px 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 12px;
            font-weight: bold;
            transition: all 0.3s ease;
        }
        .item-btn-edit {
            background: #2196f3;
            color: white;
            margin-right: 5px;
        }
        .item-btn-delete {
            background: #f44336;
            color: white;
        }
        .explanation {
            background: #e3f2fd;
            padding: 15px;
            border-radius: 8px;
            margin: 15px 0;
            border-left: 4px solid #2196f3;
        }
        .explanation h4 {
            color: #1976d2;
            margin-bottom: 10px;
        }
        .explanation ul {
            margin-left: 20px;
        }
        .explanation li {
            margin: 5px 0;
            line-height: 1.6;
        }
        .stats-panel {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px;
            border-radius: 10px;
            margin-top: 20px;
        }
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 15px;
            margin-top: 15px;
        }
        .stat-item {
            text-align: center;
        }
        .stat-number {
            font-size: 2em;
            font-weight: bold;
        }
        .stat-label {
            font-size: 0.9em;
            opacity: 0.9;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎭 Event Delegation & Propagation</h1>
            <p>Master Event Flow, Bubbling, and Delegation</p>
        </div>
        
        <div class="demo-grid">
            <!-- Event Propagation Demo -->
            <div class="demo-card">
                <h2>📊 Event Propagation Flow</h2>
                
                <div class="explanation">
                    <h4>Event Flow Phases:</h4>
                    <ul>
                        <li><strong style="color: #e74c3c;">Capture Phase:</strong> Event travels down from window to target</li>
                        <li><strong style="color: #2ecc71;">Target Phase:</strong> Event reaches the target element</li>
                        <li><strong style="color: #3498db;">Bubble Phase:</strong> Event bubbles up from target to window</li>
                    </ul>
                </div>
                
                <div class="controls">
                    <div class="control-group">
                        <label>
                            <input type="checkbox" id="enableCapture" checked>
                            Enable Capture Phase
                        </label>
                    </div>
                    <div class="control-group">
                        <label>
                            <input type="checkbox" id="enableBubble" checked>
                            Enable Bubble Phase
                        </label>
                    </div>
                    <div class="control-group">
                        <label>
                            <input type="checkbox" id="stopPropagation">
                            Stop Propagation at Target
                        </label>
                    </div>
                </div>
                
                <div class="nested-boxes">
                    <div class="box box-grandparent" data-level="grandparent">
                        <div class="box-label">🔴 Grandparent</div>
                        <div class="box box-parent" data-level="parent">
                            <div class="box-label">🔵 Parent</div>
                            <div class="box box-child" data-level="child">
                                <div class="box-label">🟢 Child</div>
                                <div class="box box-inner" data-level="inner">
                                    <div class="box-label">🟡 Click Me!</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="event-flow-log" id="propagationLog">
                    <div class="log-entry">Click on nested boxes to see event flow...</div>
                </div>
                
                <button class="btn btn-clear" onclick="clearPropagationLog()">Clear Log</button>
            </div>
            
            <!-- Event Delegation Demo -->
            <div class="demo-card">
                <h2>🎯 Event Delegation</h2>
                
                <div class="explanation">
                    <h4>Event Delegation Benefits:</h4>
                    <ul>
                        <li>Better performance - single listener for many elements</li>
                        <li>Works with dynamically added elements</li>
                        <li>Reduced memory usage</li>
                        <li>Simpler code maintenance</li>
                    </ul>
                </div>
                
                <div style="margin: 15px 0;">
                    <button class="btn btn-add" onclick="addDynamicItem()">➕ Add New Item</button>
                    <button class="btn btn-remove" onclick="removeAllItems()">🗑️ Remove All</button>
                </div>
                
                <div class="dynamic-list" id="dynamicList">
                    <!-- Items will be added here dynamically -->
                </div>
                
                <div class="event-flow-log" id="delegationLog">
                    <div class="log-entry">Delegation events will appear here...</div>
                </div>
                
                <button class="btn btn-clear" onclick="clearDelegationLog()">Clear Log</button>
            </div>
        </div>
        
        <!-- Statistics Panel -->
        <div class="stats-panel">
            <h3>📈 Event Statistics</h3>
            <div class="stats-grid">
                <div class="stat-item">
                    <div class="stat-number" id="captureCount">0</div>
                    <div class="stat-label">Capture Events</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number" id="bubbleCount">0</div>
                    <div class="stat-label">Bubble Events</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number" id="delegationCount">0</div>
                    <div class="stat-label">Delegated Events</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number" id="itemCount">0</div>
                    <div class="stat-label">Dynamic Items</div>
                </div>
            </div>
        </div>
    </div>

    <script>
        let captureEventCount = 0;
        let bubbleEventCount = 0;
        let delegationEventCount = 0;
        let dynamicItemCounter = 0;
        
        // TODO: Implement Event Propagation Demo
        function setupPropagationDemo() {
            // TODO: Select all nested boxes
            // TODO: Add event listeners in CAPTURE phase
            // TODO: Add event listeners in BUBBLE phase
            // TODO: Log events showing the flow
            // TODO: Implement stopPropagation based on checkbox
            // TODO: Update statistics
        }
        
        // TODO: Implement Event Delegation
        function setupEventDelegation() {
            // TODO: Add single event listener to parent container (dynamicList)
            // TODO: Use event.target to determine clicked element
            // TODO: Handle clicks on items, edit buttons, delete buttons
            // TODO: Demonstrate delegation working with dynamic elements
            // TODO: Update statistics
        }
        
        // TODO: Add dynamic items
        function addDynamicItem() {
            // TODO: Create new item element
            // TODO: Add item number/id
            // TODO: Add edit and delete buttons
            // TODO: Append to dynamic list
            // TODO: Update item count
            // TODO: Log to delegation log
        }
        
        // TODO: Remove all items
        function removeAllItems() {
            // TODO: Clear dynamic list
            // TODO: Reset counter
            // TODO: Update statistics
        }
        
        // TODO: Handle delegated click on item
        function handleItemClick(item) {
            // TODO: Toggle clicked class
            // TODO: Log event
            // TODO: Update statistics
        }
        
        // TODO: Handle delegated edit action
        function handleItemEdit(item) {
            // TODO: Make item editable
            // TODO: Show save/cancel buttons
            // TODO: Log event
        }
        
        // TODO: Handle delegated delete action
        function handleItemDelete(item) {
            // TODO: Remove item from DOM
            // TODO: Update item count
            // TODO: Log event
        }
        
        // TODO: Log propagation event
        function logPropagationEvent(element, phase) {
            // TODO: Create log entry with element info and phase
            // TODO: Add to propagation log
            // TODO: Update statistics
            // TODO: Auto-scroll log
        }
        
        // TODO: Log delegation event
        function logDelegationEvent(action, target) {
            // TODO: Create log entry
            // TODO: Add to delegation log
            // TODO: Update statistics
        }
        
        // TODO: Update statistics display
        function updateStats() {
            // TODO: Update all stat counters
            // TODO: Update item count
        }
        
        // TODO: Clear logs
        function clearPropagationLog() {
            // TODO: Clear propagation log
            // TODO: Reset capture and bubble counts
            // TODO: Update statistics
        }
        
        function clearDelegationLog() {
            // TODO: Clear delegation log
            // TODO: Reset delegation count
            // TODO: Update statistics
        }
        
        // TODO: Demonstrate stopPropagation
        function demonstrateStopPropagation(event) {
            // TODO: Check if stopPropagation checkbox is checked
            // TODO: Call event.stopPropagation() if enabled
            // TODO: Log the action
        }
        
        // TODO: Demonstrate preventDefault
        function demonstratePreventDefault(event) {
            // TODO: Prevent default action
            // TODO: Log the action
        }
        
        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            // TODO: Setup propagation demo
            // TODO: Setup event delegation
            // TODO: Add initial dynamic items (3-5 items)
            // TODO: Update statistics
        });
    </script>
</body>
</html>
```

**Tasks:**

1. Implement event listeners in both capture and bubble phases
2. Demonstrate event propagation through nested elements
3. Use stopPropagation() and stopImmediatePropagation()
4. Implement event delegation for dynamic elements
5. Use event.target and event.currentTarget properly
6. Create comprehensive logging of event flow
7. Show performance benefits of delegation vs individual listeners

---

## Exercise Set 8: Advanced Event Patterns

### Exercise 8.1: Custom Events and Event Dispatcher

**Objective:** Create and dispatch custom events

**HTML Structure:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Custom Events & Event Dispatcher</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
            min-height: 100vh;
            padding: 20px;
        }
        .container {
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
            text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
        }
        .demo-layout {
            display: grid;
            grid-template-columns: 350px 1fr;
            gap: 20px;
        }
        .control-panel {
            background: white;
            border-radius: 15px;
            padding: 25px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            height: fit-content;
        }
        .control-section {
            margin-bottom: 25px;
            padding-bottom: 20px;
            border-bottom: 2px solid #f0f0f0;
        }
        .control-section:last-child {
            border-bottom: none;
        }
        .control-section h3 {
            color: #38f9d7;
            margin-bottom: 15px;
        }
        .form-group {
            margin-bottom: 15px;
        }
        .form-group label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
            color: #333;
        }
        .form-group input,
        .form-group select,
        .form-group textarea {
            width: 100%;
            padding: 10px;
            border: 2px solid #ddd;
            border-radius: 5px;
            font-size: 14px;
        }
        .btn {
            width: 100%;
            padding: 12px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 14px;
            font-weight: bold;
            transition: all 0.3s ease;
            margin-bottom: 10px;
        }
        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }
        .btn-primary { background: #38f9d7; color: #333; }
        .btn-success { background: #28a745; color: white; }
        .btn-warning { background: #ffc107; color: #333; }
        .btn-danger { background: #dc3545; color: white; }
        .display-area {
            background: white;
            border-radius: 15px;
            padding: 30px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }
        .display-area h2 {
            color: #333;
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 3px solid #38f9d7;
        }
        .event-timeline {
            position: relative;
            padding-left: 30px;
            margin: 20px 0;
        }
        .event-timeline::before {
            content: '';
            position: absolute;
            left: 10px;
            top: 0;
            bottom: 0;
            width: 3px;
            background: linear-gradient(180deg, #43e97b 0%, #38f9d7 100%);
        }
        .timeline-item {
            position: relative;
            background: #f8f9fa;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 15px;
            border-left: 4px solid #38f9d7;
            animation: slideIn 0.3s ease-out;
        }
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateX(-20px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        .timeline-item::before {
            content: '';
            position: absolute;
            left: -37px;
            top: 20px;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background: #38f9d7;
            border: 3px solid white;
        }
        .timeline-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
        }
        .event-type {
            font-weight: bold;
            color: #38f9d7;
            font-size: 1.1em;
        }
        .event-time {
            font-size: 0.9em;
            color: #666;
        }
        .event-details {
            background: white;
            padding: 10px;
            border-radius: 5px;
            font-family: 'Courier New', monospace;
            font-size: 12px;
        }
        .event-data {
            margin: 5px 0;
            color: #333;
        }
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            z-index: 1000;
            min-width: 300px;
            animation: slideInRight 0.3s ease-out;
        }
        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(100px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        .notification.success {
            border-left: 5px solid #28a745;
        }
        .notification.warning {
            border-left: 5px solid #ffc107;
        }
        .notification.error {
            border-left: 5px solid #dc3545;
        }
        .notification.info {
            border-left: 5px solid #17a2b8;
        }
        .component-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }
        .component {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .component:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }
        .component h4 {
            margin-bottom: 10px;
        }
        .component.active {
            background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
            color: #333;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>✨ Custom Events & Event Dispatcher</h1>
            <p>Create and Manage Custom Events</p>
        </div>
        
        <div class="demo-layout">
            <!-- Control Panel -->
            <div class="control-panel">
                <div class="control-section">
                    <h3>🎯 Create Custom Event</h3>
                    <div class="form-group">
                        <label for="eventName">Event Name:</label>
                        <input type="text" id="eventName" placeholder="e.g., userLogin">
                    </div>
                    <div class="form-group">
                        <label for="eventData">Event Data (JSON):</label>
                        <textarea id="eventData" placeholder='{"user": "john", "role": "admin"}'></textarea>
                    </div>
                    <div class="form-group">
                        <label>
                            <input type="checkbox" id="bubbles" checked> Bubbles
                        </label>
                    </div>
                    <div class="form-group">
                        <label>
                            <input type="checkbox" id="cancelable" checked> Cancelable
                        </label>
                    </div>
                    <button class="btn btn-primary" onclick="dispatchCustomEvent()">Dispatch Event</button>
                </div>
                
                <div class="control-section">
                    <h3>🎪 Predefined Events</h3>
                    <button class="btn btn-success" onclick="triggerUserLogin()">User Login</button>
                    <button class="btn btn-warning" onclick="triggerDataUpdate()">Data Update</button>
                    <button class="btn btn-danger" onclick="triggerError()">Error Event</button>
                    <button class="btn btn-primary" onclick="triggerNotification()">Show Notification</button>
                </div>
                
                <div class="control-section">
                    <h3>📊 Statistics</h3>
                    <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
                        <div style="margin: 10px 0;">
                            <strong>Total Events:</strong>
                            <span id="totalEvents" style="color: #38f9d7; font-size: 1.5em; font-weight: bold;">0</span>
                        </div>
                        <div style="margin: 10px 0;">
                            <strong>Custom Events:</strong>
                            <span id="customEvents" style="color: #667eea; font-size: 1.5em; font-weight: bold;">0</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Display Area -->
            <div class="display-area">
                <h2>📺 Event Timeline</h2>
                
                <div class="component-grid">
                    <div class="component" id="component1">
                        <h4>Component 1</h4>
                        <p>Listening for events...</p>
                    </div>
                    <div class="component" id="component2">
                        <h4>Component 2</h4>
                        <p>Listening for events...</p>
                    </div>
                    <div class="component" id="component3">
                        <h4>Component 3</h4>
                        <p>Listening for events...</p>
                    </div>
                </div>
                
                <div class="event-timeline" id="eventTimeline">
                    <div class="timeline-item">
                        <div class="timeline-header">
                            <span class="event-type">System Ready</span>
                            <span class="event-time">00:00:00</span>
                        </div>
                        <div class="event-details">
                            <div class="event-data">Waiting for custom events...</div>
                        </div>
                    </div>
                </div>
                
                <button class="btn btn-danger" onclick="clearTimeline()" style="width: 200px;">Clear Timeline</button>
            </div>
        </div>
    </div>

    <script>
        let totalEventCount = 0;
        let customEventCount = 0;
        
        // TODO: Create EventDispatcher class
        class EventDispatcher {
            constructor() {
                // TODO: Initialize event listeners storage
            }
            
            addEventListener(eventType, callback) {
                // TODO: Add event listener
            }
            
            removeEventListener(eventType, callback) {
                // TODO: Remove event listener
            }
            
            dispatchEvent(eventType, eventData) {
                // TODO: Create and dispatch custom event
                // TODO: Call all registered listeners
            }
        }
        
        // TODO: Create custom event
        function dispatchCustomEvent() {
            // TODO: Get event name and data from inputs
            // TODO: Parse JSON data
            // TODO: Create CustomEvent with detail property
            // TODO: Dispatch to document
            // TODO: Log to timeline
            // TODO: Update statistics
        }
        
        // TODO: Trigger predefined user login event
        function triggerUserLogin() {
            // TODO: Create userLogin custom event
            // TODO: Include user data
            // TODO: Dispatch event
            // TODO: Show notification
        }
        
        // TODO: Trigger data update event
        function triggerDataUpdate() {
            // TODO: Create dataUpdate custom event
            // TODO: Include update information
            // TODO: Dispatch event
            // TODO: Update components
        }
        
        // TODO: Trigger error event
        function triggerError() {
            // TODO: Create error custom event
            // TODO: Include error details
            // TODO: Dispatch event
            // TODO: Show error notification
        }
        
        // TODO: Trigger notification event
        function triggerNotification() {
            // TODO: Create notification event
            // TODO: Show notification with custom message
        }
        
        // TODO: Setup event listeners on components
        function setupComponentListeners() {
            // TODO: Add listeners to all components
            // TODO: Listen for custom events
            // TODO: React to events with visual feedback
        }
        
        // TODO: Add event to timeline
        function addToTimeline(eventType, eventData) {
            // TODO: Create timeline item element
            // TODO: Format event data
            // TODO: Add timestamp
            // TODO: Insert at top of timeline
            // TODO: Limit timeline to 20 items
        }
        
        // TODO: Show notification
        function showNotification(message, type = 'info') {
            // TODO: Create notification element
            // TODO: Set type class (success, warning, error, info)
            // TODO: Append to body
            // TODO: Auto-remove after 3 seconds
        }
        
        // TODO: Update statistics
        function updateStatistics() {
            // TODO: Update total events count
            // TODO: Update custom events count
        }
        
        // TODO: Clear timeline
        function clearTimeline() {
            // TODO: Remove all timeline items
            // TODO: Reset counters
            // TODO: Add initial message
        }
        
        // TODO: Highlight component
        function highlightComponent(componentId) {
            // TODO: Add active class
            // TODO: Remove after delay
        }
        
        // TODO: Format timestamp
        function getCurrentTime() {
            // TODO: Return formatted time string (HH:MM:SS)
        }
        
        // TODO: Initialize application
        document.addEventListener('DOMContentLoaded', function() {
            // TODO: Setup component listeners
            // TODO: Add global event listeners for custom events
            // TODO: Initialize event dispatcher
        });
        
        // TODO: Create custom event listeners
        document.addEventListener('userLogin', function(e) {
            // TODO: Handle user login event
        });
        
        document.addEventListener('dataUpdate', function(e) {
            // TODO: Handle data update event
        });
        
        document.addEventListener('error', function(e) {
            // TODO: Handle error event
        });
    </script>
</body>
</html>
```

**Tasks:**

1. Create custom events using CustomEvent constructor
2. Dispatch custom events with detail data
3. Build an EventDispatcher class
4. Implement event listeners for custom events
5. Pass complex data through custom events
6. Create a visual event timeline
7. Build a notification system using custom events
8. Demonstrate bubbling and cancelable custom events

---

## Summary & Learning Objectives

### **DOM & Events Skills Covered:**

#### **DOM Selection & Traversal:**

1. getElementById, getElementsByClassName, getElementsByTagName
2. querySelector and querySelectorAll
3. Parent, children, siblings navigation
4. closest() for ancestor selection
5. Attribute selectors and data attributes

#### **DOM Manipulation:**

1. createElement, appendChild, insertBefore
2. removeChild, remove, replaceChild
3. cloneNode for element duplication
4. innerHTML vs textContent vs innerText
5. setAttribute, getAttribute, dataset
6. classList manipulation

#### **Event Types:**

1. Mouse events (click, dblclick, mouseenter, mouseleave, mousemove)
2. Keyboard events (keydown, keyup, keypress)
3. Form events (submit, input, change, focus, blur)
4. Drag and drop events
5. Window events (resize, scroll, load)
6. Touch events (for mobile)

#### **Event Handling:**

1. addEventListener and removeEventListener
2. Event object properties (target, currentTarget, type)
3. preventDefault and stopPropagation
4. Event delegation pattern
5. Event bubbling and capturing
6. Custom events creation and dispatch

#### **Advanced Patterns:**

1. Event delegation for performance
2. Debouncing and throttling
3. Event dispatcher pattern
4. Custom event systems
5. Event-driven architecture

### **Best Practices:**

- Use event delegation for dynamic content
- Remove event listeners when no longer needed
- Use passive event listeners for scroll performance
- Prefer modern DOM methods (querySelector, classList)
- Avoid excessive DOM manipulation
- Cache DOM selections
- Use DocumentFragment for bulk insertions

Each exercise provides hands-on practice with real-world scenarios and interactive demonstrations!
