import React from 'react';

// Sample products data - you can modify this or move it to a separate file
const INITIAL_PRODUCTS = [
  {
    id: 1,
    name: 'Laptop',
    price: 999.99,
    description: 'High-performance laptop for work and gaming',
    category: 'Electronics',
    image: '💻'
  },
  {
    id: 2,
    name: 'Smartphone',
    price: 699.99,
    description: 'Latest model with advanced features',
    category: 'Electronics',
    image: '📱'
  },
  {
    id: 3,
    name: 'Headphones',
    price: 149.99,
    description: 'Noise-cancelling wireless headphones',
    category: 'Audio',
    image: '🎧'
  },
  {
    id: 4,
    name: 'Book',
    price: 19.99,
    description: 'Best-selling novel',
    category: 'Books',
    image: '📚'
  }
];

function App() {
  // TODO: Add state variables here using useState
  // - cartItems: array of items in cart
  // - cartCount: number of items in cart
  // - showCart: boolean to show/hide cart
  // - searchQuery: string for search filter

  // TODO: Create handleAddToCart function that accepts product ID
  // TODO: Create handleCheckout function
  // TODO: Create handleSearchChange function
  // TODO: Create handleToggleCart function

  // TODO: Filter products based on searchQuery

  return (
    <main className="layout">
      <header className="banner card">
        <h1 className="heading-large">🛍️ Product Catalog</h1>
        <p className="meta">React Lab 02 - Props, Events & State</p>
        {/* TODO: Add toggle button for cart visibility */}
        {/* TODO: Add SearchBar component */}
      </header>

      {/* TODO: Conditionally render CartSummary when showCart is true */}

      <section className="products-section card">
        <h2 className="heading-medium">Products</h2>
        <div className="products-grid">
          {/* TODO: Map over filtered products and render ProductCard for each */}
          {/* TODO: Pass all required props including onAddToCart handler */}
        </div>
      </section>

      <section className="add-product-section card">
        <h2 className="heading-medium">Add New Product</h2>
        {/* TODO: Add AddProductForm component */}
        {/* TODO: Pass onSubmit handler */}
      </section>
    </main>
  );
}

export default App;

