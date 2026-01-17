// Q1: EventCard Component
// This component displays a single event with badges and status

function EventCard({ event, isSelected, onSelect }) {
  // TODO Q1: Calculate availability status
  // Hint: const availableSeats = event.capacity - event.registered;
  // Hint: const isSoldOut = availableSeats <= 0;
  // Hint: const isAlmostFull = availableSeats > 0 && availableSeats <= 5;

  // TODO Q1: Determine badge type and text based on status
  // If sold out: badge='sold-out', text='SOLD OUT'
  // If almost full: badge='almost-full', text='Almost Full'
  // Otherwise: badge='available', text='Available'

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
        {/* TODO Q1: Add type badge (workshop/talk) */}
        {/* Workshop: badge-workshop with 🛠️ Workshop */}
        {/* Talk: badge-talk with 💬 Talk */}
        <span className="badge badge-workshop">
          🛠️ Workshop
        </span>

        {/* TODO Q1: Add status badge (conditional based on availability) */}
        {/* Use the statusBadge and statusText you calculated above */}
        <span className="badge badge-available">
          Available
        </span>
      </div>

      {/* Capacity Info */}
      <div className="capacity-info">
        {/* TODO Q1: Display "X / Y seats" */}
        <span>__ / __ seats</span>
      </div>

      {/* Requirements - This is complete */}
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
