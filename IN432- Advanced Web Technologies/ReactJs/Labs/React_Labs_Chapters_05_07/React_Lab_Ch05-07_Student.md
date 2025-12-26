## React Lab 02 – Chapters 05–07 (Student Guide)

**Goal**  
Build an interactive product catalog application using Props (Chapter 05), Events (Chapter 06), and useState Hook (Chapter 07). Students will create components that pass data via props, handle user interactions through events, and manage state with useState.

**Template Requirement**  

1. Locate the provided `lab2-template` React + Vite project.  
2. Duplicate the folder and rename it using the pattern `react-lab02-<yourname>`.  
3. Install dependencies with `npm install` from inside the duplicated folder.  
4. Do not rename or delete starter files. All new components should live under `src/components`.  

**Predefined Styling**  

1. Keep the stylesheet `src/styles/lab-theme.css` exactly as provided.  
2. When you need new styles, add class names to your JSX and extend the CSS in a separate file (e.g., `src/styles/extensions.css`) that you import into `App.jsx`.  
3. Use the existing utility classes (cards, buttons, forms) to keep a consistent look.  

---

### Part 1 – Props with Destructuring & Function Props (Chapter 05)

1. Create a file `src/components/ProductCard.jsx`.  
2. Export a function component that accepts props using **destructuring**: `{ id, name, price, description, image, onAddToCart }`.  
3. The component should return a `<div className="product-card">` containing:  
   - Product image (use `image` prop or a placeholder if not provided)  
   - Product name (from `name` prop)  
   - Product description (from `description` prop)  
   - Product price formatted as currency (from `price` prop)  
   - A button with text "Add to Cart" that calls `onAddToCart(id)` when clicked  
4. Import and test `ProductCard` inside `src/App.jsx`, passing all required props. For now, create a simple `handleAddToCart` function that logs the product ID to the console.  
5. Verify that clicking the button triggers the function with the correct product ID.  
6. *Stretch:* Add an optional `discount` prop (number). If provided, display the original price with a strikethrough and show the discounted price in a different color.  

### Part 2 – Event Handlers (Chapter 06)

1. In `src/App.jsx`, import `useState` from React.  
2. Create state variables using `useState`:  
   - `cartItems` (initial value: empty array `[]`)  
   - `cartCount` (initial value: `0`)  
3. Update the `handleAddToCart` function to:  
   - Accept a product ID as parameter  
   - Find the product from your products array  
   - Add it to `cartItems` using the setter function  
   - Update `cartCount` by incrementing it  
4. Create a new component `src/components/CartSummary.jsx` that accepts props: `count`, `total`, and `onCheckout` (function).  
5. Display the cart count and total price in `CartSummary`. Add a "Checkout" button that calls `onCheckout` when clicked.  
6. In `App.jsx`, create a `handleCheckout` function that uses `event.preventDefault()` (if using a form) and alerts a message showing the total items and total price. Then reset the cart (set `cartItems` to `[]` and `cartCount` to `0`).  
7. *Stretch:* Add keyboard support—when the user presses 'Escape' key, clear the cart. Use `onKeyDown` event on a wrapper element.  

### Part 3 – useState Hook with Multiple States (Chapter 07)

1. Add more state variables to `App.jsx`:  
   - `showCart` (boolean, default `false`) to toggle cart visibility  
   - `searchQuery` (string, default `""`) for filtering products  
2. Create a component `src/components/SearchBar.jsx` that accepts props: `value`, `onChange`, and `placeholder`.  
   - It should render an `<input>` with `type="text"`  
   - Use the `value` and `onChange` props to make it a controlled input  
   - Add an `onFocus` event handler that logs "Search focused"  
3. In `App.jsx`, filter the products array based on `searchQuery`. Display only products whose name or description includes the search query (case-insensitive).  
4. Add a toggle button (or icon) in the header that shows/hides the cart. Use the `showCart` state and update it with `onClick`.  
5. Conditionally render `CartSummary` only when `showCart` is `true`.  
6. *Stretch:* Add state for `selectedCategory` (string). Create category buttons that filter products by category. Use functional updates (`setSelectedCategory(prev => ...)`) when toggling categories.  

### Part 4 – Form State Management (Chapter 07)

1. Create a component `src/components/AddProductForm.jsx` that accepts props: `onSubmit` (function).  
2. Inside the form component, use `useState` to manage form state as an object:  

   ```javascript
   const [formData, setFormData] = useState({
     name: '',
     price: '',
     description: '',
     category: ''
   })
   ```  

3. Create a `handleChange` function that updates the form state using the spread operator:  

   ```javascript
   const handleChange = (e) => {
     const { name, value } = e.target
     setFormData(prev => ({ ...prev, [name]: value }))
   }
   ```  

4. The form should include input fields for `name`, `price`, `description`, and a `select` dropdown for `category`. All inputs should be controlled (use `value` and `onChange`).  
5. Add a submit button. In the form's `onSubmit` event handler, call `e.preventDefault()` to prevent default form submission.  
6. Call the `onSubmit` prop function with the form data, then reset the form by setting `formData` back to its initial state.  
7. In `App.jsx`, create a `handleAddProduct` function that adds the new product to your products array (update the products state).  
8. *Stretch:* Add form validation—show an error message if the name is empty or price is not a valid number. Use additional state for error messages.  

---

### Deliverables

1. A working React project built on the template with all components compiled successfully.  
2. `README.md` at the project root containing:  
   - Setup steps you followed.  
   - Brief description of each component and what props/events it uses.  
   - Explanation of all state variables and their purposes.  
   - Any stretch goals you completed.  
3. Optional reflection file `REFLECTION.md` describing one challenge per part and how you solved it.  

### Submission Checklist

- [ ] Template duplicated and dependencies installed.  
- [ ] All components placed under `src/components`.  
- [ ] `ProductCard` uses prop destructuring and function props (Ch05).  
- [ ] Event handlers implemented for buttons and forms (Ch06).  
- [ ] Multiple `useState` hooks used for cart, search, and form state (Ch07).  
- [ ] Form state managed as an object with controlled inputs (Ch07).  
- [ ] Styling uses the provided `lab-theme.css` plus optional extensions.  
- [ ] Application runs without errors: `npm run dev`.  
- [ ] README completed with all required information.  

**Important Reminders:**

- Stay within chapters 05–07 only—no useEffect, useContext, or other advanced hooks yet.  
- Use functional updates (`setState(prev => ...)`) when new state depends on previous state.  
- Always prevent default form submission with `e.preventDefault()`.  
- Keep event handlers simple and focused—complex logic can go in separate functions.  

Good luck, and remember to test each part thoroughly before moving to the next!
