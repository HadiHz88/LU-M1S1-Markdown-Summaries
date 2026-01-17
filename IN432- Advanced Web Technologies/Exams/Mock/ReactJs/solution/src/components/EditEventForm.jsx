import { useState } from 'react';

function EditEventForm({ event, onSave, onCancel }) {
  // Initialize form data state
  const [formData, setFormData] = useState({
    title: event.title,
    speaker: event.speaker,
    type: event.type,
    capacity: event.capacity,
    laptopRequired: false,
    softwareRequirements: ''
  });

  // Initialize errors state
  const [errors, setErrors] = useState({});

  // Initialize touched fields state
  const [touched, setTouched] = useState({});

  // Validate function
  const validate = () => {
    const newErrors = {};

    // Title validation
    if (!formData.title) newErrors.title = 'Title is required';
    else if (formData.title.length < 5) newErrors.title = 'Title must be at least 5 characters';

    // Speaker validation
    if (!formData.speaker) newErrors.speaker = 'Speaker name is required';

    // Capacity validation
    if (!formData.capacity || formData.capacity < 1) {
      newErrors.capacity = 'Capacity must be a positive number';
    } else if (formData.capacity < event.registered) {
      newErrors.capacity = `Capacity cannot be less than current registrations (${event.registered})`;
    }

    // Software requirements validation (if laptop required)
    if (formData.type === 'workshop' && formData.laptopRequired && !formData.softwareRequirements) {
      newErrors.softwareRequirements = 'Please specify software requirements';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field, value) => {
    // Update formData
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Mark field as touched
    setTouched(prev => ({ ...prev, [field]: true }));

    // Reset type-specific fields when type changes
    if (field === 'type' && value === 'talk') {
      setFormData(prev => ({
        ...prev,
        laptopRequired: false,
        softwareRequirements: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mark all fields as touched
    setTouched({
      title: true,
      speaker: true,
      capacity: true,
      softwareRequirements: true
    });

    // Validate and save
    if (validate()) {
      onSave({ ...event, ...formData });
    }
  };

  const handleCancelClick = () => {
    // Confirm before closing if form has changes
    const hasChanges = 
      formData.title !== event.title ||
      formData.speaker !== event.speaker ||
      formData.type !== event.type ||
      formData.capacity !== event.capacity;
    
    if (hasChanges) {
      if (window.confirm('You have unsaved changes. Are you sure you want to cancel?')) {
        onCancel();
      }
    } else {
      onCancel();
    }
  };

  // Check if form has any errors
  const hasErrors = Object.keys(errors).length > 0;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2 className="modal-title">✏️ Edit Event</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="modal-body">
            {/* Title */}
            <div className="form-group">
              <label className="form-label">Event Title *</label>
              <input
                type="text"
                className={`form-input ${touched.title && errors.title ? 'error' : ''}`}
                value={formData.title}
                onChange={(e) => handleChange('title', e.target.value)}
                onBlur={() => setTouched(prev => ({ ...prev, title: true }))}
              />
              {/* Show error if touched and has error */}
              {touched.title && errors.title && (
                <span className="form-error">{errors.title}</span>
              )}
            </div>

            {/* Speaker */}
            <div className="form-group">
              <label className="form-label">Speaker *</label>
              <input
                type="text"
                className={`form-input ${touched.speaker && errors.speaker ? 'error' : ''}`}
                value={formData.speaker}
                onChange={(e) => handleChange('speaker', e.target.value)}
                onBlur={() => setTouched(prev => ({ ...prev, speaker: true }))}
              />
              {touched.speaker && errors.speaker && (
                <span className="form-error">{errors.speaker}</span>
              )}
            </div>

            {/* Type */}
            <div className="form-group">
              <label className="form-label">Event Type *</label>
              <select
                className="form-select"
                value={formData.type}
                onChange={(e) => handleChange('type', e.target.value)}
              >
                <option value="workshop">Workshop</option>
                <option value="talk">Talk</option>
              </select>
            </div>

            {/* Capacity */}
            <div className="form-group">
              <label className="form-label">Capacity *</label>
              <input
                type="number"
                className={`form-input ${touched.capacity && errors.capacity ? 'error' : ''}`}
                value={formData.capacity}
                onChange={(e) => handleChange('capacity', parseInt(e.target.value) || 0)}
                onBlur={() => setTouched(prev => ({ ...prev, capacity: true }))}
                min="1"
              />
              <small style={{ color: '#6b7280', fontSize: '0.75rem' }}>
                Current registrations: {event.registered}
              </small>
              {touched.capacity && errors.capacity && (
                <span className="form-error">{errors.capacity}</span>
              )}
            </div>

            {/* Conditional fields for Workshop */}
            {formData.type === 'workshop' && (
              <>
                <div className="form-group">
                  <label className="form-checkbox">
                    <input
                      type="checkbox"
                      checked={formData.laptopRequired}
                      onChange={(e) => handleChange('laptopRequired', e.target.checked)}
                    />
                    Laptop Required
                  </label>
                </div>

                {formData.laptopRequired && (
                  <div className="form-group">
                    <label className="form-label">Software Requirements *</label>
                    <input
                      type="text"
                      className={`form-input ${touched.softwareRequirements && errors.softwareRequirements ? 'error' : ''}`}
                      value={formData.softwareRequirements}
                      onChange={(e) => handleChange('softwareRequirements', e.target.value)}
                      onBlur={() => setTouched(prev => ({ ...prev, softwareRequirements: true }))}
                      placeholder="e.g., Node.js, VS Code"
                    />
                    {touched.softwareRequirements && errors.softwareRequirements && (
                      <span className="form-error">{errors.softwareRequirements}</span>
                    )}
                  </div>
                )}
              </>
            )}
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
              disabled={hasErrors}
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
