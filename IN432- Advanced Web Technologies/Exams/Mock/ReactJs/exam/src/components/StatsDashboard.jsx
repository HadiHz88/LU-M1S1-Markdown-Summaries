// Q4: StatsDashboard Component
// Displays real-time statistics from filtered events

function StatsDashboard({ events }) {
  // TODO Q4: Calculate statistics (IMPORTANT: Derive, don't store in state!)
  // All calculations should happen during render, not in useEffect or useState
  
  // TODO: Calculate totalEvents (count of events)
  // TODO: Calculate totalCapacity (sum of all capacity values)
  // TODO: Calculate totalRegistered (sum of all registered values)
  // TODO: Calculate occupancyRate (totalRegistered / totalCapacity * 100)
  // TODO: Calculate availableSeats (totalCapacity - totalRegistered)
  // TODO: Count workshopCount and talkCount
  // TODO: Check if isHighOccupancy (occupancyRate > 90)

  return (
    <div className="card">
      <h2 className="card-title">📊 Statistics Dashboard</h2>
      
      {/* Stats Grid - Complete HTML, needs data */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">Total Events</div>
          <div className="stat-value">__</div>
          {/* TODO Q4: Show totalEvents */}
        </div>

        <div className="stat-card">
          <div className="stat-label">Total Capacity</div>
          <div className="stat-value">__</div>
          {/* TODO Q4: Show totalCapacity */}
        </div>

        <div className="stat-card">
          <div className="stat-label">Total Registered</div>
          <div className="stat-value">__</div>
          {/* TODO Q4: Show totalRegistered */}
        </div>

        <div className="stat-card">
          <div className="stat-label">Occupancy Rate</div>
          <div className="stat-value">
            __<span className="stat-unit">%</span>
            {/* TODO Q4: Show occupancyRate */}
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-label">Available Seats</div>
          <div className="stat-value">__</div>
          {/* TODO Q4: Show availableSeats */}
        </div>
      </div>

      {/* Event Type Breakdown */}
      <div className="mt-lg">
        <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
          {/* TODO Q4: Show "X workshops, Y talks" */}
          __ workshops, __ talks
        </p>
      </div>

      {/* TODO Q4: Conditional Alert for High Occupancy */}
      {/* Show only when isHighOccupancy is true */}
      {/* Use the HTML structure below: */}
      
      {/* <div className="alert alert-warning mt-lg">
        <span style={{ fontSize: '1.5rem' }}>⚠️</span>
        <div>
          <strong>High Attendance Expected</strong>
          <p style={{ margin: 0 }}>Prepare overflow seating</p>
        </div>
      </div> */}
    </div>
  );
}

export default StatsDashboard;
