import React from 'react';

/**
 * TODO (Chapter 08):
 * 1. Accept props: { filters, onFilterChange }.
 * 2. Render three control groups:
 *    a. Checkbox → "Show only open seats" -> updates filters.showOnlyOpen.
 *    b. Segmented buttons or radio inputs for delivery mode (all, in-person, remote).
 *    c. Select dropdown for focus area (all, events, forms, assessment).
 * 3. Every control must be fully controlled (value comes from filters, changes call onFilterChange).
 * 4. Demonstrate conditional rendering by:
 *    - Showing helper text only when a filter is active.
 *    - Highlighting the active mode button.
 * 5. Optional: support a keyboard shortcut (e.g., press "f" to toggle the checkbox) via props passed from App.
 */
function FilterPanel() {
  return (
    <div className="filters-grid">
      <p className="placeholder">
        Build the filter UI here. The panel should control Chapter 08 conditional rendering in <code>App.jsx</code>.
      </p>
    </div>
  );
}

export default FilterPanel;


