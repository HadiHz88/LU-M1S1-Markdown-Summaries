# CSS Class Quick Reference

**Use this as a quick lookup while coding. All classes are defined in `src/index.css`**

---

## 🎨 Layout Classes

| Class | Purpose | Example |
|-------|---------|---------|
| `container` | Main wrapper (max-width 1200px) | `<div className="container">` |
| `card` | White box with shadow | `<div className="card">` |
| `card-title` | Card heading | `<h2 className="card-title">` |
| `grid` | CSS Grid container | `<div className="grid">` |
| `grid-2` | 2-column grid | `<div className="grid grid-2">` |
| `grid-3` | 3-column grid | `<div className="grid grid-3">` |

---

## 🔘 Button Classes

| Class | Appearance | When to Use |
|-------|------------|-------------|
| `btn` | Base button | Always combine with color class |
| `btn-primary` | Blue button | Main actions (Save, Submit) |
| `btn-secondary` | Gray button | Secondary actions (Cancel) |
| `btn-danger` | Red button | Destructive actions (Delete) |
| `btn-sm` | Small size | Compact buttons |

**Examples:**
```jsx
<button className="btn btn-primary">Save</button>
<button className="btn btn-secondary">Cancel</button>
<button className="btn btn-primary btn-sm">Edit</button>
```

---

## 🏷️ Badge Classes

| Class | Color | Use For |
|-------|-------|---------|
| `badge` | Base | Always combine with type |
| `badge-workshop` | Blue | Workshop events |
| `badge-talk` | Pink | Talk events |
| `badge-available` | Green | Available seats (>5) |
| `badge-almost-full` | Yellow | Almost full (1-5 seats) |
| `badge-sold-out` | Red | No seats left |

**Examples:**
```jsx
<span className="badge badge-workshop">🛠️ Workshop</span>
<span className="badge badge-available">Available</span>
```

---

## 📝 Form Classes

### Form Structure
| Class | Purpose |
|-------|---------|
| `form-group` | Wrapper for each field |
| `form-label` | Field label |
| `form-error` | Error message text |

### Form Inputs
| Class | Element |
|-------|---------|
| `form-input` | `<input type="text">` |
| `form-select` | `<select>` |
| `form-textarea` | `<textarea>` |
| `form-checkbox` | Checkbox wrapper |
| `form-radio` | Radio button wrapper |
| `form-radio-group` | Radio group container |

### Error State
Add `error` class to inputs with errors:
```jsx
<input className={`form-input ${errors.title ? 'error' : ''}`} />
```

**Complete Example:**
```jsx
<div className="form-group">
  <label className="form-label">Title *</label>
  <input 
    type="text"
    className={`form-input ${errors.title ? 'error' : ''}`}
    value={formData.title}
    onChange={handleChange}
  />
  {errors.title && (
    <span className="form-error">{errors.title}</span>
  )}
</div>
```

---

## 🃏 Event Card Classes

| Class | Purpose |
|-------|---------|
| `event-card` | Card wrapper |
| `event-card.selected` | Selected state (add `selected` class) |
| `event-card-header` | Card header section |
| `event-card-title` | Event title |
| `event-card-speaker` | Speaker name |
| `event-card-info` | Badges container |
| `event-card-footer` | Footer with buttons |

**Example:**
```jsx
<div className={`event-card ${isSelected ? 'selected' : ''}`}>
  <div className="event-card-header">
    <h3 className="event-card-title">{event.title}</h3>
    <p className="event-card-speaker">👤 {event.speaker}</p>
  </div>
  <div className="event-card-info">
    {/* badges */}
  </div>
  <div className="event-card-footer">
    {/* buttons */}
  </div>
</div>
```

---

## 📊 Statistics Classes

| Class | Purpose |
|-------|---------|
| `stats-grid` | Grid container for stats |
| `stat-card` | Individual stat card |
| `stat-label` | Label text |
| `stat-value` | Large number |
| `stat-unit` | Unit text (%, etc.) |

**Example:**
```jsx
<div className="stats-grid">
  <div className="stat-card">
    <div className="stat-label">Total Events</div>
    <div className="stat-value">
      {totalEvents}
    </div>
  </div>
</div>
```

---

## ⚠️ Alert Classes

| Class | Color/Icon | Use For |
|-------|------------|---------|
| `alert` | Base | Always combine with type |
| `alert-warning` | Yellow/⚠️ | Warnings |
| `alert-success` | Green/✓ | Success messages |
| `alert-info` | Blue/ℹ️ | Information |

**Example:**
```jsx
<div className="alert alert-warning">
  <span>⚠️</span>
  <div>
    <strong>Warning</strong>
    <p>This is a warning message</p>
  </div>
</div>
```

---

## 🚫 Empty State Classes

| Class | Purpose |
|-------|---------|
| `empty-state` | Container |
| `empty-state-icon` | Large icon |
| `empty-state-title` | Title text |
| `empty-state-text` | Body text |

**Example:**
```jsx
<div className="empty-state">
  <div className="empty-state-icon">📭</div>
  <h3 className="empty-state-title">No Events Found</h3>
  <p className="empty-state-text">Try adjusting your filters</p>
</div>
```

---

## 🪟 Modal Classes

| Class | Purpose |
|-------|---------|
| `modal-overlay` | Dark background overlay |
| `modal` | Modal container |
| `modal-header` | Modal header |
| `modal-title` | Modal title |
| `modal-body` | Modal content |
| `modal-footer` | Modal actions |

**Example:**
```jsx
<div className="modal-overlay">
  <div className="modal">
    <div className="modal-header">
      <h2 className="modal-title">Edit Event</h2>
    </div>
    <div className="modal-body">
      {/* form content */}
    </div>
    <div className="modal-footer">
      <button className="btn btn-secondary">Cancel</button>
      <button className="btn btn-primary">Save</button>
    </div>
  </div>
</div>
```

---

## 🛠️ Utility Classes

### Spacing
| Class | Effect |
|-------|--------|
| `mt-sm` | Small margin top |
| `mt-md` | Medium margin top |
| `mt-lg` | Large margin top |
| `mb-sm` | Small margin bottom |
| `mb-md` | Medium margin bottom |
| `mb-lg` | Large margin bottom |

### Flexbox
| Class | Effect |
|-------|--------|
| `flex` | Display flex |
| `flex-between` | Space between |
| `flex-center` | Center items |
| `gap-sm` | Small gap |
| `gap-md` | Medium gap |
| `gap-lg` | Large gap |

### Text
| Class | Effect |
|-------|--------|
| `text-center` | Center text |

---

## 🎯 Common Patterns

### Conditional Classes
```jsx
className={`event-card ${isSelected ? 'selected' : ''}`}
className={`form-input ${hasError ? 'error' : ''}`}
className={`badge badge-${event.type}`}
```

### Multiple Classes
```jsx
className="btn btn-primary btn-sm"
className="grid grid-2"
className="alert alert-warning mt-lg"
```

### Template Literals for Dynamic Classes
```jsx
className={`badge badge-${statusType}`}
// statusType could be: 'available', 'almost-full', 'sold-out'
```

---

## 💡 Pro Tips

1. **Copy exact class names** - They're case-sensitive
2. **Combine classes with spaces** - `"card mt-lg"`
3. **Use template literals for dynamic classes** - `badge-${type}`
4. **Check templates** - All patterns are shown in COMPONENT_TEMPLATES.md
5. **Don't modify CSS** - All styling is complete

---

## ⚠️ Common Mistakes

❌ **Wrong:**
```jsx
<div className="Card">           // Capital C
<div className="btn primary">    // Missing hyphen
<div className="form input">     // Should be form-input
```

✅ **Correct:**
```jsx
<div className="card">
<div className="btn btn-primary">
<div className="form-input">
```

---

## 🔍 Quick Lookup

Need a class? Find it here:

- **Container?** → `container`
- **Button?** → `btn btn-primary`
- **Input field?** → `form-input`
- **Error message?** → `form-error`
- **Badge?** → `badge badge-workshop`
- **Card?** → `card`
- **Alert?** → `alert alert-warning`
- **Modal?** → `modal-overlay` + `modal`

---

**Print this page or keep it open while coding!** 📄
