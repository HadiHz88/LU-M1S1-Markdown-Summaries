import React, { useState } from 'react';

// TODO: Complete this component
// 1. Accept props: { onSubmit } (function)
// 2. Use useState to manage form state as an object:
//    { name: '', price: '', description: '', category: '' }
// 3. Create handleChange function that updates form state using spread operator
// 4. Create handleSubmit function that:
//    - Calls e.preventDefault()
//    - Calls onSubmit with formData
//    - Resets form state
// 5. Make all inputs controlled (use value and onChange)
// 6. Add a select dropdown for category with options: 'Electronics', 'Audio', 'Books', 'Other'

function AddProductForm() {
  // TODO: Add useState for form data

  // TODO: Create handleChange function

  // TODO: Create handleSubmit function

  return (
    <form className="add-product-form" onSubmit={handleSubmit}>
      {/* TODO: Add input fields for name, price, description */}
      {/* TODO: Add select dropdown for category */}
      {/* TODO: Add submit button */}
    </form>
  );
}

export default AddProductForm;

