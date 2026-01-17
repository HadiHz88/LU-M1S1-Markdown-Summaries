function EventCard({ event, isSelected, onSelect }) {
  // Calculate availability status
  const availableSeats = event.capacity - event.registered;
  const isSoldOut = availableSeats <= 0;
  const isAlmostFull = availableSeats > 0 && availableSeats <= 5;

  // Determine badge type and text
  let statusBadge = 'available';
  let statusText = 'Available';
  if (isSoldOut) {
    statusBadge = 'sold-out';
    statusText = 'SOLD OUT';
  } else if (isAlmostFull) {
    statusBadge = 'almost-full';
    statusText = 'Almost Full';
  }

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
        {/* Type badge (workshop/talk) */}
        <span className={`badge badge-${event.type}`}>
          {event.type === 'workshop' ? '🛠️ Workshop' : '💬 Talk'}
        </span>

        {/* Status badge (conditional) */}
        <span className={`badge badge-${statusBadge}`}>
          {statusText}
        </span>
      </div>

      {/* Capacity Info */}
      <div className="capacity-info">
        {/* Display capacity - "X / Y seats" */}
        <span>{event.registered} / {event.capacity} seats</span>
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
