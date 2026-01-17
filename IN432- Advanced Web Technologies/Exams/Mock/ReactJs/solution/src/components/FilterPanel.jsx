function FilterPanel({ filters, onFilterChange }) {
  // Check if filters are active (different from default)
  const hasActiveFilters = 
    filters.type !== 'all' || 
    !filters.showFullEvents || 
    filters.searchQuery !== '';

  // Create filter summary text
  let summaryParts = [];
  if (filters.type !== 'all') summaryParts.push(`${filters.type}s`);
  if (!filters.showFullEvents) summaryParts.push('with available seats');
  if (filters.searchQuery) summaryParts.push(`matching "${filters.searchQuery}"`);
  const summary = summaryParts.length > 0 
    ? `Showing ${summaryParts.join(' ')}` 
    : '';

  const handleSearchChange = (e) => {
    // Update search query in filters
    onFilterChange({ searchQuery: e.target.value });
  };

  const handleTypeChange = (e) => {
    // Update type in filters
    onFilterChange({ type: e.target.value });
  };

  const handleReset = () => {
    // Reset all filters to default
    onFilterChange({
      type: 'all',
      showFullEvents: true,
      searchQuery: ''
    });
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

      {/* Filter Summary (conditional) */}
      {summary && (
        <div className="filter-summary">
          {summary}
        </div>
      )}

      {/* Reset Button (conditional) */}
      {hasActiveFilters && (
        <button className="btn btn-secondary mt-md" onClick={handleReset}>
          Clear All Filters
        </button>
      )}
    </div>
  );
}

export default FilterPanel;
