# Quick Start Guide

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open the Templates
Navigate to the `TEMPLATES` folder and open `COMPONENT_TEMPLATES.md`

### 4. Create Component Files
Create these files in `src/components/`:
- `EventCard.jsx`
- `FilterPanel.jsx`
- `EditEventForm.jsx`
- `StatsDashboard.jsx`

### 5. Copy Template Code
Copy the code from `COMPONENT_TEMPLATES.md` into each corresponding file.

### 6. Implement the Logic
Follow the TODO comments in each file to:
- Add state management
- Implement event handlers
- Add conditional rendering
- Implement validation

---

## 📁 Project Structure

```
react-part/
├── TEMPLATES/
│   └── COMPONENT_TEMPLATES.md  ← START HERE!
├── src/
│   ├── components/             ← Create your components here
│   │   ├── EventCard.jsx
│   │   ├── FilterPanel.jsx
│   │   ├── EditEventForm.jsx
│   │   └── StatsDashboard.jsx
│   ├── App.jsx                 ← Main component
│   ├── index.css               ← Pre-written styles (DO NOT MODIFY)
│   └── main.jsx
├── package.json
└── README.md
```

---

## 🎯 Key Concepts to Focus On

### 1. State Management
- Use `useState` for all state
- Initialize state properly
- Update state correctly

### 2. Derived State
- **Calculate** filtered data during render
- **DO NOT** use `useEffect` for filtering
- Statistics should be calculated, not stored

### 3. Controlled Components
- All form inputs must be controlled
- Value comes from state
- Changes update state via event handlers

### 4. Conditional Rendering
- Use ternary operators for simple conditions
- Use `&&` for showing/hiding elements
- Render different content based on state

### 5. Form Validation
- Track which fields are "touched"
- Show errors only after field is touched
- Disable submit when errors exist

---

## ⚠️ Common Mistakes to Avoid

1. ❌ **Don't use `useEffect` for filtering**
   ```jsx
   // WRONG
   useEffect(() => {
     setFilteredEvents(events.filter(...));
   }, [events, filters]);
   
   // CORRECT
   const filteredEvents = events.filter(...);
   ```

2. ❌ **Don't store derived data in state**
   ```jsx
   // WRONG
   const [totalCapacity, setTotalCapacity] = useState(0);
   
   // CORRECT
   const totalCapacity = events.reduce((sum, e) => sum + e.capacity, 0);
   ```

3. ❌ **Don't forget to make inputs controlled**
   ```jsx
   // WRONG
   <input type="text" />
   
   // CORRECT
   <input 
     type="text" 
     value={formData.title}
     onChange={(e) => handleChange('title', e.target.value)}
   />
   ```

4. ❌ **Don't show errors before field is touched**
   ```jsx
   // WRONG
   {errors.title && <span>{errors.title}</span>}
   
   // CORRECT
   {touched.title && errors.title && <span>{errors.title}</span>}
   ```

---

## 🎨 Using the Pre-written CSS

All CSS is already written in `src/index.css`. Just use these classes:

### Layout
- `container` - Main container with max-width
- `card` - White card with shadow
- `grid grid-2` - 2-column responsive grid

### Buttons
- `btn btn-primary` - Blue primary button
- `btn btn-secondary` - Gray secondary button
- `btn btn-sm` - Small button

### Badges
- `badge badge-workshop` - Workshop badge
- `badge badge-talk` - Talk badge
- `badge badge-available` - Green status
- `badge badge-almost-full` - Yellow status
- `badge badge-sold-out` - Red status

### Forms
- `form-group` - Form field wrapper
- `form-label` - Field label
- `form-input` - Text input
- `form-select` - Dropdown select
- `form-checkbox` - Checkbox with label
- `form-radio` - Radio button with label
- `form-error` - Error message

### Alerts
- `alert alert-warning` - Warning message
- `alert alert-success` - Success message
- `alert alert-info` - Info message

### Event Cards
- `event-card` - Card wrapper
- `event-card.selected` - Selected state
- `event-card-title` - Event title
- `event-card-speaker` - Speaker name

---

## 🧪 Testing Your Work

### Test Filtering (Q1)
1. Enter search text - cards should filter
2. Select "Workshop" - only workshops show
3. Check "Hide full events" - full events disappear
4. Combine filters - all filters should work together

### Test Filter Panel (Q2)
1. Change filters - summary text should update
2. Reset button should appear when filters are active
3. Click reset - all filters should clear

### Test Edit Form (Q3)
1. Click "Edit" on a card - form should open
2. Change title to 3 characters - error should show
3. Change type to "workshop" - laptop checkbox appears
4. Set capacity below registered count - error shows
5. Click cancel with changes - confirmation dialog appears

### Test Statistics (Q4)
1. Apply filters - stats should update
2. Check occupancy calculation is correct
3. When occupancy > 90% - warning appears

---

## 📊 Sample Data Reference

Your app should start with 6 events:
- 2 sold out (capacity = registered)
- 2 almost full (1-5 seats left)
- 2 available (more seats)
- Mix of workshops and talks

---

## 🆘 Need Help?

### If components aren't rendering:
1. Check browser console for errors
2. Make sure you imported the component in App.jsx
3. Verify the component is exported with `export default`

### If styles aren't working:
1. Check that class names match exactly (case-sensitive)
2. Verify `index.css` is imported in `main.jsx`
3. Clear browser cache and refresh

### If state isn't updating:
1. Check that you're using `setX` functions from `useState`
2. Make sure inputs are controlled (`value={...}`)
3. Verify event handlers are calling the right functions

---

## ⏱️ Time Management

- **Q1: 35 min** - State setup, filtering, event cards
- **Q2: 15 min** - Filter panel
- **Q3: 25 min** - Edit form with validation
- **Q4: 10 min** - Statistics dashboard
- **Buffer: 5 min** - Testing and fixes
