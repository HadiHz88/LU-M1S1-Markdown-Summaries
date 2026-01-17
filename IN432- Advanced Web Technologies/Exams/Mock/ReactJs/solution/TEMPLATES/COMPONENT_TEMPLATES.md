# Component Templates for React Exam

**Instructions:** Copy the code blocks below and use them as starting points for your components. The HTML/JSX structure and CSS classes are already provided. Your job is to:
- Add state management with `useState`
- Implement event handlers
- Add conditional rendering logic
- Implement form validation
- Calculate derived state

---

## 📋 Table of Contents

1. [App.jsx - Main Component](#1-appjsx---main-component)
2. [EventCard Component](#2-eventcard-component)
3. [FilterPanel Component](#3-filterpanel-component)
4. [EditEventForm Component](#4-editeventform-component)
5. [StatsDashboard Component](#5-statsdashboard-component)
6. [Bonus: RegistrationForm Component](#6-bonus-registrationform-component)
7. [Sample Data](#7-sample-data)

---

## 1. App.jsx - Main Component

**File:** `src/App.jsx`

```jsx
/*
Student ID: [Your Student ID]
Full Name: [Your Full Name]
Date: [Exam Date]
*/

import { useState } from 'react';
import EventCard from './components/EventCard';
import FilterPanel from './components/FilterPanel';
import EditEventForm from './components/EditEventForm';
import StatsDashboard from './components/StatsDashboard';

// TODO: Import sample data (see Section 7)
const INITIAL_EVENTS = [
  // Add your event objects here
];

function App() {
  // TODO Q1: Initialize state
  // const [events, setEvents] = useState(INITIAL_EVENTS);
  // const [filters, setFilters] = useState({ ... });
  // const [selectedEventId, setSelectedEventId] = useState(null);

  // TODO Q1: Calculate filtered events (derived state - no useEffect!)
  // const filteredEvents = events.filter(event => {
  //   // Combine all filter conditions with &&
  //   // 1. Type filter
  //   // 2. Capacity filter (showFullEvents)
  //   // 3. Search filter (title and speaker)
  // });

  // TODO: Find selected event
  // const selectedEvent = events.find(e => e.id === selectedEventId);

  // TODO: Event handlers
  const handleFilterChange = (newFilters) => {
    // Update filters state
  };

  const handleSelectEvent = (eventId) => {
    // Update selectedEventId
  };

  const handleSaveEvent = (updatedEvent) => {
    // Update the event in the events array
    // Close the form (set selectedEventId to null)
  };

  const handleCancelEdit = () => {
    // Close the form
  };

  return (
    <div className="container">
      {/* Header */}
      <header className="exam-header">
        <h1>🎯 Event Management System</h1>
        <p>Technology Conference Admin Dashboard</p>
      </header>

      {/* TODO Q4: Add StatsDashboard component */}
      {/* <StatsDashboard events={filteredEvents} /> */}

      {/* TODO Q2: Add FilterPanel component */}
      {/* <FilterPanel 
        filters={filters}
        onFilterChange={handleFilterChange}
      /> */}

      {/* Event Cards Grid */}
      <div className="card">
        <h2 className="card-title">Events ({filteredEvents.length})</h2>
        
        {/* TODO Q1: Conditional rendering for empty state */}
        {filteredEvents.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon">📭</div>
            <h3 className="empty-state-title">No Events Found</h3>
            <p className="empty-state-text">
              Try adjusting your filters or search terms
            </p>
            {/* TODO: Add "Clear Filters" button */}
          </div>
        ) : (
          <div className="grid grid-2">
            {/* TODO Q1: Map through filteredEvents and render EventCard */}
            {/* {filteredEvents.map(event => (
              <EventCard
                key={event.id}
                event={event}
                isSelected={event.id === selectedEventId}
                onSelect={handleSelectEvent}
              />
            ))} */}
          </div>
        )}
      </div>

      {/* TODO Q3: Conditionally render EditEventForm when an event is selected */}
      {/* {selectedEvent && (
        <EditEventForm
          event={selectedEvent}
          onSave={handleSaveEvent}
          onCancel={handleCancelEdit}
        />
      )} */}
    </div>
  );
}

export default App;
```

---

## 2. EventCard Component

**File:** `src/components/EventCard.jsx`

```jsx
import { useState } from 'react';

function EventCard({ event, isSelected, onSelect }) {
  // TODO Q1: Calculate availability status
  // const availableSeats = event.capacity - event.registered;
  // const isSoldOut = availableSeats <= 0;
  // const isAlmostFull = availableSeats > 0 && availableSeats <= 5;

  // TODO Q1: Determine badge type and text
  // let statusBadge = 'available';
  // let statusText = 'Available';
  // if (isSoldOut) {
  //   statusBadge = 'sold-out';
  //   statusText = 'SOLD OUT';
  // } else if (isAlmostFull) {
  //   statusBadge = 'almost-full';
  //   statusText = 'Almost Full';
  // }

  return (
    <div 
      className={`event-card ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(event.id)}
    >
      {/* Header */}
      <div className="event-card-header">
        <div>
          <h3 className="event-card-title">{event.title}</h3>
          <p className="event-card-speaker">👤 {event.speaker}</p>
        </div>
      </div>

      {/* Badges */}
      <div className="event-card-info">
        {/* TODO Q1: Type badge (workshop/talk) */}
        {/* <span className={`badge badge-${event.type}`}>
          {event.type === 'workshop' ? '🛠️ Workshop' : '💬 Talk'}
        </span> */}

        {/* TODO Q1: Status badge (conditional) */}
        {/* <span className={`badge badge-${statusBadge}`}>
          {statusText}
        </span> */}
      </div>

      {/* Capacity Info */}
      <div className="capacity-info">
        {/* TODO Q1: Display capacity - "X / Y seats" */}
        {/* <span>{event.registered} / {event.capacity} seats</span> */}
      </div>

      {/* Requirements */}
      {event.requirements && event.requirements !== 'None' && (
        <p style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '0.5rem' }}>
          📌 {event.requirements}
        </p>
      )}

      {/* Footer */}
      <div className="event-card-footer">
        <button 
          className="btn btn-primary btn-sm"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(event.id);
          }}
        >
          Edit Event
        </button>
      </div>
    </div>
  );
}

export default EventCard;
```

---

## 3. FilterPanel Component

**File:** `src/components/FilterPanel.jsx`

```jsx
function FilterPanel({ filters, onFilterChange }) {
  // TODO Q2: Check if filters are active (different from default)
  // const hasActiveFilters = 
  //   filters.type !== 'all' || 
  //   !filters.showFullEvents || 
  //   filters.searchQuery !== '';

  // TODO Q2: Create filter summary text
  // let summaryParts = [];
  // if (filters.type !== 'all') summaryParts.push(`${filters.type}s`);
  // if (!filters.showFullEvents) summaryParts.push('with available seats');
  // if (filters.searchQuery) summaryParts.push(`matching "${filters.searchQuery}"`);
  // const summary = summaryParts.length > 0 
  //   ? `Showing ${summaryParts.join(' ')}` 
  //   : '';

  const handleSearchChange = (e) => {
    // TODO Q2: Update search query in filters
    // onFilterChange({ searchQuery: e.target.value });
  };

  const handleTypeChange = (e) => {
    // TODO Q2: Update type in filters
    // onFilterChange({ type: e.target.value });
  };

  const handleToggleFullEvents = (e) => {
    // TODO Q2: Toggle showFullEvents
    // onFilterChange({ showFullEvents: e.target.checked });
  };

  const handleReset = () => {
    // TODO Q2: Reset all filters to default
    // onFilterChange({
    //   type: 'all',
    //   showFullEvents: true,
    //   searchQuery: ''
    // });
  };

  return (
    <div className="filter-panel">
      <h2 className="card-title">🔍 Filter Events</h2>
      
      <div className="filter-controls">
        {/* Search Input */}
        <div className="form-group">
          <label className="form-label">Search</label>
          <input
            type="text"
            className="form-input"
            placeholder="Search by title or speaker..."
            value={filters.searchQuery}
            onChange={handleSearchChange}
          />
        </div>

        <div className="filter-row">
          {/* Type Filter */}
          <div className="form-group" style={{ flex: 1 }}>
            <label className="form-label">Event Type</label>
            <div className="form-radio-group">
              <label className="form-radio">
                <input
                  type="radio"
                  name="type"
                  value="all"
                  checked={filters.type === 'all'}
                  onChange={handleTypeChange}
                />
                All
              </label>
              <label className="form-radio">
                <input
                  type="radio"
                  name="type"
                  value="workshop"
                  checked={filters.type === 'workshop'}
                  onChange={handleTypeChange}
                />
                Workshops
              </label>
              <label className="form-radio">
                <input
                  type="radio"
                  name="type"
                  value="talk"
                  checked={filters.type === 'talk'}
                  onChange={handleTypeChange}
                />
                Talks
              </label>
            </div>
          </div>

          {/* Capacity Toggle */}
          <div className="form-group">
            <label className="form-label">Availability</label>
            <label className="form-checkbox">
              <input
                type="checkbox"
                checked={!filters.showFullEvents}
                onChange={(e) => onFilterChange({ showFullEvents: !e.target.checked })}
              />
              Hide full events
            </label>
          </div>
        </div>
      </div>

      {/* TODO Q2: Filter Summary (conditional) */}
      {/* {summary && (
        <div className="filter-summary">
          {summary}
        </div>
      )} */}

      {/* TODO Q2: Reset Button (conditional) */}
      {/* {hasActiveFilters && (
        <button className="btn btn-secondary mt-md" onClick={handleReset}>
          Clear All Filters
        </button>
      )} */}
    </div>
  );
}

export default FilterPanel;
```

---

## 4. EditEventForm Component

**File:** `src/components/EditEventForm.jsx`

```jsx
import { useState } from 'react';

function EditEventForm({ event, onSave, onCancel }) {
  // TODO Q3: Initialize form data state
  // const [formData, setFormData] = useState({
  //   title: event.title,
  //   speaker: event.speaker,
  //   type: event.type,
  //   capacity: event.capacity,
  //   laptopRequired: false,
  //   softwareRequirements: ''
  // });

  // TODO Q3: Initialize errors state
  // const [errors, setErrors] = useState({});

  // TODO Q3: Initialize touched fields state
  // const [touched, setTouched] = useState({});

  // TODO Q3: Validate function
  const validate = () => {
    const newErrors = {};

    // Title validation
    // if (!formData.title) newErrors.title = 'Title is required';
    // else if (formData.title.length < 5) newErrors.title = 'Title must be at least 5 characters';

    // Speaker validation
    // if (!formData.speaker) newErrors.speaker = 'Speaker name is required';

    // Capacity validation
    // if (!formData.capacity || formData.capacity < 1) {
    //   newErrors.capacity = 'Capacity must be a positive number';
    // } else if (formData.capacity < event.registered) {
    //   newErrors.capacity = `Capacity cannot be less than current registrations (${event.registered})`;
    // }

    // Software requirements validation (if laptop required)
    // if (formData.type === 'workshop' && formData.laptopRequired && !formData.softwareRequirements) {
    //   newErrors.softwareRequirements = 'Please specify software requirements';
    // }

    // setErrors(newErrors);
    // return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field, value) => {
    // TODO Q3: Update formData
    // setFormData(prev => ({ ...prev, [field]: value }));
    
    // TODO Q3: Mark field as touched
    // setTouched(prev => ({ ...prev, [field]: true }));

    // TODO Q3: Reset type-specific fields when type changes
    // if (field === 'type' && value === 'talk') {
    //   setFormData(prev => ({
    //     ...prev,
    //     laptopRequired: false,
    //     softwareRequirements: ''
    //   }));
    // }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mark all fields as touched
    // setTouched({
    //   title: true,
    //   speaker: true,
    //   capacity: true,
    //   softwareRequirements: true
    // });

    // TODO Q3: Validate and save
    // if (validate()) {
    //   onSave({ ...event, ...formData });
    // }
  };

  const handleCancelClick = () => {
    // TODO Q3: Confirm before closing if form has changes
    // const hasChanges = 
    //   formData.title !== event.title ||
    //   formData.speaker !== event.speaker ||
    //   formData.type !== event.type ||
    //   formData.capacity !== event.capacity;
    
    // if (hasChanges) {
    //   if (window.confirm('You have unsaved changes. Are you sure you want to cancel?')) {
    //     onCancel();
    //   }
    // } else {
    //   onCancel();
    // }
  };

  // TODO Q3: Check if form has any errors
  // const hasErrors = Object.keys(errors).length > 0;

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
              {/* TODO Q3: Show error if touched and has error */}
              {/* {touched.title && errors.title && (
                <span className="form-error">{errors.title}</span>
              )} */}
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
              {/* TODO Q3: Show error */}
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
              {/* TODO Q3: Show error */}
            </div>

            {/* TODO Q3: Conditional fields for Workshop */}
            {/* {formData.type === 'workshop' && (
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
                    TODO: Show error
                  </div>
                )}
              </>
            )} */}
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
```

---

## 5. StatsDashboard Component

**File:** `src/components/StatsDashboard.jsx`

```jsx
function StatsDashboard({ events }) {
  // TODO Q4: Calculate statistics (derive, don't store in state!)
  
  // Total events
  // const totalEvents = events.length;

  // Total capacity
  // const totalCapacity = events.reduce((sum, event) => sum + event.capacity, 0);

  // Total registered
  // const totalRegistered = events.reduce((sum, event) => sum + event.registered, 0);

  // Occupancy rate
  // const occupancyRate = totalCapacity > 0 
  //   ? ((totalRegistered / totalCapacity) * 100).toFixed(1)
  //   : 0;

  // Available seats
  // const availableSeats = totalCapacity - totalRegistered;

  // Count workshops vs talks
  // const workshopCount = events.filter(e => e.type === 'workshop').length;
  // const talkCount = events.filter(e => e.type === 'talk').length;

  // TODO Q4: Check if high occupancy (> 90%)
  // const isHighOccupancy = occupancyRate > 90;

  return (
    <div className="card">
      <h2 className="card-title">📊 Statistics Dashboard</h2>
      
      {/* Stats Grid */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">Total Events</div>
          {/* TODO Q4: Display totalEvents */}
          {/* <div className="stat-value">{totalEvents}</div> */}
        </div>

        <div className="stat-card">
          <div className="stat-label">Total Capacity</div>
          {/* TODO Q4: Display totalCapacity */}
          {/* <div className="stat-value">{totalCapacity}</div> */}
        </div>

        <div className="stat-card">
          <div className="stat-label">Total Registered</div>
          {/* TODO Q4: Display totalRegistered */}
          {/* <div className="stat-value">{totalRegistered}</div> */}
        </div>

        <div className="stat-card">
          <div className="stat-label">Occupancy Rate</div>
          {/* TODO Q4: Display occupancyRate */}
          {/* <div className="stat-value">
            {occupancyRate}<span className="stat-unit">%</span>
          </div> */}
        </div>

        <div className="stat-card">
          <div className="stat-label">Available Seats</div>
          {/* TODO Q4: Display availableSeats */}
          {/* <div className="stat-value">{availableSeats}</div> */}
        </div>
      </div>

      {/* Event Type Breakdown */}
      <div className="mt-lg">
        <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
          {/* TODO Q4: Display breakdown */}
          {/* {workshopCount} workshops, {talkCount} talks */}
        </p>
      </div>

      {/* TODO Q4: Conditional Alert for High Occupancy */}
      {/* {isHighOccupancy && (
        <div className="alert alert-warning mt-lg">
          <span style={{ fontSize: '1.5rem' }}>⚠️</span>
          <div>
            <strong>High Attendance Expected</strong>
            <p style={{ margin: 0 }}>Prepare overflow seating</p>
          </div>
        </div>
      )} */}
    </div>
  );
}

export default StatsDashboard;
```

---

## 6. Bonus: RegistrationForm Component

**File:** `src/components/RegistrationForm.jsx`

```jsx
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
```

---

## 7. Sample Data

Copy this to initialize your events state:

```jsx
const INITIAL_EVENTS = [
  {
    id: 1,
    title: 'React Hooks Deep Dive',
    speaker: 'Sarah Johnson',
    type: 'workshop',
    capacity: 30,
    registered: 28,
    requirements: 'Laptop required'
  },
  {
    id: 2,
    title: 'State Management Patterns',
    speaker: 'Mike Chen',
    type: 'talk',
    capacity: 50,
    registered: 35,
    requirements: 'None'
  },
  {
    id: 3,
    title: 'Building Accessible Forms',
    speaker: 'Emma Davis',
    type: 'workshop',
    capacity: 25,
    registered: 12,
    requirements: 'Laptop with VS Code'
  },
  {
    id: 4,
    title: 'Modern CSS Techniques',
    speaker: 'Alex Rivera',
    type: 'talk',
    capacity: 100,
    registered: 100,
    requirements: 'None'
  },
  {
    id: 5,
    title: 'Advanced React Patterns',
    speaker: 'Dr. James Wilson',
    type: 'workshop',
    capacity: 20,
    registered: 8,
    requirements: 'Laptop required'
  },
  {
    id: 6,
    title: 'Performance Optimization',
    speaker: 'Lisa Anderson',
    type: 'talk',
    capacity: 75,
    registered: 60,
    requirements: 'None'
  }
];
```

---

## 📝 Usage Instructions

1. **Copy the CSS file** from `src/index.css` (already provided in your project)

2. **Create the component files** in `src/components/` folder:
   - `EventCard.jsx`
   - `FilterPanel.jsx`
   - `EditEventForm.jsx`
   - `StatsDashboard.jsx`

3. **Copy the template code** from this document into each file

4. **Implement the TODOs**:
   - Uncomment the commented code
   - Add your logic for state management
   - Implement event handlers
   - Add conditional rendering
   - Implement validation

5. **Test frequently** with `npm run dev`

---

## 💡 Tips

- **Start with Q1 (App.jsx)**: Get the data structure and filtering logic right first
- **Test each component independently**: Make sure one component works before moving to the next
- **Use browser DevTools**: Check the console for errors
- **Read the comments**: The TODO comments guide you on what to implement
- **Don't modify CSS classes**: The styling is already complete - focus on React logic

---

## ✅ Checklist Before Submission

- [ ] All TODO comments have been addressed
- [ ] State is properly initialized with `useState`
- [ ] Filtered events are calculated without `useEffect`
- [ ] All form inputs are controlled components
- [ ] Validation errors show only after fields are touched
- [ ] Conditional rendering works correctly
- [ ] Statistics are calculated during render (not stored in state)
- [ ] The app runs without errors (`npm run dev`)
- [ ] Student ID and name are in App.jsx comments

Good luck! 🍀
