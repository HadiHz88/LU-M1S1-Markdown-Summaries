import React, { useState } from 'react';

/**
 * TODO (Chapter 09):
 * 1. Accept props: { workshop, onSubmit, disabled }.
 * 2. Use useState to manage a form object, e.g.:
 *    {
 *      fullName: '',
 *      email: '',
 *      experience: 'beginner',
 *      attendanceType: workshop.mode === 'remote' ? 'remote' : 'in-person',
 *      needsEquipment: false,
 *      dietary: 'none',
 *      notes: ''
 *    }
 * 3. Build controlled inputs:
 *    - Text inputs for name/email (with simple validation).
 *    - Select for experience level.
 *    - Radio group for attendanceType (remote vs in-person).
 *    - Checkbox for needsEquipment.
 *    - Textarea for notes.
 * 4. Show inline errors (e.g., email missing '@', name < 3 chars).
 * 5. On submit:
 *    - Prevent default.
 *    - If disabled or invalid, bail out.
 *    - Call onSubmit with { ...formData, workshopId: workshop.id }.
 *    - Reset the form and optionally show a success message.
 * 6. Stretch ideas:
 *    - Disable physical attendance choice when workshop.mode === 'remote'.
 *    - Reveal an extra textarea when needsEquipment === true.
 */
function RegistrationForm() {
  // TODO: Add form state + validation state.
  // const [formData, setFormData] = useState(...);
  // const [errors, setErrors] = useState({});

  // TODO: Implement handleChange / handleCheckbox / handleSubmit helpers.

  return (
    <form className="registration-form">
      <p className="placeholder">
        Build the full Chapter 09 form here. Use controlled inputs, validation, and call <code>onSubmit</code>.
      </p>
    </form>
  );
}

export default RegistrationForm;


