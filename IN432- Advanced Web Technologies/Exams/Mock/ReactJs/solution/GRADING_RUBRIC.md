# 📋 Grading Rubric - React Event Management Exam

## Total Points: 100 (+10 Bonus)

---

## Q1: Event Dashboard & Filtering (35 points)

### State Management (10 points)

- [ ] **5 pts** - Events state initialized with `useState(INITIAL_EVENTS)`
- [ ] **3 pts** - Filters state initialized correctly with all three properties
- [ ] **2 pts** - Selected event ID state initialized

### Derived Filtering Logic (15 points)

- [ ] **5 pts** - Filtering uses derived state (calculated during render, NO useEffect)
- [ ] **4 pts** - Type filter implemented correctly
- [ ] **3 pts** - Capacity filter (showFullEvents) works correctly
- [ ] **3 pts** - Search filter (title AND speaker) implemented

### Event Card Rendering (10 points)

- [ ] **3 pts** - Cards render with correct data
- [ ] **2 pts** - Availability calculations (sold out, almost full) correct
- [ ] **2 pts** - Badges display correctly (type and status)
- [ ] **2 pts** - Selected state highlights correctly
- [ ] **1 pt** - Click to select works

**Deductions:**

- -5 pts: Using useEffect for filtering
- -3 pts: Filter conditions not combined properly
- -2 pts: Missing empty state

---

## Q2: Filter Panel (20 points)

### Controlled Inputs (8 points)

- [ ] **3 pts** - Search input is controlled (value + onChange)
- [ ] **3 pts** - Type radio buttons controlled
- [ ] **2 pts** - Checkbox controlled

### Filter Updates (6 points)

- [ ] **4 pts** - onFilterChange merges filters correctly `{...prev, ...newFilters}`
- [ ] **2 pts** - All filter changes trigger updates

### Filter Summary (4 points)

- [ ] **2 pts** - Summary text generates correctly
- [ ] **2 pts** - Summary displays conditionally

### Reset Functionality (2 points)

- [ ] **1 pt** - Clear filters button appears conditionally
- [ ] **1 pt** - Reset resets all filters to defaults

**Deductions:**

- -4 pts: Uncontrolled inputs
- -2 pts: Filter summary always visible
- -2 pts: Reset doesn't work properly

---

## Q3: Edit Event Form (30 points)

### Form State Management (8 points)

- [ ] **4 pts** - Form data initialized from event props
- [ ] **2 pts** - Errors state initialized
- [ ] **2 pts** - Touched fields state initialized

### Validation Logic (10 points)

- [ ] **3 pts** - Title validation (required, min 5 chars)
- [ ] **2 pts** - Speaker validation (required)
- [ ] **3 pts** - Capacity validation (positive, >= registered)
- [ ] **2 pts** - Software requirements validation (if laptop required)

### Error Display (6 points)

- [ ] **4 pts** - Errors show ONLY after field is touched
- [ ] **2 pts** - Error styling applied correctly

### Conditional Fields (4 points)

- [ ] **2 pts** - Laptop checkbox only for workshops
- [ ] **2 pts** - Software requirements only when laptop checked

### Form Submission (2 points)

- [ ] **1 pt** - Validates before saving
- [ ] **1 pt** - Updates event and closes form

**Deductions:**

- -6 pts: Errors show before field touched
- -4 pts: No validation
- -3 pts: Form doesn't save correctly
- -2 pts: Missing unsaved changes warning

---

## Q4: Statistics Dashboard (15 points)

### Statistics Calculations (10 points)

- [ ] **2 pts** - Total events count
- [ ] **2 pts** - Total capacity (reduce)
- [ ] **2 pts** - Total registered (reduce)
- [ ] **2 pts** - Occupancy rate calculation
- [ ] **2 pts** - Workshop/talk counts

### Implementation Pattern (3 points)

- [ ] **3 pts** - Uses derived calculations (NO useState for stats)

### Conditional Alert (2 points)

- [ ] **1 pt** - Alert appears when occupancy > 90%
- [ ] **1 pt** - Alert hidden otherwise

**Deductions:**

- -5 pts: Using useState for statistics
- -3 pts: Incorrect calculations
- -2 pts: Alert always visible

---

## BONUS: Registration Form (+10 points)

### Form Implementation (5 points)

- [ ] **2 pts** - Name and email inputs
- [ ] **2 pts** - Validation logic
- [ ] **1 pt** - Form submission

### Features (5 points)

- [ ] **2 pts** - Email validation (contains @)
- [ ] **2 pts** - Available seats display
- [ ] **1 pt** - Sold-out handling

---

## Code Quality (-5 to +5 points)

### Bonus Points (up to +5)

- [ ] **+2 pts** - Exceptionally clean code
- [ ] **+1 pt** - Excellent variable names
- [ ] **+1 pt** - Good code organization
- [ ] **+1 pt** - Helpful comments

### Deductions (up to -5)

- [ ] **-2 pts** - Console errors present
- [ ] **-2 pts** - Poor code organization
- [ ] **-1 pt** - Inconsistent formatting

---

## Common Mistakes & Deductions

### Critical Errors

- **-10 pts**: App doesn't run / crashes
- **-5 pts**: Using useEffect for filtering
- **-5 pts**: Major functionality missing

### State Management

- **-4 pts**: Uncontrolled components
- **-3 pts**: Not merging filter state
- **-2 pts**: Unnecessary re-renders

### Validation & Forms

- **-6 pts**: Errors show before touch
- **-4 pts**: No validation
- **-3 pts**: Form doesn't update state

### Conditional Rendering

- **-3 pts**: Missing empty state
- **-2 pts**: Conditional UI always visible
- **-2 pts**: Modal doesn't close

---

## Grading Guidelines

### A+ (95-110): Exceptional

- All features perfect
- Clean code
- Bonus implemented
- No errors

### A (85-94): Excellent

- All core features work
- Minor issues
- Good code quality

### B (75-84): Good

- Most features work
- Some validation issues
- Working solution

### C (65-74): Adequate

- Basic functionality
- Some features missing
- Multiple issues

### D (55-64): Poor

- Major features missing
- Many errors
- Incomplete

### F (<55): Fail

- Doesn't run
- Most features missing
- Critical errors

---

## Quick Assessment Checklist

### ✅ Must Have (Pass/Fail)

- [ ] App runs without crashing
- [ ] Events display
- [ ] At least one filter works
- [ ] Form opens and closes

### ✅ Core Features (75+ points)

- [ ] All filters work together
- [ ] Form validates
- [ ] Statistics calculate
- [ ] State management correct

### ✅ Excellence (90+ points)

- [ ] Derived state pattern used
- [ ] Error display after touch
- [ ] All conditionals work
- [ ] Clean code

### ✅ Mastery (100+ points)

- [ ] Everything perfect
- [ ] Bonus implemented
- [ ] Production-ready
- [ ] Best practices throughout

---

## Feedback Templates

### For Excellent Work
>
> "Excellent implementation! Your use of derived state for filtering and proper controlled components shows strong React fundamentals. [Specific praise]. Grade: [Score]/100"

### For Good Work
>
> "Good job on the core functionality. [What worked well]. Consider improving: [Specific areas]. Grade: [Score]/100"

### For Needs Improvement
>
> "You've implemented the basics, but there are issues with [specific problems]. Focus on: [key improvements needed]. Grade: [Score]/100"

---

## Final Grade Calculation

```
Q1: Event Dashboard     _____ / 35
Q2: Filter Panel        _____ / 20
Q3: Edit Form           _____ / 30
Q4: Statistics          _____ / 15
Bonus: Registration     _____ / +10
Code Quality            _____ / ±5
─────────────────────────────────
TOTAL                   _____ / 100 (+10)
```

**Letter Grade:** _______

**Comments:**
_________________________________
_________________________________
_________________________________

---

## Answer Key Reference

See the complete solution in:

- `src/App.jsx`
- `src/components/*.jsx`
- `SOLUTION_README.md`
- `IMPLEMENTATION_SUMMARY.md`

---

**Last Updated:** January 17, 2026
**Exam Duration:** 90 minutes
**Passing Grade:** 60/100
