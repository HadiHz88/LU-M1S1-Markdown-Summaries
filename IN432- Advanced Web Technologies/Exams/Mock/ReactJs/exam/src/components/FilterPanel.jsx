// Q2: FilterPanel Component
// Provides filter controls and displays active filter summary

function FilterPanel({ filters, onFilterChange }) {
  // TODO Q2: Check if filters are active (different from default)
  // Default: type='all', showFullEvents=true, searchQuery=''
  // Hint: const hasActiveFilters = filters.type !== 'all' || ...

  // TODO Q2: Create filter summary text
  // Build an array of active filter descriptions
  // Example: "Showing workshops with available seats matching 'React'"
  // Hint: Build summaryParts array, join with spaces, prefix with "Showing"

  const handleSearchChange = (e) => {
    // TODO Q2: Update search query in filters
    // Hint: onFilterChange({ searchQuery: e.target.value });
  };

  const handleTypeChange = (e) => {
    // TODO Q2: Update type in filters
  };

  const handleReset = () => {
    // TODO Q2: Reset all filters to default values
  };

  return (
    <div className="filter-panel">
      <h2 className="card-title">🔍 Filter Events</h2>
      
      <div className="filter-controls">
        {/* Search Input - Complete structure, needs event handler */}
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
          {/* Type Filter - Complete structure, needs event handler */}
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

          {/* Capacity Toggle - Complete structure, needs event handler */}
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
      {/* Show only if summary text exists */}
      {/* Use className="filter-summary" */}

      {/* TODO Q2: Reset Button (conditional) */}
      {/* Show only if hasActiveFilters is true */}
      {/* <button className="btn btn-secondary mt-md" onClick={handleReset}>
        Clear All Filters
      </button> */}
    </div>
  );
}

export default FilterPanel;
