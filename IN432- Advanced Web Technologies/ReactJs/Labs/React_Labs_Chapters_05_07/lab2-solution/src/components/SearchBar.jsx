import React from 'react';

// Part 3: useState Hook - Controlled Input Component
// This component demonstrates a controlled input with event handlers

function SearchBar({ value, onChange, placeholder }) {
  // onFocus event handler
  const handleFocus = () => {
    console.log('Search focused');
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        placeholder={placeholder || 'Search products...'}
      />
    </div>
  );
}

export default SearchBar;

