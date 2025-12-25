# React Lab 02 - Product Catalog Application

## 🎯 Project Overview

An interactive product catalog application built with React that demonstrates:
- **Props** (Chapter 05): Component communication via props and prop destructuring
- **Events** (Chapter 06): User interactions through event handlers
- **useState Hook** (Chapter 07): State management for dynamic UI updates

## 🚀 Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   - Navigate to `http://localhost:5173` (or the URL shown in terminal)

## 📦 Components Description

### 1. **ProductCard** (`src/components/ProductCard.jsx`)
**Purpose:** Displays individual product information with action buttons

**Props Used:**
- `id` (number): Unique product identifier
- `name` (string): Product name
- `price` (number): Product price
- `description` (string): Product description
- `image` (string): Product emoji/icon
- `onAddToCart` (function): Callback function when "Add to Cart" is clicked
- `discount` (number, optional): Discount percentage for stretch goal

**Key Features:**
- **Prop Destructuring**: Uses destructuring in function parameters
- **Function Props**: Accepts and calls `onAddToCart` callback
- **Price Formatting**: Formats prices as currency ($X.XX)
- **Conditional Rendering**: Shows discount pricing when available
- **Event Handling**: Click handler for "Add to Cart" button

**Event Handlers:**
- `onClick`: Triggers `onAddToCart(id)` when button is clicked

---

### 2. **CartSummary** (`src/components/CartSummary.jsx`)
**Purpose:** Displays shopping cart summary and checkout functionality

**Props Used:**
- `count` (number): Total number of items in cart
- `total` (number): Total price of all cart items
- `onCheckout` (function): Callback function for checkout action

**Key Features:**
- **Price Formatting**: Displays total as currency
- **Conditional Button State**: Disables checkout button when cart is empty
- **Dynamic Button Text**: Changes text based on cart state

**Event Handlers:**
- `onClick`: Triggers checkout process when button is clicked

---

### 3. **SearchBar** (`src/components/SearchBar.jsx`)
**Purpose:** Provides search functionality for filtering products

**Props Used:**
- `value` (string): Current search query (controlled input)
- `onChange` (function): Handler for input changes
- `placeholder` (string): Placeholder text for input

**Key Features:**
- **Controlled Component**: Value managed by parent component
- **Multiple Event Handlers**: Implements both `onChange` and `onFocus`
- **Console Logging**: Logs when search input receives focus

**Event Handlers:**
- `onChange`: Updates search query as user types
- `onFocus`: Logs "Search focused" to console

---

### 4. **AddProductForm** (`src/components/AddProductForm.jsx`)
**Purpose:** Form for adding new products to the catalog

**Props Used:**
- `onSubmit` (function): Callback function when form is submitted

**Key Features:**
- **Form State Management**: Uses `useState` with object containing multiple fields
- **Controlled Inputs**: All form fields are controlled components
- **Spread Operator**: Updates form state immutably using spread syntax
- **Form Validation**: Validates required fields and data types (stretch goal)
- **Error Handling**: Displays error messages for invalid inputs
- **Form Reset**: Clears form after successful submission
- **Dynamic Emoji Assignment**: Assigns category-appropriate emoji to products

**Event Handlers:**
- `onChange`: Updates form state for each input field
- `onSubmit`: Validates and submits form data (with `preventDefault()`)

**Form Fields:**
- Name (text input)
- Price (number input)
- Description (textarea)
- Category (select dropdown)

---

## 🔄 State Variables & Their Purposes

### In `App.jsx`:

1. **`products`** (array of objects)
   - **Initial Value**: `INITIAL_PRODUCTS` array
   - **Purpose**: Stores all available products
   - **Updated By**: `handleAddProduct` function when new products are added

2. **`cartItems`** (array of objects)
   - **Initial Value**: `[]` (empty array)
   - **Purpose**: Stores products that have been added to cart
   - **Updated By**: 
     - `handleAddToCart`: Adds products using functional update
     - `handleCheckout`: Resets to empty array

3. **`cartCount`** (number)
   - **Initial Value**: `0`
   - **Purpose**: Tracks total number of items in cart
   - **Updated By**:
     - `handleAddToCart`: Increments using functional update
     - `handleCheckout`: Resets to 0
     - `handleKeyDown`: Resets to 0 when Escape is pressed

4. **`showCart`** (boolean)
   - **Initial Value**: `false`
   - **Purpose**: Controls visibility of CartSummary component
   - **Updated By**: `handleToggleCart` function toggles between true/false

5. **`searchQuery`** (string)
   - **Initial Value**: `""` (empty string)
   - **Purpose**: Stores current search term for filtering products
   - **Updated By**: `handleSearchChange` function as user types

6. **`selectedCategory`** (string) - *Stretch Goal*
   - **Initial Value**: `"All"`
   - **Purpose**: Filters products by category
   - **Updated By**: `handleCategoryChange` function

### In `AddProductForm.jsx`:

1. **`formData`** (object)
   - **Initial Value**: `{ name: '', price: '', description: '', category: '' }`
   - **Purpose**: Manages all form field values as a single state object
   - **Updated By**: 
     - `handleChange`: Updates specific field using spread operator
     - `handleSubmit`: Resets to initial state after submission

2. **`errors`** (object) - *Stretch Goal*
   - **Initial Value**: `{}`
   - **Purpose**: Stores validation error messages for each field
   - **Updated By**: 
     - `validateForm`: Sets errors for invalid fields
     - `handleChange`: Clears errors as user corrects input

---

## 🎯 Key Concepts Demonstrated

### Chapter 05: Props
- ✅ Prop destructuring in component parameters
- ✅ Passing data from parent to child components
- ✅ Function props (callbacks)
- ✅ Optional props (discount in ProductCard)
- ✅ Default prop values (placeholder in SearchBar)

### Chapter 06: Events
- ✅ `onClick` event handlers for buttons
- ✅ `onChange` event handlers for inputs
- ✅ `onFocus` event handlers for focus tracking
- ✅ `onSubmit` event handlers for forms
- ✅ `onKeyDown` event handlers for keyboard shortcuts
- ✅ `preventDefault()` to prevent default form submission
- ✅ Event object usage (e.target, e.key, etc.)

### Chapter 07: useState Hook
- ✅ Multiple state variables in single component
- ✅ State as primitives (numbers, strings, booleans)
- ✅ State as complex objects (arrays, objects)
- ✅ Functional updates (`setState(prev => ...)`)
- ✅ Controlled components (form inputs)
- ✅ Conditional rendering based on state
- ✅ State management for forms as objects
- ✅ Derived state (filtered products, cart total)

---

## ✨ Stretch Goals Completed

### Part 1: ProductCard Enhancements
- ✅ **Optional Discount Prop**: Displays original price with strikethrough and discounted price in green
  - Laptop has 10% discount
  - Headphones have 15% discount

### Part 2: Keyboard Support
- ✅ **Escape Key Handler**: Press Escape to clear cart (with confirmation dialog)
- ✅ Attached to main layout with `onKeyDown` event

### Part 3: Category Filtering
- ✅ **Category State**: `selectedCategory` state variable
- ✅ **Category Buttons**: Dynamic buttons for each category (All, Electronics, Audio, Books)
- ✅ **Functional Updates**: Uses `setState(prev => ...)` for toggling
- ✅ **Visual Feedback**: Active category button highlighted in blue

### Part 4: Form Validation
- ✅ **Required Field Validation**: Name, price, and category are required
- ✅ **Price Validation**: Must be a valid number greater than 0
- ✅ **Error Messages**: Red error text displays below invalid fields
- ✅ **Real-time Error Clearing**: Errors clear as user corrects input
- ✅ **Prevents Invalid Submission**: Form won't submit until all validations pass

---

## 🛠️ Additional Features

### User Experience Enhancements
- **Empty State Handling**: Shows message when no products match filters
- **Disabled States**: Checkout button disabled when cart is empty
- **Loading Feedback**: Console logs for debugging and tracking
- **Confirmation Dialogs**: Asks user before clearing cart
- **Success Messages**: Alerts after successful product addition or checkout
- **Product Counter**: Shows number of filtered products

### UI Polish
- **Responsive Design**: Grid layout adapts to screen size
- **Hover Effects**: Interactive feedback on buttons and cards
- **Visual Hierarchy**: Clear section separation with cards
- **Icon Usage**: Emojis for visual appeal and category identification
- **Dynamic Styling**: Category buttons change color when active
- **Keyboard Shortcut Hint**: Footer shows Escape key instruction

---

## 📁 Project Structure

```
lab2-solution/
├── src/
│   ├── components/
│   │   ├── ProductCard.jsx       # Product display component
│   │   ├── CartSummary.jsx       # Shopping cart display
│   │   ├── SearchBar.jsx         # Search input component
│   │   └── AddProductForm.jsx    # New product form
│   ├── styles/
│   │   └── lab-theme.css         # Predefined styling
│   ├── App.jsx                   # Main application component
│   └── main.jsx                  # Application entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🧪 Testing Checklist

- [x] Products display correctly in grid layout
- [x] Search filters products by name and description (case-insensitive)
- [x] Category filter buttons work correctly
- [x] Add to Cart button adds items and updates counter
- [x] Cart summary shows correct count and total price
- [x] Cart toggles visibility when button is clicked
- [x] Checkout displays summary and clears cart
- [x] Checkout button disabled when cart is empty
- [x] Add Product Form validates all required fields
- [x] Add Product Form shows appropriate error messages
- [x] New products appear in catalog immediately
- [x] Discount prices display correctly with strikethrough
- [x] Search input logs "Search focused" to console
- [x] Escape key clears cart (with confirmation)
- [x] All event handlers work without errors
- [x] Application runs without console errors

---

## 🎓 Learning Outcomes

Through this lab, I learned:

1. **Props Management**: How to effectively pass data and functions between components
2. **Event Handling**: Implementing various event handlers for user interactions
3. **State Management**: Managing complex state with multiple useState hooks
4. **Functional Updates**: Using previous state to calculate new state safely
5. **Controlled Components**: Synchronizing form inputs with React state
6. **Form Validation**: Implementing client-side validation with error handling
7. **Conditional Rendering**: Showing/hiding components based on state
8. **Array Operations**: Filtering, mapping, and reducing arrays for derived state
9. **Component Composition**: Building a complete app from smaller, reusable components

---

## 📝 Notes

- All styling uses the provided `lab-theme.css`
- No external state management libraries used (only useState)
- No useEffect or other advanced hooks used (per lab requirements)
- All components are functional components
- Event handlers use arrow functions to maintain `this` context
- Functional updates used when new state depends on previous state

---

## 🚀 Future Enhancements

Potential improvements for future iterations:
- Persist cart to localStorage
- Add product quantity controls
- Implement product ratings and reviews
- Add product images (not just emojis)
- Create detailed product view modal
- Implement sorting options (price, name, etc.)
- Add shopping cart item removal
- Create order history feature
