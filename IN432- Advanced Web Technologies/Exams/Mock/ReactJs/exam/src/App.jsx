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

// Sample data - DO NOT MODIFY
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

function App() {
  // TODO Q1: Initialize state
  // Hint: You need three state variables:
  // 1. events - initialized with INITIAL_EVENTS
  // 2. filters - object with { type, showFullEvents, searchQuery }
  // 3. selectedEventId - for tracking which event is being edited

  // TODO Q1: Calculate filtered events (IMPORTANT: Use derived state, NOT useEffect!)
  // Hint: Use .filter() method and combine all three filter conditions:
  // - Type filter (all/workshop/talk)
  // - Capacity filter (showFullEvents true/false)
  // - Search filter (matches title OR speaker, case-insensitive)
  // const filteredEvents = events.filter(event => { ... });

  // TODO: Find selected event from selectedEventId
  // const selectedEvent = ...;

  // TODO: Implement event handlers
  const handleFilterChange = (newFilters) => {
    // Merge new filters with existing filters
  };

  const handleSelectEvent = (eventId) => {
    // Update selectedEventId state
  };

  const handleSaveEvent = (updatedEvent) => {
    // Update the event in events array
    // Close the form
  };

  const handleCancelEdit = () => {
    // Close the form
  };

  const handleClearFilters = () => {
    // Reset all filters to default values
  };

  return (
    <div className="container">
      {/* Header */}
      <header className="exam-header">
        <h1>🎯 Event Management System</h1>
        <p>Technology Conference Admin Dashboard</p>
      </header>

      {/* TODO Q4: Add StatsDashboard component */}
      {/* Pass filteredEvents as prop */}

      {/* TODO Q2: Add FilterPanel component */}
      {/* Pass filters and onFilterChange as props */}

      {/* Event Cards Grid */}
      <div className="card">
        <h2 className="card-title">Events (___)</h2>
        {/* TODO: Show count of filteredEvents */}
        
        {/* TODO Q1: Add conditional rendering */}
        {/* If filteredEvents.length === 0, show empty state */}
        {/* Otherwise, show the grid */}
        
        <div className="empty-state">
          <div className="empty-state-icon">📭</div>
          <h3 className="empty-state-title">No Events Found</h3>
          <p className="empty-state-text">
            Try adjusting your filters or search terms
          </p>
          <button 
            className="btn btn-primary mt-md"
            onClick={handleClearFilters}
          >
            Clear All Filters
          </button>
        </div>

        {/* TODO: Replace above with proper conditional rendering */}
        
        <div className="grid grid-2">
          {/* TODO Q1: Map through filteredEvents */}
          {/* Render EventCard for each event */}
          {/* Don't forget the key prop! */}
        </div>
      </div>

      {/* TODO Q3: Add conditional rendering for EditEventForm */}
      {/* Show only when selectedEvent exists */}
      {/* Pass event, onSave, and onCancel props */}
    </div>
  );
}

export default App;
