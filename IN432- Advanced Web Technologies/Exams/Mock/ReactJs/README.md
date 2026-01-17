# React Advanced Exam - Event Management System

## ⚠️ IMPORTANT: Before You Start

**Add your information as comments at the top of `src/App.jsx`:**

```jsx
/*
Student ID: [Your Student ID]
Full Name: [Your Full Name]
Date: [Exam Date]
*/
```

**You must include this information in your submission. Missing information will result in a 10-point deduction.**

---

## Instructions

- **Duration:** 90 minutes
- Answer all questions by implementing the solutions in the provided React template
- Write clean, maintainable code following React best practices
- **Only `useState` hook is allowed** - no other hooks
- All components must use **functional component** syntax
- Use **controlled components** for all forms
- Test your solution thoroughly before submission
- You may create additional component files in `src/components/` if needed

---

## Scenario Overview

You are building an **Event Management System** for a technology conference. The system allows admins to view events, filter them dynamically, manage registrations, and edit event details through a comprehensive form.

---

## Question 1: Event Dashboard with Advanced Filtering (35 points)

### Objective

Create the main event dashboard with smart filtering capabilities using **derived state** (no `useEffect` for filtering).

### Part A: Initial Setup (10 points)

In `App.jsx`, initialize the following state:

1. **`events`** - array of at least 5 event objects with these properties:
   - `id` (string/number)
   - `title` (string)
   - `speaker` (string)
   - `type` (string: 'workshop' or 'talk')
   - `capacity` (number - total seats)
   - `registered` (number - seats taken)
   - `requirements` (string - e.g., "Laptop required" or "None")

2. **`filters`** - object containing:
   - `type` (string: 'all', 'workshop', or 'talk')
   - `showFullEvents` (boolean: true to show full events, false to hide them)
   - `searchQuery` (string: searches title and speaker)

3. **`selectedEventId`** - currently selected event for editing (or null)

### Part B: Smart Filtering Logic (15 points)

Create a **derived state** variable called `filteredEvents` that combines ALL filters:

**Requirements:**

- **Type Filter:** Only show events matching the type (or all if type is 'all')
- **Capacity Filter:** If `showFullEvents` is false, hide events where `registered >= capacity`
- **Search Filter:** Case-insensitive search that matches BOTH `title` AND `speaker` fields
- **Important:** Do NOT use `useEffect` to filter - calculate directly during render

### Part C: Event Cards with Conditional Rendering (10 points)

Create an `EventCard` component that:

1. **Displays:**
   - Event title and speaker
   - Event type badge (workshop/talk)
   - Capacity info: "X / Y seats"
   - Requirements (if any)

2. **Conditional Status Badges:**
   - 🔴 **"SOLD OUT"** (red) - when `registered >= capacity`
   - 🟡 **"Almost Full"** (yellow) - when `capacity - registered <= 5` and not sold out
   - 🟢 **"Available"** (green) - otherwise

3. **Visual Highlight:**
   - Add a distinct border/background when `isSelected` is true

4. **Interactions:**
   - Clicking the card calls `onSelect(event.id)`
   - Include an "Edit" button that triggers the same selection

### Part D: Empty State Handling (bonus +5 points)

- When `filteredEvents.length === 0`, show a helpful empty state message
- Include a "Clear All Filters" button that resets filters to default

---

## Question 2: Filter Panel Component (20 points)

### Objective

Create a `FilterPanel` component that provides all filtering controls.

### Requirements

1. **Props:**
   - `filters` - current filter state object
   - `onFilterChange` - callback to update filters (receives partial filter object)

2. **Filter Controls (all must be controlled components):**
   - **Search Input:** Text field with placeholder "Search by title or speaker..."
   - **Type Selector:** Radio buttons or segmented control for 'All', 'Workshop', 'Talk'
   - **Capacity Toggle:** Checkbox labeled "Hide full events"

3. **Filter Summary Display:**
   - Show a text summary of active filters below the controls
   - Example: "Showing workshops with available seats"
   - Example: "Showing all events matching 'React'"
   - Hide summary when no filters are active

4. **Reset Functionality:**
   - Include a "Reset Filters" button
   - Only show the button when filters differ from default values
   - Clicking resets all filters to: `{ type: 'all', showFullEvents: true, searchQuery: '' }`

---

## Question 3: Edit Event Form with Dynamic Validation (30 points)

### Objective

Create an `EditEventForm` component that allows editing a selected event with conditional fields and complex validation.

### Requirements

1. **Props:**
   - `event` - the selected event object
   - `onSave` - callback that receives updated event data
   - `onCancel` - callback to close the form

2. **Form Fields (all controlled):**

   **Basic Fields (always visible):**
   - **Title** (text input)
   - **Speaker** (text input)
   - **Type** (select dropdown: 'workshop' or 'talk')
   - **Capacity** (number input)

   **Conditional Fields (based on type):**
   - **IF type is 'workshop':**
     - Show checkbox: "Laptop Required"
     - Show text input: "Software Requirements" (visible only if laptop is checked)
   - **IF type is 'talk':**
     - Hide laptop and software fields (and reset their values)

3. **Validation Rules:**

   Implement real-time validation with an `errors` state object:

   - **Title:**
     - Required
     - Minimum 5 characters
     - Error: "Title must be at least 5 characters"

   - **Speaker:**
     - Required
     - Cannot be empty
     - Error: "Speaker name is required"

   - **Capacity:**
     - Must be a valid number
     - **Critical:** Cannot be less than current `registered` count
     - Error: "Capacity cannot be less than current registrations (X)"

   - **Software Requirements** (when visible):
     - Required if "Laptop Required" is checked
     - Error: "Please specify software requirements"

4. **Form Behavior:**
   - Disable "Save Changes" button if ANY validation errors exist
   - Show error messages inline below each field (only after field is touched)
   - On save: validate all fields, then call `onSave` with updated data
   - On cancel: confirm with user before closing if form has changes

5. **State Management:**
   - Use a single `formData` state object for all field values
   - Use a separate `errors` state object for validation messages
   - Track which fields have been `touched` to control error display

---

## Question 4: Statistics Dashboard (15 points)

### Objective

Create a `StatsDashboard` component that displays real-time analytics based on the **current filtered view**.

### Requirements

1. **Props:**
   - `events` - the filtered events array (from Question 1)

2. **Calculated Statistics (derive, don't store in state):**

   Display the following metrics:

   - **Total Events:** Count of events in the filtered list

   - **Total Capacity:** Sum of all `capacity` values

   - **Total Registered:** Sum of all `registered` values

   - **Occupancy Rate:** Calculate as `(Total Registered / Total Capacity) * 100`
     - Format as percentage: "85.5% Occupied"

   - **Available Seats:** `Total Capacity - Total Registered`

3. **Conditional Alert:**

   - If **Occupancy Rate > 90%**, display a warning alert:
     - "⚠️ High Attendance Expected - Prepare Overflow Seating"
     - Use distinct styling (red/orange background)

   - Otherwise, show a normal status message

4. **Event Type Breakdown:**

   - Count workshops vs talks in the filtered list
   - Display: "X workshops, Y talks"

**Important:** All statistics must be calculated during render, NOT stored in separate state variables. They should update automatically when the filtered events change.

---

## Bonus Question: Event Registration (Optional - 10 points extra credit)

### Objective

Add the ability to register attendees for events and track registrations.

### Requirements

1. **In App.jsx, add state:**
   - `registrations` - array of registration objects

2. **Create a simple RegistrationForm component that:**
   - Shows for the selected event
   - Has fields: Name (text), Email (text)
   - Validates: both required, email must contain '@'
   - On submit:
     - If event has available seats: increment `registered` count
     - Add registration to the array
     - Show success message

3. **Display a RegistrationsList component:**
   - Shows all registrations for the selected event
   - Displays: attendee name and email
   - Include a "Cancel Registration" button that:
     - Decrements the event's `registered` count
     - Removes registration from array

---

## Technical Requirements & Best Practices

### Code Quality

- Use meaningful variable and function names
- Add comments for complex logic only (code should be self-documenting)
- Keep components focused (single responsibility)
- Avoid code duplication - extract repeated logic

### React Best Practices

- **Do NOT use `useEffect` to derive state** - calculate filtered data during render
- All form inputs must be controlled components
- Event handlers should use descriptive names (e.g., `handleFilterChange`, not `onChange`)
- Component props should be documented with comments

### Validation

- Show error messages only after a field has been "touched"
- Disable submit buttons when validation fails
- Provide clear, helpful error messages

---

## File Structure

Your submission should follow this structure:

```
src/
  App.jsx                    # Main component with state management
  components/
    EventCard.jsx            # Q1 - Event display component
    FilterPanel.jsx          # Q2 - Filter controls
    EditEventForm.jsx        # Q3 - Event editing form
    StatsDashboard.jsx       # Q4 - Statistics display
    (RegistrationForm.jsx)   # Bonus - Optional
```

---

## Submission Instructions

1. **Test thoroughly:**
   - Test all filter combinations
   - Try different event types in the edit form
   - Verify the capacity validation works correctly
   - Check that statistics update when filters change
   - Test conditional field visibility in the form

2. **Compress and submit:**
   - Include your entire project folder
   - **Exclude `node_modules` directory**
   - Name the file: `StudentID_ReactExam.zip`
   - Upload to the designated platform

3. **Before submitting:**
   - Ensure your Student ID and Name are in App.jsx comments
   - Run `npm run dev` to verify no errors
   - Check that all required components are included

---

## Grading Rubric

| Question | Points | Key Criteria |
|----------|--------|--------------|
| **Q1: Event Dashboard & Filtering** | 35 | State structure (10), filtering logic (15), conditional rendering (10) |
| **Q2: Filter Panel** | 20 | Controlled components (10), filter summary (5), reset functionality (5) |
| **Q3: Edit Event Form** | 30 | Form structure (10), conditional fields (10), validation (10) |
| **Q4: Statistics Dashboard** | 15 | Correct calculations (10), conditional alert (5) |
| **Bonus: Registration** | +10 | Optional extra credit |
| **Code Quality & Style** | -0 to -10 | Deductions for poor practices, bugs, missing comments |
| **Total** | **100** | (110 with bonus) |

---

## Common Pitfalls to Avoid

⚠️ **Difficulty Factor 1:** Students often fail to combine ALL filters correctly. Make sure your filtering logic uses `&&` to combine type, capacity, AND search filters.

⚠️ **Difficulty Factor 2:** The validation rule `capacity < registered` requires cross-referencing two values. Don't forget to check against the CURRENT registered count.

⚠️ **Difficulty Factor 3:** Statistics must be calculated on-the-fly during render, NOT stored in state. If you use `useState` for `totalCapacity`, you'll lose points.

⚠️ **Difficulty Factor 4:** Conditional form fields must fully disappear when type changes - don't just hide them with CSS, actually don't render them.

---

## Time Management Suggestions

- **Q1 (35 min):** Set up state, implement filtering, create event cards
- **Q2 (15 min):** Build filter panel with controlled inputs
- **Q3 (25 min):** Create edit form with validation
- **Q4 (10 min):** Add statistics dashboard
- **Buffer (5 min):** Testing and debugging
- **Bonus (optional):** If time permits

---

## Good Luck! 🚀

**Remember:**

- Start with Q1 - getting the data structure right makes everything easier
- Test each component as you build it
- Use descriptive variable names
- Focus on making it work correctly before making it look perfect
- Only attempt the bonus if you finish the main questions early

**End of Exam**
