// Q3: EditEventForm Component
// Modal form for editing event details with validation

import { useState } from 'react';

function EditEventForm({ event, onSave, onCancel }) {
  // TODO Q3: Initialize form data state
  // Hint: Copy all relevant fields from event prop
  // Include: title, speaker, type, capacity, laptopRequired, softwareRequirements

  // TODO Q3: Initialize errors state (empty object)

  // TODO Q3: Initialize touched fields state (empty object)

  // TODO Q3: Implement validate function
  const validate = () => {
    // Create newErrors object
    // Validate title: required, min 5 characters
    // Validate speaker: required
    // Validate capacity: positive number, not less than event.registered
    // Validate softwareRequirements: required if workshop AND laptopRequired
    // Return true if no errors, false otherwise
  };

  const handleChange = (field, value) => {
    // TODO Q3: Update formData for the given field
    // TODO Q3: Mark field as touched
    // TODO Q3: Special case - if changing type to 'talk', reset laptop fields
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // TODO Q3: Mark all fields as touched
    // TODO Q3: Run validation
    // TODO Q3: If valid, call onSave with merged event + formData
  };

  const handleCancelClick = () => {
    // TODO Q3: Check if form has changes
    // TODO Q3: If has changes, confirm with window.confirm()
    // TODO Q3: Call onCancel
  };

  // TODO Q3: Check if form has errors
  // const hasErrors = ...;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2 className="modal-title">✏️ Edit Event</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="modal-body">
            {/* Title Field */}
            <div className="form-group">
              <label className="form-label">Event Title *</label>
              <input
                type="text"
                className="form-input"
                /* TODO: Add error class if touched and has error */
                /* TODO: Add value from formData */
                /* TODO: Add onChange handler */
                /* TODO: Add onBlur to mark as touched */
              />
              {/* TODO Q3: Show error message if touched and has error */}
            </div>

            {/* Speaker Field */}
            <div className="form-group">
              <label className="form-label">Speaker *</label>
              <input
                type="text"
                className="form-input"
                /* TODO: Add error class, value, onChange, onBlur */
              />
              {/* TODO: Show error message */}
            </div>

            {/* Type Field */}
            <div className="form-group">
              <label className="form-label">Event Type *</label>
              <select
                className="form-select"
                /* TODO: Add value and onChange */
              >
                <option value="workshop">Workshop</option>
                <option value="talk">Talk</option>
              </select>
            </div>

            {/* Capacity Field */}
            <div className="form-group">
              <label className="form-label">Capacity *</label>
              <input
                type="number"
                className="form-input"
                /* TODO: Add error class, value, onChange, onBlur */
                min="1"
              />
              <small style={{ color: '#6b7280', fontSize: '0.75rem' }}>
                Current registrations: {event.registered}
              </small>
              {/* TODO: Show error message */}
            </div>

            {/* TODO Q3: Conditional fields for Workshop */}
            {/* Show only if formData.type === 'workshop' */}
            {/* Include:
                1. Checkbox for "Laptop Required"
                2. If laptop required, show Software Requirements input
            */}
            
            {/* Laptop Required Checkbox */}
            <div className="form-group">
              <label className="form-checkbox">
                <input
                  type="checkbox"
                  /* TODO: Add checked and onChange */
                />
                Laptop Required
              </label>
            </div>

            {/* Software Requirements (conditional) */}
            <div className="form-group">
              <label className="form-label">Software Requirements *</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g., Node.js, VS Code"
                /* TODO: Add value, onChange, onBlur */
              />
              {/* TODO: Show error message */}
            </div>
          </div>

          <div className="modal-footer">
            <button 
              type="button" 
              className="btn btn-secondary"
              onClick={handleCancelClick}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="btn btn-primary"
              /* TODO: Add disabled={hasErrors} */
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditEventForm;
