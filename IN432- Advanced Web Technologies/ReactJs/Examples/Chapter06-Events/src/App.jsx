import React, { useState } from 'react'
import './App.css'

// Chapter 6: React Events - Comprehensive Examples

function App() {
  // State for various examples
  const [clickCount, setClickCount] = useState(0)
  const [message, setMessage] = useState("")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [inputValue, setInputValue] = useState("")
  const [isHovering, setIsHovering] = useState(false)
  const [keyPressed, setKeyPressed] = useState("")
  const [formData, setFormData] = useState({ name: "", email: "" })
  const [submitted, setSubmitted] = useState(false)

  // Example 1: Click Events
  const handleClick = () => {
    setClickCount(clickCount + 1)
    setMessage("Button was clicked!")
  }

  const handleDoubleClick = () => {
    setMessage("Button was double-clicked!")
  }

  // Example 2: Mouse Events
  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
    setMessage("Mouse entered!")
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    setMessage("Mouse left!")
  }

  // Example 3: Input Events
  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleFocus = () => {
    setMessage("Input focused!")
  }

  const handleBlur = () => {
    setMessage("Input blurred!")
  }

  // Example 4: Keyboard Events
  const handleKeyDown = (e) => {
    setKeyPressed(e.key)
    setMessage(`Key pressed: ${e.key}`)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setMessage("Enter key pressed!")
    }
  }

  // Example 5: Form Events
  const handleFormChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setMessage(`Form submitted with name: ${formData.name}`)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 2000)
  }

  const handleReset = () => {
    setFormData({ name: "", email: "" })
    setMessage("Form reset!")
  }

  // Example 6: Passing Arguments
  const handleButtonClick = (buttonName) => {
    setMessage(`${buttonName} button clicked!`)
  }

  // Example 7: Preventing Default
  const handleLinkClick = (e) => {
    e.preventDefault()
    setMessage("Default link behavior prevented!")
  }

  // Example 8: Event Bubbling
  const handleParentClick = () => {
    setMessage("Parent clicked!")
  }

  const handleChildClick = (e) => {
    e.stopPropagation()
    setMessage("Child clicked (bubbling stopped)!")
  }

  return (
    <div className="App">
      <header className="header">
        <h1>🖱️ Chapter 6: React Events</h1>
        <p>Handling User Interactions</p>
      </header>

      <main className="content">
        {/* Message Display */}
        <div className="message-box">
          <h3>📢 Latest Event:</h3>
          <p className="message">{message || "No event yet - try interacting!"}</p>
        </div>

        {/* Example 1: Click Events */}
        <div className="example-box">
          <h2>1. Click Events</h2>
          <p className="explanation">onClick and onDoubleClick</p>
          <div className="demo">
            <button onClick={handleClick}>Click Me</button>
            <button onDoubleClick={handleDoubleClick}>Double Click Me</button>
            <p className="count">Click count: {clickCount}</p>
          </div>
        </div>

        {/* Example 2: Mouse Events */}
        <div className="example-box">
          <h2>2. Mouse Events</h2>
          <p className="explanation">onMouseMove, onMouseEnter, onMouseLeave</p>
          <div className="demo">
            <div 
              className={`mouse-area ${isHovering ? 'hovering' : ''}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {isHovering ? "🎯 Hovering!" : "👆 Hover over me!"}
            </div>
            <div className="mouse-tracker" onMouseMove={handleMouseMove}>
              <p>Move mouse here</p>
              <p className="coordinates">X: {mousePosition.x}, Y: {mousePosition.y}</p>
            </div>
          </div>
        </div>

        {/* Example 3: Input Events */}
        <div className="example-box">
          <h2>3. Input Events</h2>
          <p className="explanation">onChange, onFocus, onBlur</p>
          <div className="demo">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder="Type something..."
            />
            <p className="output">You typed: {inputValue}</p>
          </div>
        </div>

        {/* Example 4: Keyboard Events */}
        <div className="example-box">
          <h2>4. Keyboard Events</h2>
          <p className="explanation">onKeyDown, onKeyPress</p>
          <div className="demo">
            <input
              type="text"
              onKeyDown={handleKeyDown}
              onKeyPress={handleKeyPress}
              placeholder="Press any key..."
            />
            <p className="output">Last key pressed: {keyPressed || "None"}</p>
          </div>
        </div>

        {/* Example 5: Form Events */}
        <div className="example-box">
          <h2>5. Form Events</h2>
          <p className="explanation">onSubmit, onReset</p>
          <div className="demo">
            <form onSubmit={handleSubmit} onReset={handleReset}>
              <input
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                placeholder="Name"
                required
              />
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleFormChange}
                placeholder="Email"
                required
              />
              <div className="button-group">
                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
              </div>
            </form>
            {submitted && <p className="success">✅ Form Submitted!</p>}
          </div>
        </div>

        {/* Example 6: Passing Arguments */}
        <div className="example-box">
          <h2>6. Passing Arguments to Handlers</h2>
          <p className="explanation">Using arrow functions to pass parameters</p>
          <div className="demo">
            <button onClick={() => handleButtonClick("First")}>Button 1</button>
            <button onClick={() => handleButtonClick("Second")}>Button 2</button>
            <button onClick={() => handleButtonClick("Third")}>Button 3</button>
          </div>
        </div>

        {/* Example 7: Preventing Default */}
        <div className="example-box">
          <h2>7. Preventing Default Behavior</h2>
          <p className="explanation">event.preventDefault()</p>
          <div className="demo">
            <a href="https://react.dev" onClick={handleLinkClick}>
              Click this link (default prevented)
            </a>
          </div>
        </div>

        {/* Example 8: Event Bubbling */}
        <div className="example-box">
          <h2>8. Event Bubbling & Propagation</h2>
          <p className="explanation">event.stopPropagation()</p>
          <div className="demo">
            <div className="parent-box" onClick={handleParentClick}>
              <p>Parent (click me)</p>
              <button onClick={handleChildClick}>
                Child (stops bubbling)
              </button>
            </div>
          </div>
        </div>

        {/* Event Types Reference */}
        <div className="reference-box">
          <h3>📚 Common React Events</h3>
          <div className="events-grid">
            <div className="event-category">
              <h4>🖱️ Mouse</h4>
              <ul>
                <li>onClick</li>
                <li>onDoubleClick</li>
                <li>onMouseEnter</li>
                <li>onMouseLeave</li>
                <li>onMouseMove</li>
              </ul>
            </div>
            <div className="event-category">
              <h4>⌨️ Keyboard</h4>
              <ul>
                <li>onKeyDown</li>
                <li>onKeyUp</li>
                <li>onKeyPress</li>
              </ul>
            </div>
            <div className="event-category">
              <h4>📝 Form</h4>
              <ul>
                <li>onChange</li>
                <li>onSubmit</li>
                <li>onFocus</li>
                <li>onBlur</li>
                <li>onReset</li>
              </ul>
            </div>
            <div className="event-category">
              <h4>🎯 Other</h4>
              <ul>
                <li>onScroll</li>
                <li>onCopy</li>
                <li>onPaste</li>
                <li>onDrag</li>
                <li>onDrop</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="tips-box">
          <h3>💡 Key Points About React Events</h3>
          <ul>
            <li>✅ React events are named using <strong>camelCase</strong> (onClick, not onclick)</li>
            <li>✅ Pass a <strong>function</strong> as the event handler, not a string</li>
            <li>✅ Use <code>event.preventDefault()</code> to prevent default behavior</li>
            <li>✅ Use <code>event.stopPropagation()</code> to stop event bubbling</li>
            <li>✅ React events are <strong>synthetic events</strong> (cross-browser compatible)</li>
            <li>✅ Use arrow functions to pass arguments: <code>onClick={'() => handleClick(arg)'}</code></li>
          </ul>
        </div>
      </main>
    </div>
  )
}

export default App








