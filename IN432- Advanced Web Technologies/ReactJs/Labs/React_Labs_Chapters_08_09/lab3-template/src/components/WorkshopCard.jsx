import React from 'react';

/**
 * TODO (Chapter 08):
 * 1. Accept props using destructuring: { workshop, isSelected, onSelect }.
 * 2. Compute derived booleans:
 *    - isFull when seats.taken >= seats.total.
 *    - isAlmostFull when remaining seats <= 3.
 * 3. Apply conditional class names:
 *    - Always include "workshop-card".
 *    - Add "workshop-card--selected" when isSelected is true.
 *    - Add "workshop-card--full" when isFull is true.
 * 4. Render the workshop info:
 *    - Title, instructor, mode, session (remember to keep ق.ظ./ب.ظ.).
 *    - Remaining seats (or "Waitlist only" when full).
 *    - Tags mapped into <span className="pill"> elements.
 * 5. Emit onSelect(workshop.id) when the card/button is clicked.
 * 6. Stretch: show a different emoji/icon for in-person vs remote sessions.
 */
function WorkshopCard() {
  return (
    <article className="workshop-card">
      <header>
        <p className="eyebrow">Workshop</p>
        <h3>TODO: Render workshop title</h3>
      </header>

      <p className="placeholder">
        Replace this placeholder with the actual workshop summary, status badges, and select button.
      </p>
    </article>
  );
}

export default WorkshopCard;


