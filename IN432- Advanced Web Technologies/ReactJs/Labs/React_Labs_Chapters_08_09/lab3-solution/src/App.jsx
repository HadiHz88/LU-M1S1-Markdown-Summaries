import React from 'react';
import { INITIAL_WORKSHOPS } from './data/workshops';

// React Lab 03 focuses on Chapter 08 (Conditional Rendering) and Chapter 09 (Forms).
// Follow the inline TODOs to wire up the Workshop Registration Control Room.

function App() {
  // TODO: Import useState/useMemo/useEffect from React once you begin.
  // TODO: Create state for:
  // - workshops: start with INITIAL_WORKSHOPS
  // - filters: { showOnlyOpen: false, mode: 'all', focus: 'all' }
  // - selectedWorkshopId: default to INITIAL_WORKSHOPS[0]?.id
  // - lastRegistration: store the most recent successful submission

  // TODO (Chapter 08):
  // - Derive filteredWorkshops based on the filters state.
  // - Compute selectedWorkshop by matching selectedWorkshopId.
  // - Add helper booleans such as isFull, isEmptyState, isMorningSession, etc.
  // - Build a string that summarizes the active filters for the hero banner.

  // TODO (Chapter 09):
  // - Implement handleRegistrationSubmit that:
  //   1. Receives the payload from <RegistrationForm />.
  //   2. Updates seats for the selected workshop (or flags waitlist).
  //   3. Stores a friendly summary object inside lastRegistration.
  // - Pass the correct props to <RegistrationForm /> and <SummaryPanel />.

  // TODO: Add handlers handleFilterChange and handleSelectWorkshop.
  // Remember to use functional updates when the next value depends on the previous one.

  return (
    <main className="lab-shell">
      <header className="lab-hero card">
        <div>
          <p className="eyebrow">React Lab 03 · Chapters 08–09</p>
          <h1>Workshop Registration Control Room</h1>
          <p className="intro">
            Practice conditional rendering patterns and controlled forms by managing the workshop schedule below.
          </p>
        </div>

        <div className="hero-stats">
          {/* TODO: Show how many workshops are still open vs total. */}
          {/* Example: “3 of 4 sessions still have seats”. */}
          {/* TODO: If the selected workshop is almost full (<=3 seats), render a warning pill. */}
        </div>
      </header>

      <section className="card filters-panel">
        <div className="filters-heading">
          <h2>Filter the Schedule</h2>
          <p>Use these controls to test dynamic UI rendering based on Chapter 08 techniques.</p>
        </div>

        {/* TODO: Render <FilterPanel /> with props:
            filters={filters}
            onFilterChange={handleFilterChange}
        */}

        {/* TODO: Conditionally render a caption summarizing the active filters.
            Example: “Showing remote-only workshops focused on Forms”.
        */}
      </section>

      <section className="content-grid">
        <section className="card workshop-panel">
          <header className="panel-heading">
            <div>
              <p className="eyebrow">Sessions</p>
              <h2>Available Workshops</h2>
            </div>
            {/* TODO: Show selected workshop title or a placeholder badge. */}
          </header>

          {/* TODO: Replace the paragraph below with:
              - Conditional empty state article when filteredWorkshops.length === 0
              - A div.workshop-grid that maps filteredWorkshops -> <WorkshopCard />
          */}
          <p className="placeholder">
            Workshop list goes here. Map over filteredWorkshops and render <code>WorkshopCard</code> for each entry.
          </p>
        </section>

        <section className="card form-panel">
          <header className="panel-heading">
            <div>
              <p className="eyebrow">Registration</p>
              <h2>Reserve Your Seat</h2>
            </div>
            {/* TODO: Show a badge that says “Full · Waitlist only” when the selected workshop has zero seats. */}
          </header>

          {/* TODO: Conditionally render <RegistrationForm /> only when a workshop is selected.
              Pass props like:
              workshop={selectedWorkshop}
              onSubmit={handleRegistrationSubmit}
              disabled={yourDerivedBoolean}
          */}

          {/* TODO: After a successful submit, show <SummaryPanel registration={lastRegistration} onClear={...} /> */}
        </section>
      </section>
    </main>
  );
}

export default App;

