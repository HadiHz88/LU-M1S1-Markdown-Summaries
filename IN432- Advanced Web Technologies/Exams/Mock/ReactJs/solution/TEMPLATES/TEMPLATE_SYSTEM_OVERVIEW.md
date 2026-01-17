# Template System Overview

## 📋 What Students Get

This template system provides everything students need EXCEPT the React logic:

### ✅ Provided (Students DON'T need to write)
1. **Complete CSS** - All styles pre-written in `index.css`
2. **HTML/JSX Structure** - Component templates with full markup
3. **Sample Data** - Initial events array
4. **Project Setup** - Vite configuration, package.json
5. **Instructions** - Step-by-step guides

### ❌ Students MUST Implement
1. **State Management** - `useState` declarations
2. **Event Handlers** - Click handlers, form handlers
3. **Filtering Logic** - Derived state calculations
4. **Conditional Rendering** - Show/hide based on state
5. **Form Validation** - Error checking and display
6. **Statistics Calculations** - Derived metrics

---

## 📂 File Structure

```
react-part/
│
├── TEMPLATES/                          ← Student's main resource
│   ├── QUICK_START.md                 ← Setup instructions
│   └── COMPONENT_TEMPLATES.md         ← Code to copy
│
├── src/
│   ├── components/                    ← Students create files here
│   │   └── .gitkeep                   ← Placeholder
│   ├── App.jsx                        ← Default React app (to be replaced)
│   ├── index.css                      ← ✅ COMPLETE CSS (400+ lines)
│   ├── main.jsx                       ← Entry point (don't modify)
│   └── ...
│
├── README.md                          ← Project overview
└── package.json                       ← Dependencies
```

---

## 🎯 How Students Use This

### Step 1: Setup
```bash
npm install
npm run dev
```

### Step 2: Read Templates
- Open `TEMPLATES/COMPONENT_TEMPLATES.md`
- Review the structure and TODOs

### Step 3: Create Components
Create these files in `src/components/`:
- `EventCard.jsx`
- `FilterPanel.jsx`
- `EditEventForm.jsx`
- `StatsDashboard.jsx`

### Step 4: Copy & Implement
- Copy template code into each file
- Find all `// TODO` comments
- Uncomment the code
- Implement the logic

### Step 5: Test
```bash
npm run dev
```
Visit localhost and test functionality

---

## 🎨 CSS Class Reference

All classes are defined in `src/index.css`:

### Layout
- `container` - Max-width centered container
- `card` - White card with shadow and padding
- `grid grid-2` - 2-column responsive grid

### Buttons
- `btn` - Base button class
- `btn-primary` - Blue button
- `btn-secondary` - Gray button
- `btn-danger` - Red button
- `btn-sm` - Small size

### Event Cards
- `event-card` - Card wrapper
- `event-card.selected` - Selected state (border + background)
- `event-card-title` - Event title styling
- `event-card-speaker` - Speaker name styling

### Badges
- `badge` - Base badge class
- `badge-workshop` - Blue workshop badge
- `badge-talk` - Pink talk badge
- `badge-available` - Green status
- `badge-almost-full` - Yellow status
- `badge-sold-out` - Red status

### Forms
- `form-group` - Field wrapper with margin
- `form-label` - Field label
- `form-input` - Text input
- `form-select` - Dropdown select
- `form-textarea` - Textarea
- `form-checkbox` - Checkbox with label
- `form-radio` - Radio button with label
- `form-error` - Error message (red text)

### Statistics
- `stats-grid` - Grid for stat cards
- `stat-card` - Individual stat card
- `stat-label` - Stat label text
- `stat-value` - Large stat value
- `stat-unit` - Unit text (%, etc.)

### Alerts
- `alert` - Base alert class
- `alert-warning` - Yellow warning
- `alert-success` - Green success
- `alert-info` - Blue info

### Modal
- `modal-overlay` - Full-screen overlay
- `modal` - Modal container
- `modal-header` - Modal header
- `modal-body` - Modal content
- `modal-footer` - Modal actions

---

## 💡 Teaching Strategy

### Focus Areas
Students must demonstrate understanding of:

1. **State Management**
   - Where to declare state
   - How to update state
   - When to use derived vs stored state

2. **Controlled Components**
   - `value` prop from state
   - `onChange` updates state
   - Two-way data binding

3. **Derived State**
   - Calculate during render
   - Don't use `useEffect` for filtering
   - Don't store calculated values

4. **Conditional Rendering**
   - Ternary operators
   - Logical AND (`&&`)
   - Different content based on state

5. **Form Validation**
   - Track touched fields
   - Show errors conditionally
   - Disable submit when invalid

### What's Abstracted Away
- CSS/Styling (pre-written)
- Build configuration (Vite)
- Basic project structure
- HTML markup (in templates)

### What Students Build
- React logic
- State flow
- Event handling
- Validation logic
- Conditional display

---

## 🧪 Verification Points

### Q1: Event Dashboard
- [ ] State initialized correctly
- [ ] Filtering combines all conditions
- [ ] Cards display with correct classes
- [ ] Selected state highlighted
- [ ] Empty state shows when no results

### Q2: Filter Panel
- [ ] All inputs are controlled
- [ ] Filter summary updates
- [ ] Reset button conditionally visible
- [ ] Filters actually filter events

### Q3: Edit Form
- [ ] Form data initialized from event
- [ ] Validation runs on field blur
- [ ] Errors show only when touched
- [ ] Capacity validates against registered
- [ ] Conditional fields for workshops
- [ ] Submit disabled when errors exist

### Q4: Statistics
- [ ] All metrics calculated correctly
- [ ] No statistics stored in state
- [ ] Updates when filters change
- [ ] High occupancy alert conditional

---

## 📝 Grading Focus

### Full Points If:
- Uses `useState` correctly
- No `useEffect` for filtering
- All inputs controlled
- Validation works properly
- Conditional rendering correct
- No console errors

### Point Deductions For:
- Storing derived state
- Using `useEffect` for filtering
- Uncontrolled inputs
- Missing validation
- Hard-coded values
- Console errors
- Poor variable names

---

## 🎓 Student Success Tips

1. **Read templates first** - Don't start coding blindly
2. **Implement one component at a time** - Don't try everything at once
3. **Test frequently** - Check after each TODO
4. **Use browser DevTools** - Check console for errors
5. **Follow TODO order** - They're sequenced logically
6. **Don't modify CSS** - It's complete and tested
7. **Read exam instructions** - Know the requirements

---

## 🔧 Customization Notes

If you need to modify this template:

### To Change Styling:
- Edit `src/index.css`
- Keep class names consistent
- Update `COMPONENT_TEMPLATES.md` if classes change

### To Add Components:
- Add new section to `COMPONENT_TEMPLATES.md`
- Include sample data if needed
- Add to checklist in `QUICK_START.md`

### To Change Requirements:
- Update exam instructions (separate file)
- Update TODOs in templates
- Update verification checklist

---

## 📊 Template Statistics

- **CSS Lines:** ~400 (complete styling)
- **Template Components:** 5 (+ 1 bonus)
- **Total TODOs:** ~50 across all components
- **Sample Data:** 6 events
- **Estimated Completion Time:** 90 minutes

---

## ✅ Quality Checklist

This template provides:
- [x] Complete, tested CSS
- [x] Semantic HTML structure
- [x] Clear TODO comments
- [x] Sample data for testing
- [x] Multiple documentation files
- [x] Quick start guide
- [x] Common pitfalls guide
- [x] Testing checklist
- [x] Grading rubric reference

---

## 🎯 Summary

**What makes this template effective:**

1. **CSS is done** - Students focus on React
2. **Structure provided** - Reduces analysis paralysis
3. **TODOs guide** - Clear implementation path
4. **Testing data included** - Can verify immediately
5. **Multiple docs** - Different learning styles
6. **Progressive difficulty** - Builds from simple to complex

**Result:** Students can focus entirely on React concepts without worrying about styling or project setup.
