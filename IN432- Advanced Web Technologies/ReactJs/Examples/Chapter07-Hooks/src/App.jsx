import React, { useState } from 'react'
import './App.css'

// Chapter 7: React Hooks - Deep Dive into useState

// Example 1: Basic useState
function BasicHook() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="demo-box">
      <h3>1. Basic useState</h3>
      <p className="code">const [count, setCount] = useState(0);</p>
      <div className="display">{count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

// Example 2: Multiple State Variables
function MultipleStates() {
  const [name, setName] = useState("John")
  const [age, setAge] = useState(25)
  const [isStudent, setIsStudent] = useState(true)
  
  return (
    <div className="demo-box">
      <h3>2. Multiple useState Hooks</h3>
      <div className="info-grid">
        <div>
          <label>Name:</label>
          <input value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div>
          <label>Age:</label>
          <input type="number" value={age} onChange={e => setAge(e.target.value)} />
        </div>
        <div>
          <label>
            <input 
              type="checkbox" 
              checked={isStudent} 
              onChange={e => setIsStudent(e.target.checked)} 
            />
            Student
          </label>
        </div>
      </div>
      <div className="result">
        👤 {name}, {age} years old, {isStudent ? "📚 Student" : "💼 Professional"}
      </div>
    </div>
  )
}

// Example 3: State with Objects
function ObjectState() {
  const [person, setPerson] = useState({
    name: "Alice",
    age: 28,
    city: "New York"
  })
  
  const updateCity = () => {
    setPerson(prev => ({ ...prev, city: "Los Angeles" }))
  }

  const updateAge = () => {
    setPerson(prev => ({ ...prev, age: prev.age + 1 }))
  }
  
  return (
    <div className="demo-box">
      <h3>3. State with Objects</h3>
      <p className="code">setPerson(prev => ({'{'}...prev, city: "LA"{'}'}));</p>
      <div className="person-card">
        <p>👤 {person.name}</p>
        <p>🎂 {person.age}</p>
        <p>🏙️ {person.city}</p>
      </div>
      <button onClick={updateCity}>Move to LA</button>
      <button onClick={updateAge}>Birthday +1</button>
    </div>
  )
}

// Example 4: State with Arrays
function ArrayState() {
  const [items, setItems] = useState(["Apple", "Banana", "Orange"])
  const [newItem, setNewItem] = useState("")
  
  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem])
      setNewItem("")
    }
  }
  
  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index))
  }
  
  return (
    <div className="demo-box">
      <h3>4. State with Arrays</h3>
      <p className="code">setItems([...items, newItem]);</p>
      <div className="array-input">
        <input 
          value={newItem} 
          onChange={e => setNewItem(e.target.value)}
          placeholder="Add fruit..."
          onKeyPress={e => e.key === 'Enter' && addItem()}
        />
        <button onClick={addItem}>➕ Add</button>
      </div>
      <ul className="items-list">
        {items.map((item, index) => (
          <li key={index}>
            🍎 {item}
            <button onClick={() => removeItem(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

// Example 5: Functional Updates
function FunctionalUpdate() {
  const [count, setCount] = useState(0)
  
  const incrementTwice = () => {
    // ✅ Correct way - increments twice using functional updates
    setCount(prev => prev + 1)
    setCount(prev => prev + 1)
  }
  
  return (
    <div className="demo-box">
      <h3>5. Functional Updates</h3>
      <p className="code">setCount(prev => prev + 1);</p>
      <div className="display">{count}</div>
      <div className="button-group">
        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={incrementTwice}>+2 (Functional)</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
      <p className="note">The +2 button uses functional updates!</p>
    </div>
  )
}

// Example 6: Toggle Pattern
function TogglePattern() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  
  return (
    <div className="demo-box">
      <h3>6. Toggle Pattern</h3>
      <p className="code">setIsOpen(prev => !prev);</p>
      <div className={`panel ${isOpen ? 'open' : 'closed'}`}>
        {isOpen ? "👁️ Panel is Open" : "🔒 Panel is Closed"}
      </div>
      <button onClick={() => setIsOpen(prev => !prev)}>Toggle Panel</button>
      
      <div className={`theme ${isDarkMode ? 'dark' : 'light'}`}>
        {isDarkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </div>
      <button onClick={() => setIsDarkMode(prev => !prev)}>Toggle Theme</button>
    </div>
  )
}

// Example 7: Form State Management
function FormState() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  })
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  return (
    <div className="demo-box">
      <h3>7. Form State Management</h3>
      <form className="form">
        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
      </form>
      <pre className="json">{JSON.stringify(formData, null, 2)}</pre>
    </div>
  )
}

// Example 8: Counter with History
function CounterWithHistory() {
  const [count, setCount] = useState(0)
  const [history, setHistory] = useState([0])
  
  const increment = () => {
    const newCount = count + 1
    setCount(newCount)
    setHistory([...history, newCount])
  }
  
  const decrement = () => {
    const newCount = count - 1
    setCount(newCount)
    setHistory([...history, newCount])
  }
  
  return (
    <div className="demo-box">
      <h3>8. Counter with History</h3>
      <div className="display">{count}</div>
      <div className="button-group">
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div className="history">
        <strong>History:</strong> {history.join(' → ')}
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>🪝 Chapter 7: React Hooks</h1>
        <p>Deep Dive into useState</p>
      </header>
      
      <main className="content">
        <div className="rules-box">
          <h2>📋 Rules of Hooks</h2>
          <ul>
            <li>✅ Only call Hooks at the top level (not inside loops, conditions, or nested functions)</li>
            <li>✅ Only call Hooks from React function components or custom Hooks</li>
            <li>✅ Hooks must be called in the same order every render</li>
            <li>❌ Don't call Hooks in regular JavaScript functions</li>
          </ul>
        </div>
        
        <div className="examples-grid">
          <BasicHook />
          <MultipleStates />
          <ObjectState />
          <ArrayState />
          <FunctionalUpdate />
          <TogglePattern />
          <FormState />
          <CounterWithHistory />
        </div>
        
        <div className="tips-box">
          <h3>💡 Key Takeaways</h3>
          <ul>
            <li><code>useState</code> returns an array: [currentValue, setterFunction]</li>
            <li>State updates trigger component re-renders</li>
            <li>Use the spread operator (...) to update objects and arrays immutably</li>
            <li>Use functional updates when new state depends on previous state</li>
            <li>You can use multiple useState hooks in a single component</li>
            <li>State is isolated - each component instance has its own state</li>
          </ul>
        </div>
      </main>
    </div>
  )
}

export default App








