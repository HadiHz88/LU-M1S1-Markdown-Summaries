function StatsDashboard({ events }) {
  // Calculate statistics (derive, don't store in state!)
  
  // Total events
  const totalEvents = events.length;

  // Total capacity
  const totalCapacity = events.reduce((sum, event) => sum + event.capacity, 0);

  // Total registered
  const totalRegistered = events.reduce((sum, event) => sum + event.registered, 0);

  // Occupancy rate
  const occupancyRate = totalCapacity > 0 
    ? ((totalRegistered / totalCapacity) * 100).toFixed(1)
    : 0;

  // Available seats
  const availableSeats = totalCapacity - totalRegistered;

  // Count workshops vs talks
  const workshopCount = events.filter(e => e.type === 'workshop').length;
  const talkCount = events.filter(e => e.type === 'talk').length;

  // Check if high occupancy (> 90%)
  const isHighOccupancy = occupancyRate > 90;

  return (
    <div className="card">
      <h2 className="card-title">📊 Statistics Dashboard</h2>
      
      {/* Stats Grid */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">Total Events</div>
          <div className="stat-value">{totalEvents}</div>
        </div>

        <div className="stat-card">
          <div className="stat-label">Total Capacity</div>
          <div className="stat-value">{totalCapacity}</div>
        </div>

        <div className="stat-card">
          <div className="stat-label">Total Registered</div>
          <div className="stat-value">{totalRegistered}</div>
        </div>

        <div className="stat-card">
          <div className="stat-label">Occupancy Rate</div>
          <div className="stat-value">
            {occupancyRate}<span className="stat-unit">%</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-label">Available Seats</div>
          <div className="stat-value">{availableSeats}</div>
        </div>
      </div>

      {/* Event Type Breakdown */}
      <div className="mt-lg">
        <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
          {workshopCount} workshops, {talkCount} talks
        </p>
      </div>

      {/* Conditional Alert for High Occupancy */}
      {isHighOccupancy && (
        <div className="alert alert-warning mt-lg">
          <span style={{ fontSize: '1.5rem' }}>⚠️</span>
          <div>
            <strong>High Attendance Expected</strong>
            <p style={{ margin: 0 }}>Prepare overflow seating</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default StatsDashboard;
