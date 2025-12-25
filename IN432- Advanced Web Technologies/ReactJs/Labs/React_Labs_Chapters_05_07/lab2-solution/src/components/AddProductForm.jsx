import React, { useState } from 'react';

// Part 4: Form State Management
// This component demonstrates managing form state as an object with controlled inputs
// Stretch goal: Added form validation with error messages

function AddProductForm({ onSubmit }) {
  // Initial form state
  const initialFormState = {
    name: '',
    price: '',
    description: '',
    category: ''
  };

  // Form state using useState
  const [formData, setFormData] = useState(initialFormState);
  
  // Stretch: Error state for validation
  const [errors, setErrors] = useState({});

  // Handle input changes using spread operator
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Stretch: Validate form
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Product name is required';
    }
    
    if (!formData.price || isNaN(formData.price) || parseFloat(formData.price) <= 0) {
      newErrors.price = 'Please enter a valid price greater than 0';
    }
    
    if (!formData.category) {
      newErrors.category = 'Please select a category';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    
    // Validate form
    if (!validateForm()) {
      return;
    }
    
    // Convert price to number and add emoji based on category
    const productData = {
      ...formData,
      price: parseFloat(formData.price),
      id: Date.now(), // Generate unique ID
      image: getCategoryEmoji(formData.category)
    };
    
    // Call the onSubmit prop function with form data
    onSubmit(productData);
    
    // Reset form to initial state
    setFormData(initialFormState);
    setErrors({});
  };

  // Helper function to get emoji based on category
  const getCategoryEmoji = (category) => {
    const emojiMap = {
      'Electronics': '💻',
      'Audio': '🎧',
      'Books': '📚',
      'Other': '📦'
    };
    return emojiMap[category] || '📦';
  };

  return (
    <form className="add-product-form" onSubmit={handleSubmit}>
      {/* Product Name Input */}
      <div className="form-group">
        <label htmlFor="name" className="form-label">Product Name *</label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-input"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter product name"
        />
        {errors.name && <span style={{ color: 'var(--danger)', fontSize: '0.875rem' }}>{errors.name}</span>}
      </div>

      {/* Price Input */}
      <div className="form-group">
        <label htmlFor="price" className="form-label">Price *</label>
        <input
          type="number"
          id="price"
          name="price"
          className="form-input"
          value={formData.price}
          onChange={handleChange}
          placeholder="0.00"
          step="0.01"
          min="0"
        />
        {errors.price && <span style={{ color: 'var(--danger)', fontSize: '0.875rem' }}>{errors.price}</span>}
      </div>

      {/* Description Textarea */}
      <div className="form-group">
        <label htmlFor="description" className="form-label">Description</label>
        <textarea
          id="description"
          name="description"
          className="form-textarea"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter product description"
        />
      </div>

      {/* Category Select */}
      <div className="form-group">
        <label htmlFor="category" className="form-label">Category *</label>
        <select
          id="category"
          name="category"
          className="form-select"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="">Select a category</option>
          <option value="Electronics">Electronics</option>
          <option value="Audio">Audio</option>
          <option value="Books">Books</option>
          <option value="Other">Other</option>
        </select>
        {errors.category && <span style={{ color: 'var(--danger)', fontSize: '0.875rem' }}>{errors.category}</span>}
      </div>

      {/* Submit Button */}
      <button type="submit" className="button button-success">
        Add Product
      </button>
    </form>
  );
}

export default AddProductForm;

