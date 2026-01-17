# React Exam Template - Event Management System

## 📖 Overview

This is the template project for the React Advanced Exam. It includes:
- ✅ Pre-configured Vite + React setup
- ✅ Complete CSS styling (no CSS work required!)
- ✅ Component templates with TODO comments
- ✅ Sample data structure
- ✅ Instructions and quick start guide

**Your focus:** Implement React logic (state, handlers, validation, conditional rendering)

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Read the Instructions
Open the exam instructions file (provided separately) and read it carefully.

### 4. Follow the Templates
Navigate to the `TEMPLATES/` folder:
- **QUICK_START.md** - Quick setup guide
- **COMPONENT_TEMPLATES.md** - Complete code templates for all components

### 5. Create Your Components
Create component files in `src/components/` and copy the template code from `COMPONENT_TEMPLATES.md`

---

## 📁 Project Structure

```
react-part/
├── TEMPLATES/
│   ├── QUICK_START.md           ← Start here for setup
│   └── COMPONENT_TEMPLATES.md   ← Copy component code from here
├── src/
│   ├── components/              ← Create your components here
│   ├── App.jsx                  ← Main component (template provided)
│   ├── index.css                ← Pre-written styles (DO NOT MODIFY)
│   └── main.jsx                 ← Entry point (DO NOT MODIFY)
├── package.json
└── README.md                    ← You are here
```

---

## 🎯 What You Need to Do

### Question 1: Event Dashboard & Filtering (35 points)
- Set up state in `App.jsx`
- Implement filtering logic (derived state)
- Create `EventCard.jsx` with conditional rendering

### Question 2: Filter Panel (20 points)
- Create `FilterPanel.jsx`
- Implement controlled form inputs
- Add filter summary and reset functionality

### Question 3: Edit Event Form (30 points)
- Create `EditEventForm.jsx`
- Implement form validation
- Add conditional fields based on event type

### Question 4: Statistics Dashboard (15 points)
- Create `StatsDashboard.jsx`
- Calculate statistics from filtered events
- Add conditional alert for high occupancy

### Bonus: Registration System (10 points)
- Optional extra credit
- Create simple registration form
- Track registrations per event

---

## 🎨 CSS Is Already Done!

All styling is complete in `src/index.css`. Just use the provided CSS classes:

### Common Classes
- **Layout:** `container`, `card`, `grid grid-2`
- **Buttons:** `btn btn-primary`, `btn btn-secondary`
- **Form:** `form-group`, `form-label`, `form-input`, `form-error`
- **Badges:** `badge badge-workshop`, `badge badge-available`
- **Alerts:** `alert alert-warning`, `alert alert-success`

**No CSS knowledge required** - just use the classes as shown in templates!

---

## 📝 Before You Start

1. ✅ Read the exam instructions thoroughly
2. ✅ Review `TEMPLATES/QUICK_START.md` for setup
3. ✅ Open `TEMPLATES/COMPONENT_TEMPLATES.md` - this has all the code you need
4. ✅ Create component files in `src/components/`
5. ✅ Copy template code and implement the TODOs

---

## ⚠️ Important Rules

### ✅ DO:
- Use the provided CSS classes
- Follow the template structure
- Implement all TODOs
- Test frequently with `npm run dev`
- Focus on React logic

### ❌ DON'T:
- Modify `index.css` (styling is complete)
- Use `useEffect` for filtering (use derived state)
- Store calculated values in state (calculate during render)
- Forget to make form inputs controlled
- Skip validation

---

## 🧪 Testing Checklist

Before submitting, test:
- [ ] Filters work individually and combined
- [ ] Event cards show correct badges
- [ ] Edit form validates all fields
- [ ] Conditional fields appear/disappear correctly
- [ ] Statistics update when filters change
- [ ] No console errors
- [ ] App runs with `npm run dev`

---

## 📦 Submission

1. **Test everything** thoroughly
2. **Add your info** to `App.jsx` (Student ID, Full Name, Date)
3. **Compress the folder** (exclude `node_modules`)
4. **Name:** `StudentID_ReactExam.zip`
5. **Upload** to designated platform

---

## 🆘 Need Help?

### Components Not Showing?
- Check browser console for errors
- Verify imports in `App.jsx`
- Make sure component is exported (`export default`)

### Styles Not Working?
- Class names are case-sensitive
- Check spelling matches template exactly
- Verify `index.css` is imported in `main.jsx`

### State Not Updating?
- Are inputs controlled? (`value={...}`)
- Are you using setState functions?
- Check event handler is called correctly

---

## 📚 Resources Provided

1. **TEMPLATES/QUICK_START.md** - Setup and tips
2. **TEMPLATES/COMPONENT_TEMPLATES.md** - All component code
3. **src/index.css** - Complete styling
4. **Exam Instructions** - Question details and grading

---

## 🎓 Good Luck!

Remember:
- **Read** the templates carefully
- **Test** frequently
- **Focus** on React logic, not CSS
- **Follow** the TODO comments
- **Ask** if something is unclear

You've got this! 🚀
