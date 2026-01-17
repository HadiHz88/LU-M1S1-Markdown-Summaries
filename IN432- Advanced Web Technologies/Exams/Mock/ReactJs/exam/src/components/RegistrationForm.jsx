// Bonus: RegistrationForm Component (Optional - Extra Credit)
// Simple registration form for events

import { useState } from 'react';

function RegistrationForm({ event, onRegister }) {
  // TODO BONUS: Initialize form state
  // Fields: name, email

  // TODO BONUS: Initialize errors state

  // TODO BONUS: Implement validate function
  const validate = () => {
    // Validate name: required
    // Validate email: required and contains '@'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // TODO BONUS: Validate
    // TODO BONUS: If valid, call onRegister with form data
    // TODO BONUS: Reset form
  };

  // TODO BONUS: Calculate available seats
  const availableSeats = 0; // Replace with calculation

  return (
    <div className="card">
      <h3 className="card-title">📝 Register for {event.title}</h3>
      
      {availableSeats > 0 ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Full Name *</label>
            <input
              type="text"
              className="form-input"
              /* TODO: Add value, onChange, error class */
            />
            {/* TODO: Show error message */}
          </div>

          <div className="form-group">
            <label className="form-label">Email *</label>
            <input
              type="email"
              className="form-input"
              /* TODO: Add value, onChange, error class */
            />
            {/* TODO: Show error message */}
          </div>

          <button type="submit" className="btn btn-primary">
            Register ({availableSeats} seats left)
          </button>
        </form>
      ) : (
        <div className="alert alert-warning">
          This event is fully booked
        </div>
      )}
    </div>
  );
}

export default RegistrationForm;
