# JavaScript Functions Reference Guide

This document lists all JavaScript functions used in the exercise solutions, organized by category with explanations and examples.

---

## 📋 Table of Contents

1. [DOM Selection Methods](#dom-selection-methods)
2. [DOM Manipulation Methods](#dom-manipulation-methods)
3. [Event Handling Methods](#event-handling-methods)
4. [Array Methods](#array-methods)
5. [String Methods](#string-methods)
6. [Math Functions](#math-functions)
7. [Object Methods](#object-methods)
8. [Date and Time Methods](#date-and-time-methods)
9. [Storage API (localStorage)](#storage-api-localstorage)
10. [Type Checking Functions](#type-checking-functions)
11. [Conversion Functions](#conversion-functions)
12. [Utility Functions](#utility-functions)

---

## DOM Selection Methods

### `document.getElementById(id)`

Selects a single element by its ID attribute.

**Syntax:** `document.getElementById('elementId')`

**Example:**

```javascript
const header = document.getElementById('mainHeader');
header.textContent = 'Welcome!';
```

---

### `document.getElementsByClassName(className)`

Returns a live HTMLCollection of elements with the specified class name.

**Syntax:** `document.getElementsByClassName('className')`

**Example:**

```javascript
const menuItems = document.getElementsByClassName('menu-item');
console.log(menuItems.length); // Number of elements with class 'menu-item'
```

---

### `document.getElementsByTagName(tagName)`

Returns a live HTMLCollection of elements with the specified tag name.

**Syntax:** `document.getElementsByTagName('tagName')`

**Example:**

```javascript
const allParagraphs = document.getElementsByTagName('p');
for (let p of allParagraphs) {
    p.style.color = 'blue';
}
```

---

### `document.querySelector(selector)`

Returns the first element that matches the CSS selector.

**Syntax:** `document.querySelector('cssSelector')`

**Example:**

```javascript
const firstButton = document.querySelector('.btn-primary');
const activeItem = document.querySelector('.menu-item.active');
```

---

### `document.querySelectorAll(selector)`

Returns a static NodeList of all elements that match the CSS selector.

**Syntax:** `document.querySelectorAll('cssSelector')`

**Example:**

```javascript
const allButtons = document.querySelectorAll('button');
allButtons.forEach(btn => {
    btn.addEventListener('click', () => console.log('Clicked!'));
});
```

---

### `element.closest(selector)`

Traverses the element and its parents until it finds a node that matches the selector.

**Syntax:** `element.closest('cssSelector')`

**Example:**

```javascript
const authorSpan = document.querySelector('.author');
const article = authorSpan.closest('.article');
console.log(article); // The parent article element
```

---

## DOM Manipulation Methods

### `document.createElement(tagName)`

Creates a new HTML element.

**Syntax:** `document.createElement('tagName')`

**Example:**

```javascript
const newDiv = document.createElement('div');
newDiv.className = 'card';
newDiv.textContent = 'Hello World';
```

---

### `element.appendChild(childElement)`

Adds a child element to the end of the parent element's children.

**Syntax:** `parentElement.appendChild(childElement)`

**Example:**

```javascript
const list = document.getElementById('myList');
const newItem = document.createElement('li');
newItem.textContent = 'New Item';
list.appendChild(newItem);
```

---

### `element.insertBefore(newNode, referenceNode)`

Inserts a new node before the reference node.

**Syntax:** `parentElement.insertBefore(newNode, referenceNode)`

**Example:**

```javascript
const parent = document.getElementById('container');
const newElement = document.createElement('div');
const referenceElement = parent.firstChild;
parent.insertBefore(newElement, referenceElement);
```

---

### `element.remove()`

Removes the element from the DOM.

**Syntax:** `element.remove()`

**Example:**

```javascript
const oldElement = document.getElementById('obsolete');
oldElement.remove();
```

---

### `element.removeChild(childElement)`

Removes a child element from a parent element.

**Syntax:** `parentElement.removeChild(childElement)`

**Example:**

```javascript
const parent = document.getElementById('container');
const child = document.getElementById('oldChild');
parent.removeChild(child);
```

---

### `element.cloneNode(deep)`

Creates a copy of the element. If `deep` is true, it clones all descendants.

**Syntax:** `element.cloneNode(true)` or `element.cloneNode(false)`

**Example:**

```javascript
const original = document.getElementById('template');
const clone = original.cloneNode(true); // Deep clone with all children
document.body.appendChild(clone);
```

---

### `element.setAttribute(name, value)`

Sets the value of an attribute on the element.

**Syntax:** `element.setAttribute('attributeName', 'value')`

**Example:**

```javascript
const img = document.querySelector('img');
img.setAttribute('src', 'image.jpg');
img.setAttribute('alt', 'Description');
```

---

### `element.getAttribute(name)`

Returns the value of a specified attribute.

**Syntax:** `element.getAttribute('attributeName')`

**Example:**

```javascript
const link = document.querySelector('a');
const href = link.getAttribute('href');
console.log(href);
```

---

### `element.classList.add(className)`

Adds one or more class names to an element.

**Syntax:** `element.classList.add('className')`

**Example:**

```javascript
const button = document.querySelector('button');
button.classList.add('active', 'highlighted');
```

---

### `element.classList.remove(className)`

Removes one or more class names from an element.

**Syntax:** `element.classList.remove('className')`

**Example:**

```javascript
const button = document.querySelector('button');
button.classList.remove('active');
```

---

### `element.classList.toggle(className)`

Toggles a class name (adds if not present, removes if present).

**Syntax:** `element.classList.toggle('className')`

**Example:**

```javascript
const menu = document.getElementById('menu');
menu.classList.toggle('open'); // Toggles 'open' class
```

---

### `element.classList.contains(className)`

Returns true if the element has the specified class.

**Syntax:** `element.classList.contains('className')`

**Example:**

```javascript
if (element.classList.contains('active')) {
    console.log('Element is active');
}
```

---

## Event Handling Methods

### `element.addEventListener(event, callback, options)`

Attaches an event listener to an element.

**Syntax:** `element.addEventListener('eventType', function, captureOrOptions)`

**Example:**

```javascript
const button = document.querySelector('button');
button.addEventListener('click', function(e) {
    console.log('Button clicked!', e);
});

// With capture phase
element.addEventListener('click', handler, true);

// With options
element.addEventListener('click', handler, { once: true, capture: false });
```

---

### `element.removeEventListener(event, callback)`

Removes an event listener from an element.

**Syntax:** `element.removeEventListener('eventType', functionReference)`

**Example:**

```javascript
function handleClick(e) {
    console.log('Clicked!');
}

button.addEventListener('click', handleClick);
button.removeEventListener('click', handleClick); // Must use same function reference
```

---

### `event.preventDefault()`

Prevents the default action of an event.

**Syntax:** `event.preventDefault()`

**Example:**

```javascript
const link = document.querySelector('a');
link.addEventListener('click', function(e) {
    e.preventDefault(); // Prevents navigation
    console.log('Link clicked but navigation prevented');
});
```

---

### `event.stopPropagation()`

Stops the event from bubbling up the DOM tree.

**Syntax:** `event.stopPropagation()`

**Example:**

```javascript
childElement.addEventListener('click', function(e) {
    e.stopPropagation(); // Parent's click handler won't fire
    console.log('Child clicked');
});
```

---

### `document.dispatchEvent(event)`

Dispatches a custom event.

**Syntax:** `document.dispatchEvent(event)`

**Example:**

```javascript
const customEvent = new CustomEvent('userLogin', {
    detail: { username: 'john', role: 'admin' },
    bubbles: true,
    cancelable: true
});
document.dispatchEvent(customEvent);
```

---

### `new CustomEvent(type, options)`

Creates a custom event object.

**Syntax:** `new CustomEvent('eventName', { detail: data, bubbles: bool, cancelable: bool })`

**Example:**

```javascript
const event = new CustomEvent('dataUpdate', {
    detail: { records: 25 },
    bubbles: true
});
document.dispatchEvent(event);
```

---

## Array Methods

### `Array.from(arrayLike)`

Creates a new array from an array-like or iterable object.

**Syntax:** `Array.from(arrayLike, mapFunction)`

**Example:**

```javascript
const nodeList = document.querySelectorAll('.item');
const array = Array.from(nodeList);
array.forEach(item => console.log(item));
```

---

### `array.push(element)`

Adds one or more elements to the end of an array.

**Syntax:** `array.push(element1, element2, ...)`

**Example:**

```javascript
const students = ['Alice', 'Bob'];
students.push('Charlie');
console.log(students); // ['Alice', 'Bob', 'Charlie']
```

---

### `array.pop()`

Removes and returns the last element from an array.

**Syntax:** `array.pop()`

**Example:**

```javascript
const numbers = [1, 2, 3, 4];
const last = numbers.pop();
console.log(last); // 4
console.log(numbers); // [1, 2, 3]
```

---

### `array.unshift(element)`

Adds one or more elements to the beginning of an array.

**Syntax:** `array.unshift(element1, element2, ...)`

**Example:**

```javascript
const history = ['page2', 'page3'];
history.unshift('page1');
console.log(history); // ['page1', 'page2', 'page3']
```

---

### `array.forEach(callback)`

Executes a function for each array element.

**Syntax:** `array.forEach((element, index, array) => { })`

**Example:**

```javascript
const colors = ['red', 'green', 'blue'];
colors.forEach((color, index) => {
    console.log(`${index}: ${color}`);
});
```

---

### `array.map(callback)`

Creates a new array with the results of calling a function on every element.

**Syntax:** `array.map((element, index, array) => { return newValue })`

**Example:**

```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]

const grades = students.map(s => s.grade);
```

---

### `array.filter(callback)`

Creates a new array with elements that pass a test.

**Syntax:** `array.filter((element, index, array) => { return boolean })`

**Example:**

```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6]

const activeStudents = students.filter(s => !s.completed);
```

---

### `array.find(callback)`

Returns the first element that satisfies the testing function.

**Syntax:** `array.find((element, index, array) => { return boolean })`

**Example:**

```javascript
const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
];
const user = users.find(u => u.id === 2);
console.log(user); // { id: 2, name: 'Jane' }
```

---

### `array.findIndex(callback)`

Returns the index of the first element that satisfies the testing function.

**Syntax:** `array.findIndex((element, index, array) => { return boolean })`

**Example:**

```javascript
const students = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
];
const index = students.findIndex(s => s.id === 2);
console.log(index); // 1
```

---

### `array.reduce(callback, initialValue)`

Reduces an array to a single value by executing a reducer function.

**Syntax:** `array.reduce((accumulator, current, index, array) => { return newAcc }, initialValue)`

**Example:**

```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 10

const totalGrades = students.reduce((sum, student) => sum + student.grade, 0);
```

---

### `array.sort(compareFunction)`

Sorts the elements of an array in place.

**Syntax:** `array.sort((a, b) => { return comparison })`

**Example:**

```javascript
const numbers = [3, 1, 4, 1, 5];
numbers.sort((a, b) => a - b); // Ascending
console.log(numbers); // [1, 1, 3, 4, 5]

students.sort((a, b) => a.name.localeCompare(b.name)); // Sort by name
students.sort((a, b) => b.grade - a.grade); // Sort by grade descending
```

---

### `array.join(separator)`

Joins all array elements into a string.

**Syntax:** `array.join('separator')`

**Example:**

```javascript
const words = ['Hello', 'World'];
const sentence = words.join(' ');
console.log(sentence); // 'Hello World'

const cities = ['Paris', 'London', 'Tokyo'];
console.log(cities.join(', ')); // 'Paris, London, Tokyo'
```

---

### `array.includes(value)`

Checks if an array contains a specific value.

**Syntax:** `array.includes(valueToFind)`

**Example:**

```javascript
const fruits = ['apple', 'banana', 'orange'];
console.log(fruits.includes('banana')); // true
console.log(fruits.includes('grape')); // false
```

---

## String Methods

### `string.trim()`

Removes whitespace from both ends of a string.

**Syntax:** `string.trim()`

**Example:**

```javascript
const input = '  Hello World  ';
const cleaned = input.trim();
console.log(cleaned); // 'Hello World'
```

---

### `string.toLowerCase()`

Converts a string to lowercase.

**Syntax:** `string.toLowerCase()`

**Example:**

```javascript
const text = 'HELLO World';
console.log(text.toLowerCase()); // 'hello world'
```

---

### `string.toUpperCase()`

Converts a string to uppercase.

**Syntax:** `string.toUpperCase()`

**Example:**

```javascript
const text = 'hello world';
console.log(text.toUpperCase()); // 'HELLO WORLD'
```

---

### `string.includes(substring)`

Checks if a string contains a specified substring.

**Syntax:** `string.includes(searchString)`

**Example:**

```javascript
const email = 'user@example.com';
console.log(email.includes('@')); // true

const name = 'John Doe';
console.log(name.toLowerCase().includes('john')); // true
```

---

### `string.split(separator)`

Splits a string into an array of substrings.

**Syntax:** `string.split('separator')`

**Example:**

```javascript
const csv = 'apple,banana,orange';
const fruits = csv.split(',');
console.log(fruits); // ['apple', 'banana', 'orange']

const className = 'btn primary active';
const classes = className.split(' ');
```

---

### `string.localeCompare(otherString)`

Compares two strings in the current locale.

**Syntax:** `string1.localeCompare(string2)`

**Example:**

```javascript
const name1 = 'Alice';
const name2 = 'Bob';
console.log(name1.localeCompare(name2)); // -1 (Alice comes before Bob)

// Use in sorting
names.sort((a, b) => a.localeCompare(b));
```

---

### `string.repeat(count)`

Returns a new string with the original repeated a specified number of times.

**Syntax:** `string.repeat(count)`

**Example:**

```javascript
const indent = '  '.repeat(3);
console.log(indent + 'text'); // '      text'
```

---

## Math Functions

### `Math.round(number)`

Rounds a number to the nearest integer.

**Syntax:** `Math.round(number)`

**Example:**

```javascript
console.log(Math.round(4.5)); // 5
console.log(Math.round(4.4)); // 4

const result = num1 / num2;
const rounded = Math.round(result * 100) / 100; // Round to 2 decimals
```

---

### `Math.floor(number)`

Rounds down to the nearest integer.

**Syntax:** `Math.floor(number)`

**Example:**

```javascript
console.log(Math.floor(4.9)); // 4
console.log(Math.floor(-4.1)); // -5

const randomIndex = Math.floor(Math.random() * array.length);
```

---

### `Math.ceil(number)`

Rounds up to the nearest integer.

**Syntax:** `Math.ceil(number)`

**Example:**

```javascript
console.log(Math.ceil(4.1)); // 5
console.log(Math.ceil(-4.9)); // -4
```

---

### `Math.max(...values)`

Returns the largest of zero or more numbers.

**Syntax:** `Math.max(num1, num2, ...)`

**Example:**

```javascript
console.log(Math.max(1, 5, 3, 9, 2)); // 9

const grades = [85, 92, 78, 95];
const highest = Math.max(...grades);
console.log(highest); // 95
```

---

### `Math.min(...values)`

Returns the smallest of zero or more numbers.

**Syntax:** `Math.min(num1, num2, ...)`

**Example:**

```javascript
console.log(Math.min(1, 5, 3, 9, 2)); // 1

const grades = [85, 92, 78, 95];
const lowest = Math.min(...grades);
console.log(lowest); // 78
```

---

### `Math.random()`

Returns a random number between 0 (inclusive) and 1 (exclusive).

**Syntax:** `Math.random()`

**Example:**

```javascript
const random = Math.random(); // e.g., 0.742891

// Random integer between min and max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const dice = getRandomInt(1, 6); // Random number 1-6
```

---

## Object Methods

### `Object.keys(object)`

Returns an array of an object's property names.

**Syntax:** `Object.keys(object)`

**Example:**

```javascript
const weatherData = {
    'New York': { temp: 22 },
    'London': { temp: 15 },
    'Tokyo': { temp: 28 }
};
const cities = Object.keys(weatherData);
console.log(cities); // ['New York', 'London', 'Tokyo']
```

---

### `JSON.stringify(object, replacer, space)`

Converts a JavaScript object to a JSON string.

**Syntax:** `JSON.stringify(object, null, indentation)`

**Example:**

```javascript
const user = { name: 'John', age: 30 };
const jsonString = JSON.stringify(user);
console.log(jsonString); // '{"name":"John","age":30}'

// Pretty print with indentation
const formatted = JSON.stringify(user, null, 2);
```

---

### `JSON.parse(string)`

Parses a JSON string and returns a JavaScript object.

**Syntax:** `JSON.parse(jsonString)`

**Example:**

```javascript
const jsonString = '{"name":"John","age":30}';
const user = JSON.parse(jsonString);
console.log(user.name); // 'John'

// Parse from localStorage
const storedData = localStorage.getItem('todos');
const todos = JSON.parse(storedData);
```

---

## Date and Time Methods

### `new Date()`

Creates a new Date object.

**Syntax:** `new Date()` or `new Date(dateString)` or `new Date(year, month, day)`

**Example:**

```javascript
const now = new Date();
console.log(now);

const specific = new Date('2024-01-15');
const dateAdded = new Date().toLocaleDateString();
```

---

### `date.toISOString()`

Returns a string in ISO 8601 format.

**Syntax:** `date.toISOString()`

**Example:**

```javascript
const now = new Date();
console.log(now.toISOString()); // '2024-01-15T10:30:00.000Z'

const timestamp = new Date().toISOString();
```

---

### `date.toLocaleDateString(locale, options)`

Returns a string representing the date portion.

**Syntax:** `date.toLocaleDateString('locale', options)`

**Example:**

```javascript
const date = new Date();
console.log(date.toLocaleDateString()); // '1/15/2024'
console.log(date.toLocaleDateString('en-US')); // '1/15/2024'
console.log(date.toLocaleDateString('ar-EG')); // '١٥‏/١‏/٢٠٢٤'
```

---

### `date.toLocaleTimeString(locale, options)`

Returns a string representing the time portion.

**Syntax:** `date.toLocaleTimeString('locale', options)`

**Example:**

```javascript
const now = new Date();
console.log(now.toLocaleTimeString('en-US', { hour12: false })); // '14:30:45'
console.log(now.toLocaleTimeString('en-US', { hour12: true })); // '2:30:45 PM'
```

---

### `Date.now()`

Returns the number of milliseconds since January 1, 1970.

**Syntax:** `Date.now()`

**Example:**

```javascript
const timestamp = Date.now();
console.log(timestamp); // 1705315200000

// Throttle function example
let lastCall = 0;
function throttle(delay) {
    const now = Date.now();
    if (now - lastCall >= delay) {
        lastCall = now;
        // Execute function
    }
}
```

---

## Storage API (localStorage)

### `localStorage.setItem(key, value)`

Stores a key-value pair in localStorage.

**Syntax:** `localStorage.setItem('key', 'value')`

**Example:**

```javascript
localStorage.setItem('username', 'John');

// Store objects (must stringify)
const user = { name: 'John', age: 30 };
localStorage.setItem('user', JSON.stringify(user));

// Store array
localStorage.setItem('todos', JSON.stringify(todosArray));
```

---

### `localStorage.getItem(key)`

Retrieves a value from localStorage.

**Syntax:** `localStorage.getItem('key')`

**Example:**

```javascript
const username = localStorage.getItem('username');
console.log(username); // 'John'

// Retrieve and parse objects
const userString = localStorage.getItem('user');
const user = JSON.parse(userString);

// With error handling
try {
    const todos = JSON.parse(localStorage.getItem('todos'));
} catch (e) {
    console.error('Error parsing data:', e);
}
```

---

### `localStorage.removeItem(key)`

Removes an item from localStorage.

**Syntax:** `localStorage.removeItem('key')`

**Example:**

```javascript
localStorage.removeItem('username');
```

---

### `localStorage.clear()`

Removes all items from localStorage.

**Syntax:** `localStorage.clear()`

**Example:**

```javascript
localStorage.clear(); // Clears all stored data
```

---

## Type Checking Functions

### `typeof value`

Returns a string indicating the type of a value.

**Syntax:** `typeof value`

**Example:**

```javascript
console.log(typeof 42); // 'number'
console.log(typeof 'hello'); // 'string'
console.log(typeof true); // 'boolean'
console.log(typeof undefined); // 'undefined'
console.log(typeof {}); // 'object'
console.log(typeof []); // 'object'
console.log(typeof null); // 'object' (JavaScript quirk)
```

---

### `isNaN(value)`

Checks if a value is NaN (Not-a-Number).

**Syntax:** `isNaN(value)`

**Example:**

```javascript
console.log(isNaN('hello')); // true
console.log(isNaN(123)); // false
console.log(isNaN('123')); // false (coerced to number)

// Validation
if (isNaN(userInput) || userInput === '') {
    alert('Please enter a valid number');
}
```

---

## Conversion Functions

### `parseInt(string, radix)`

Parses a string and returns an integer.

**Syntax:** `parseInt(string, radix)`

**Example:**

```javascript
const str = '42';
const num = parseInt(str);
console.log(num); // 42

const hex = parseInt('FF', 16);
console.log(hex); // 255

const age = parseInt(document.getElementById('age').value);
```

---

### `parseFloat(string)`

Parses a string and returns a floating-point number.

**Syntax:** `parseFloat(string)`

**Example:**

```javascript
const str = '3.14';
const num = parseFloat(str);
console.log(num); // 3.14

const price = parseFloat('19.99');
const grade = parseFloat(document.getElementById('grade').value);
```

---

### `Number(value)`

Converts a value to a number.

**Syntax:** `Number(value)`

**Example:**

```javascript
console.log(Number('42')); // 42
console.log(Number('3.14')); // 3.14
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number('hello')); // NaN
```

---

### `String(value)`

Converts a value to a string.

**Syntax:** `String(value)`

**Example:**

```javascript
console.log(String(42)); // '42'
console.log(String(true)); // 'true'
console.log(String(null)); // 'null'
```

---

## Utility Functions

### `setTimeout(callback, delay)`

Executes a function after a specified delay (in milliseconds).

**Syntax:** `setTimeout(function, milliseconds)`

**Example:**

```javascript
setTimeout(() => {
    console.log('Executed after 2 seconds');
}, 2000);

// Store timeout ID to clear it
const timeoutId = setTimeout(() => {
    console.log('This might not execute');
}, 5000);
clearTimeout(timeoutId); // Cancel the timeout
```

---

### `setInterval(callback, delay)`

Repeatedly executes a function at specified intervals.

**Syntax:** `setInterval(function, milliseconds)`

**Example:**

```javascript
const intervalId = setInterval(() => {
    console.log('Executed every 1 second');
}, 1000);

// Stop the interval
setTimeout(() => {
    clearInterval(intervalId);
}, 10000); // Stop after 10 seconds
```

---

### `console.log(message)`

Outputs a message to the browser console.

**Syntax:** `console.log(value1, value2, ...)`

**Example:**

```javascript
console.log('Hello World');
console.log('User:', user, 'Age:', age);
console.log('Students array:', students);
console.error('An error occurred:', error);
console.warn('Warning message');
```

---

### `alert(message)`

Displays an alert dialog with a message.

**Syntax:** `alert(message)`

**Example:**

```javascript
alert('Welcome to our website!');
alert('Please fill in all fields');
```

---

### `confirm(message)`

Displays a confirmation dialog with OK and Cancel buttons.

**Syntax:** `confirm(message)`

**Example:**

```javascript
const result = confirm('Are you sure you want to delete this item?');
if (result) {
    // User clicked OK
    deleteItem();
} else {
    // User clicked Cancel
    console.log('Deletion cancelled');
}
```

---

### `prompt(message, defaultValue)`

Displays a dialog that prompts the user for input.

**Syntax:** `prompt(message, defaultValue)`

**Example:**

```javascript
const name = prompt('What is your name?', 'Guest');
if (name !== null) {
    console.log('Hello, ' + name);
}

const newTitle = prompt('Enter new title:', heading.textContent);
```

---

## Window and Scroll Methods

### `window.scrollTo(x, y)`

Scrolls to a particular set of coordinates.

**Syntax:** `window.scrollTo(x, y)` or `window.scrollTo({ top: y, behavior: 'smooth' })`

**Example:**

```javascript
// Scroll to top
window.scrollTo(0, 0);

// Smooth scroll
window.scrollTo({
    top: 500,
    behavior: 'smooth'
});
```

---

### `element.scrollIntoView(options)`

Scrolls the element into view.

**Syntax:** `element.scrollIntoView({ behavior: 'smooth', block: 'start' })`

**Example:**

```javascript
const section = document.getElementById('contact');
section.scrollIntoView({ behavior: 'smooth' });

// Scroll to form
document.querySelector('.form-section').scrollIntoView({ behavior: 'smooth' });
```

---

### `element.getBoundingClientRect()`

Returns the size and position of an element relative to the viewport.

**Syntax:** `element.getBoundingClientRect()`

**Example:**

```javascript
const box = element.getBoundingClientRect();
console.log(box.top, box.left, box.width, box.height);

const rect = mouseBox.getBoundingClientRect();
const x = Math.round(e.clientX - rect.left);
const y = Math.round(e.clientY - rect.top);
```

---

## Template Literals and String Interpolation

### Template Literals (Backticks)

Allows embedded expressions and multi-line strings.

**Syntax:** `` `string text ${expression}` ``

**Example:**

```javascript
const name = 'John';
const age = 30;
console.log(`Hello, ${name}! You are ${age} years old.`);

// Multi-line strings
const html = `
    <div class="card">
        <h3>${title}</h3>
        <p>${content}</p>
    </div>
`;

// Complex expressions
outputDiv.innerHTML = `Result: ${num1} + ${num2} = ${num1 + num2}`;
```

---

## Summary

This reference guide covers the essential JavaScript functions used throughout the exercise solutions. Functions are organized by category for easy lookup:

- **DOM Selection**: Finding elements in the page
- **DOM Manipulation**: Creating, modifying, and removing elements
- **Event Handling**: Responding to user interactions
- **Array Methods**: Working with collections of data
- **String Methods**: Text manipulation and processing
- **Math Functions**: Numerical operations and calculations
- **Object Methods**: Working with objects and JSON
- **Date/Time**: Handling dates and timestamps
- **Storage API**: Persisting data with localStorage
- **Type Checking**: Validating data types
- **Conversion**: Converting between data types
- **Utilities**: Console logging, dialogs, timers

Each function includes:

- ✅ Clear syntax definition
- ✅ Practical examples from real exercises
- ✅ Common use cases and patterns

---

**📚 Keep this guide handy as a reference while practicing JavaScript!**
