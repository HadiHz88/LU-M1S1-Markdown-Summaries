import React, { useState } from 'react';
import ProductCard from './components/ProductCard';
import CartSummary from './components/CartSummary';
import SearchBar from './components/SearchBar';
import AddProductForm from './components/AddProductForm';

// Sample products data
const INITIAL_PRODUCTS = [
  {
    id: 1,
    name: 'Laptop',
    price: 999.99,
    description: 'High-performance laptop for work and gaming',
    category: 'Electronics',
    image: '💻',
    discount: 10 // Stretch: 10% discount
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
    image: '🎧',
    discount: 15 // Stretch: 15% discount
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
  // Part 2 & 3: Multiple state variables using useState
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Stretch: Category filter state
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Part 2: Event Handler - Add to Cart
  const handleAddToCart = (productId) => {
    // Find the product from products array
    const product = products.find(p => p.id === productId);
    
    if (product) {
      // Add to cart using functional update
      setCartItems(prev => [...prev, product]);
      
      // Update cart count using functional update
      setCartCount(prev => prev + 1);
      
      console.log(`Added product ${productId} to cart:`, product.name);
    }
  };

  // Part 2: Event Handler - Checkout
  const handleCheckout = (e) => {
    // Calculate total
    const total = cartItems.reduce((sum, item) => {
      const price = item.discount ? item.price - (item.price * item.discount / 100) : item.price;
      return sum + price;
    }, 0);
    
    // Show alert with cart information
    alert(`Checkout Summary:\nTotal Items: ${cartCount}\nTotal Price: $${total.toFixed(2)}\n\nThank you for your purchase!`);
    
    // Reset cart using functional updates
    setCartItems([]);
    setCartCount(0);
  };

  // Part 3: Event Handler - Search
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Part 3: Event Handler - Toggle Cart Visibility
  const handleToggleCart = () => {
    setShowCart(prev => !prev);
  };

  // Part 3: Filter products based on search query and category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Calculate cart total
  const cartTotal = cartItems.reduce((sum, item) => {
    const price = item.discount ? item.price - (item.price * item.discount / 100) : item.price;
    return sum + price;
  }, 0);

  // Part 4: Event Handler - Add New Product
  const handleAddProduct = (productData) => {
    // Add new product to products array using functional update
    setProducts(prev => [...prev, productData]);
    
    // Show success message
    alert(`Product "${productData.name}" added successfully!`);
  };

  // Stretch: Handle category filter
  const handleCategoryChange = (category) => {
    setSelectedCategory(prev => prev === category ? 'All' : category);
  };

  // Stretch: Keyboard event handler for Escape key
  const handleKeyDown = (e) => {
    if (e.key === 'Escape' && cartCount > 0) {
      if (window.confirm('Clear cart? This will remove all items.')) {
        setCartItems([]);
        setCartCount(0);
      }
    }
  };

  // Get unique categories from products
  const categories = ['All', ...new Set(products.map(p => p.category))];

  return (
    <main className="layout" onKeyDown={handleKeyDown} tabIndex="0">
      <header className="banner card">
        <div>
          <h1 className="heading-large">🛍️ Product Catalog</h1>
          <p className="meta">React Lab 02 - Props, Events & State</p>
        </div>
        
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          {/* Part 3: SearchBar component with controlled input */}
          <SearchBar 
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search products..."
          />
          
          {/* Part 3: Toggle button for cart visibility */}
          <button 
            className="toggle-button"
            onClick={handleToggleCart}
          >
            {showCart ? '🛒 Hide Cart' : `🛒 View Cart (${cartCount})`}
          </button>
        </div>
      </header>

      {/* Part 3: Conditionally render CartSummary when showCart is true */}
      {showCart && (
        <CartSummary 
          count={cartCount}
          total={cartTotal}
          onCheckout={handleCheckout}
        />
      )}

      {/* Stretch: Category filter buttons */}
      <section className="card">
        <h3 className="heading-small">Filter by Category:</h3>
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem', flexWrap: 'wrap' }}>
          {categories.map(category => (
            <button
              key={category}
              className="button"
              style={{
                backgroundColor: selectedCategory === category ? 'var(--accent)' : '#e5e7eb',
                color: selectedCategory === category ? 'white' : 'var(--text)',
                padding: '0.5rem 1rem',
                fontSize: '0.875rem'
              }}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="products-section card">
        <h2 className="heading-medium">Products ({filteredProducts.length})</h2>
        
        {filteredProducts.length === 0 ? (
          <p style={{ color: 'var(--muted)', textAlign: 'center', padding: '2rem' }}>
            No products found. Try adjusting your search or filters.
          </p>
        ) : (
          <div className="products-grid">
            {/* Part 1: Map over filtered products and render ProductCard */}
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                description={product.description}
                image={product.image}
                discount={product.discount}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        )}
      </section>

      <section className="add-product-section card">
        <h2 className="heading-medium">Add New Product</h2>
        {/* Part 4: AddProductForm component with onSubmit handler */}
        <AddProductForm onSubmit={handleAddProduct} />
      </section>

      <footer className="card" style={{ textAlign: 'center', color: 'var(--muted)' }}>
        <p>Press <kbd style={{ padding: '0.25rem 0.5rem', background: '#e5e7eb', borderRadius: '0.25rem' }}>Escape</kbd> to clear cart</p>
      </footer>
    </main>
  );
}

export default App;

