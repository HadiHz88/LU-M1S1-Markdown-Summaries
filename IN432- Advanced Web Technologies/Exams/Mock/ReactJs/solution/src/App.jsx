/*
Student ID: INSTRUCTOR-SOLUTION
Full Name: Exam Solution Key
Date: January 17, 2026
*/

import { useState } from 'react';
import EventCard from './components/EventCard';
import FilterPanel from './components/FilterPanel';
import EditEventForm from './components/EditEventForm';
import StatsDashboard from './components/StatsDashboard';

// Sample data
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
  // Initialize state
  const [events, setEvents] = useState(INITIAL_EVENTS);
  const [filters, setFilters] = useState({
    type: 'all',
    showFullEvents: true,
    searchQuery: ''
  });
  const [selectedEventId, setSelectedEventId] = useState(null);

  // Calculate filtered events (derived state - no useEffect!)
  const filteredEvents = events.filter(event => {
    // Combine all filter conditions with &&
    
    // 1. Type filter
    const matchesType = filters.type === 'all' || event.type === filters.type;
    
    // 2. Capacity filter (showFullEvents)
    const availableSeats = event.capacity - event.registered;
    const matchesCapacity = filters.showFullEvents || availableSeats > 0;
    
    // 3. Search filter (title and speaker)
    const searchLower = filters.searchQuery.toLowerCase();
    const matchesSearch = 
      filters.searchQuery === '' ||
      event.title.toLowerCase().includes(searchLower) ||
      event.speaker.toLowerCase().includes(searchLower);
    
    return matchesType && matchesCapacity && matchesSearch;
  });

  // Find selected event
  const selectedEvent = events.find(e => e.id === selectedEventId);

  // Event handlers
  const handleFilterChange = (newFilters) => {
    // Update filters state - merge with existing filters
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const handleSelectEvent = (eventId) => {
    // Update selectedEventId
    setSelectedEventId(eventId);
  };

  const handleSaveEvent = (updatedEvent) => {
    // Update the event in the events array
    setEvents(prev => 
      prev.map(e => e.id === updatedEvent.id ? updatedEvent : e)
    );
    // Close the form (set selectedEventId to null)
    setSelectedEventId(null);
  };

  const handleCancelEdit = () => {
    // Close the form
    setSelectedEventId(null);
  };

  const handleClearFilters = () => {
    // Reset all filters
    setFilters({
      type: 'all',
      showFullEvents: true,
      searchQuery: ''
    });
  };

  return (
    <div className="container">
      {/* Header */}
      <header className="exam-header">
        <h1>🎯 Event Management System</h1>
        <p>Technology Conference Admin Dashboard</p>
      </header>

      {/* StatsDashboard component */}
      <StatsDashboard events={filteredEvents} />

      {/* FilterPanel component */}
      <FilterPanel 
        filters={filters}
        onFilterChange={handleFilterChange}
      />

      {/* Event Cards Grid */}
      <div className="card">
        <h2 className="card-title">Events ({filteredEvents.length})</h2>
        
        {/* Conditional rendering for empty state */}
        {filteredEvents.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon">📭</div>
            <h3 className="empty-state-title">No Events Found</h3>
            <p className="empty-state-text">
              Try adjusting your filters or search terms
            </p>
            {/* "Clear Filters" button */}
            <button 
              className="btn btn-primary mt-md"
              onClick={handleClearFilters}
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-2">
            {/* Map through filteredEvents and render EventCard */}
            {filteredEvents.map(event => (
              <EventCard
                key={event.id}
                event={event}
                isSelected={event.id === selectedEventId}
                onSelect={handleSelectEvent}
              />
            ))}
          </div>
        )}
      </div>

      {/* Conditionally render EditEventForm when an event is selected */}
      {selectedEvent && (
        <EditEventForm
          event={selectedEvent}
          onSave={handleSaveEvent}
          onCancel={handleCancelEdit}
        />
      )}
    </div>
  );
}

export default App;
