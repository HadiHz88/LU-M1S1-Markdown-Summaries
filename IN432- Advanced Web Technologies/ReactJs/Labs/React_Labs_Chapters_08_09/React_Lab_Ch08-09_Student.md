## React Lab 03 – Chapters 08–09 (Student Guide)

**Goal**  
Build the Workshop Registration Control Room focusing on Chapter 08 (conditional rendering patterns) and Chapter 09 (forms & validation). Students will coordinate filters, empty states, and confirmation banners while implementing a fully controlled registration form.

**Template Requirement**  

1. Duplicate the provided `lab3-template` folder and rename it `react-lab03-<yourname>`.  
2. Run `npm install` inside the duplicated folder.  
3. Do **not** rename starter files. Add new components under `src/components`.  
4. Keep the schedule times exactly as provided (use ق.ظ. / ب.ظ. abbreviations).  

**Styling Rules**  

1. The file `src/styles/lab-theme.css` already contains the layout grid, hero styles, pills, and summary panel colors.  
2. Extend styling by adding new utility classes in the same folder if necessary.  
3. Avoid inline styles—use the supplied CSS tokens/variables for consistency.  

---

### Part 1 – Data Flow & Selection State (Chapter 08)

1. Import `useState` and initialize:
   - `workshops` with `INITIAL_WORKSHOPS`.
   - `filters` with `{ showOnlyOpen: false, mode: 'all', focus: 'all' }`.
   - `selectedWorkshopId` with the first workshop’s `id`.
   - `lastRegistration` with `null`.
2. Derive `filteredWorkshops` by applying these rules:
   - When `filters.showOnlyOpen` is true, drop sessions where `seats.taken >= seats.total`.
   - When `filters.mode` !== `'all'`, match only workshops with that `mode`.
   - When `filters.focus` !== `'all'`, require `workshop.focus === filters.focus`.
3. Pick `selectedWorkshop` by matching `selectedWorkshopId`. If the selected workshop is filtered out, automatically fall back to the first available workshop using `useEffect`.
4. Compute helper values:
   - `openCount` – count workshops with available seats.
   - `isFull` – bool for the currently selected workshop.
   - `almostFull` – remaining seats `<= 3`.
   - `noResults` – boolean when `filteredWorkshops.length === 0`.
5. Render the hero pills:
   - `"X of Y sessions still open"` (always visible).
   - `"Urgent · Almost full"` pill only when `almostFull` is true.

### Part 2 – Filter Panel & Workshop Cards (Chapter 08)

1. Complete `FilterPanel.jsx`:
   - Controlled checkbox for `showOnlyOpen`.
   - Radio/segmented buttons for delivery `mode`.
   - `<select>` for `focus` (`all`, `events`, `forms`, `assessment`).
   - Call `onFilterChange(partial)` and merge it into state in `App.jsx`.
2. Show a caption below the filters summarizing the active filters (e.g., "Showing remote-only workshops focused on forms").
3. Build `WorkshopCard.jsx`:
   - Accept props `{ workshop, isSelected, onSelect }`.
   - Highlight the card when selected (`workshop-card--selected`).
   - Display badges for mode/focus and seat status (`Open`, `Filling fast`, `Waitlist only`).
   - Button triggers `onSelect(workshop.id)`.
4. Replace the placeholder paragraph in `App.jsx` with:
   - An empty state article when `noResults` is true.
   - A `.workshop-grid` that maps `filteredWorkshops` to `<WorkshopCard />`.

### Part 3 – Registration Form (Chapter 09)

1. Finish `RegistrationForm.jsx` using `useState`:

   ```javascript
   const [formData, setFormData] = useState({
     fullName: '',
     email: '',
     experience: 'beginner',
     attendanceType: workshop?.mode === 'remote' ? 'remote' : 'in-person',
     needsEquipment: false,
     dietary: 'none',
     notes: ''
   })
   ```

2. Validate inputs:
   - Name must be at least 3 characters.
   - Email must contain `'@'` (manual check per instructor preference).
3. Add radio inputs for attendance type. Disable the in-person option when `workshop.mode === 'remote'`.
4. Show conditional fields:
   - When `needsEquipment` is true, display an extra textarea asking what is needed.
   - When `dietary !== 'none'`, show a helper note reminding the instructor.
5. On submit:
   - Prevent default.
   - Abort if invalid or if the workshop is full and you plan to skip waitlists.
   - Call `onSubmit({ ...formData, workshopId: workshop.id })`.
   - Reset the form & errors.

### Part 4 – Confirmation Panel & Seat Updates (Chapters 08–09)

1. In `App.jsx`, create `handleRegistrationSubmit(payload)`:
   - Determine if the workshop still has seats.
   - If seats remain, increment `seats.taken`.
   - Otherwise, flag the payload as `waitlist: true` without changing seats.
   - Save `{ ...payload, waitlist, submittedAt: new Date().toISOString() }` to `lastRegistration`.
2. Pass `registration={lastRegistration}` and `onClear={() => setLastRegistration(null)}` to `SummaryPanel`.
3. In `SummaryPanel.jsx`:
   - Render nothing when `registration` is `null`.
   - Show attendee info, target session, and status ("Confirmed" vs "Waitlist").
   - Only show dietary/equipment notes when provided.
   - Include a “Clear summary” button.
4. Optional stretch goals:
   - Keyboard shortcut: pressing `w` toggles between workshops.
   - Persist registrations in `localStorage`.
   - Animate summary panel entrance.

### Deliverables

1. Working React project that satisfies all sections.
2. `README.md` describing setup, state variables, components, and conditional logic implemented.
3. Optional `REFLECTION.md` with lessons learned from each part.

### Submission Checklist

- [ ] Template duplicated, dependencies installed.  
- [ ] Filters adjust the workshop grid with correct empty-state handling.  
- [ ] Cards highlight selection and show accurate seat badges.  
- [ ] Registration form uses controlled inputs + inline validation.  
- [ ] Seat counts update (or waitlist is triggered) after submission.  
- [ ] Summary panel reflects the latest registration with correct styling.  
- [ ] Hero + badges use conditional rendering as specified.  
- [ ] README completed with setup notes and feature overview.  

Good luck! Test each conditional branch (open vs full, remote vs in-person, filter edge cases) before you move on.
