import { useState } from 'react';

function RegistrationForm({ event, onRegister }) {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!formData.email.includes('@')) {
      newErrors.email = 'Please enter a valid email';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validate()) {
      onRegister({
        eventId: event.id,
        name: formData.name,
        email: formData.email,
        registeredAt: new Date().toISOString()
      });
      
      // Reset form
      setFormData({ name: '', email: '' });
      setErrors({});
    }
  };

  const availableSeats = event.capacity - event.registered;

  return (
    <div className="card">
      <h3 className="card-title">📝 Register for {event.title}</h3>
      
      {availableSeats > 0 ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Full Name *</label>
            <input
              type="text"
              className={`form-input ${errors.name ? 'error' : ''}`}
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            />
            {errors.name && <span className="form-error">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label className="form-label">Email *</label>
            <input
              type="email"
              className={`form-input ${errors.email ? 'error' : ''}`}
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            />
            {errors.email && <span className="form-error">{errors.email}</span>}
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
