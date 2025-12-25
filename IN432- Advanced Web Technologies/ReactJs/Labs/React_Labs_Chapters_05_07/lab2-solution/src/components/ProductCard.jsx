import React from 'react';

// Part 1: Props with Destructuring & Function Props
// This component accepts props using destructuring and includes a function prop (onAddToCart)
// Stretch goal: Added optional discount prop

function ProductCard({ id, name, price, description, image, onAddToCart, discount }) {
  // Calculate discounted price if discount is provided
  const discountedPrice = discount ? price - (price * discount / 100) : null;
  
  // Format price as currency
  const formatPrice = (amount) => `$${amount.toFixed(2)}`;

  return (
    <div className="product-card">
      {/* Display product image or placeholder */}
      <div className="product-image">
        {image || '📦'}
      </div>
      
      {/* Product name */}
      <h3 className="product-name">{name}</h3>
      
      {/* Product description */}
      <p className="product-description">{description}</p>
      
      {/* Product price with optional discount display */}
      <div className="product-price">
        {discount ? (
          <>
            <span className="price-original">{formatPrice(price)}</span>
            <span className="price-discount">{formatPrice(discountedPrice)}</span>
          </>
        ) : (
          formatPrice(price)
        )}
      </div>
      
      {/* Add to Cart button that calls the function prop */}
      <button 
        className="button button-primary"
        onClick={() => onAddToCart(id)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;

