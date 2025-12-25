import React from 'react';

// Part 2: Event Handlers
// This component displays cart information and handles checkout events

function CartSummary({ count, total, onCheckout }) {
  // Format total price as currency
  const formatPrice = (amount) => `$${amount.toFixed(2)}`;

  return (
    <div className="cart-summary card">
      <h2 className="heading-medium">🛒 Shopping Cart</h2>
      
      <div className="cart-info">
        <div className="cart-count">
          <strong>Items:</strong> {count}
        </div>
        <div className="cart-total">
          <strong>Total:</strong> {formatPrice(total)}
        </div>
      </div>
      
      {/* Checkout button with event handler */}
      <button 
        className="button button-success"
        onClick={onCheckout}
        disabled={count === 0}
      >
        {count === 0 ? 'Cart is Empty' : 'Checkout'}
      </button>
    </div>
  );
}

export default CartSummary;

