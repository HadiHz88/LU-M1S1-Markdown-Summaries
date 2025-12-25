import React from 'react';

/**
 * TODO (Chapter 08 + 09):
 * 1. Accept props: { registration, onClear }.
 * 2. When registration is null, render nothing (App will control via conditional rendering).
 * 3. Show a confirmation card containing:
 *    - Attendee name + email.
 *    - Target workshop title + session time.
 *    - Whether the attendee has a confirmed seat or a waitlist slot.
 *    - Any dietary/equipment notes (only if provided).
 * 4. Add a button that calls onClear() so the form can be used again.
 * 5. Style the banner differently for "confirmed" vs "waitlist" using CSS helper classes.
 */
function SummaryPanel() {
  return (
    <section className="summary-panel">
      <p className="placeholder">
        After you wire everything up, show the registration summary here with conditional styling.
      </p>
    </section>
  );
}

export default SummaryPanel;


