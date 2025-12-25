import React, { useState } from 'react';
import './App.css';

// Chapter 8: React Events Examples

// Example 1: Basic onClick
function ClickExample() {
  const [message, setMessage] = useState("Click the button!");
  
  const handleClick = () => {
    setMessage("Button was clicked! 🎉");
  };
  
  return (
    <div className="demo-box">
      <h3>1. onClick Event</h3>
      <p className="message">{message}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

// Example 2: Event with Arguments
function ClickWithArgs() {
  const [message, setMessage] = useState("");
  
  const handleClick = (name) => {
    setMessage(`Hello, ${name}!`);
  };
  
  return (
    <div className="demo-box">
      <h3>2. Event with Arguments</h3>
      <p className="message">{message || "Click a button"}</p>
      <div className="button-group">
        <button onClick={() => handleClick("Alice")}>Alice</button>
        <button onClick={() => handleClick("Bob")}>Bob</button>
        <button onClick={() => handleClick("Charlie")}>Charlie</button>
      </div>
    </div>
  );
}

// Example 3: Event Object
function EventObjectExample() {
  const [eventInfo, setEventInfo] = useState("");
  
  const handleClick = (event) => {
    setEventInfo(`Type: ${event.type}, Button: ${event.button}`);
  };
  
  return (
    <div className="demo-box">
      <h3>3. Event Object</h3>
      <p className="message">{eventInfo || "Click to see event details"}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

// Example 4: onChange Event
function ChangeExample() {
  const [text, setText] = useState("");
  
  return (
    <div className="demo-box">
      <h3>4. onChange Event</h3>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p className="message">You typed: <strong>{text}</strong></p>
      <p>Length: {text.length} characters</p>
    </div>
  );
}

// Example 5: Mouse Events
function MouseEvents() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: Math.round(e.clientX - rect.left),
      y: Math.round(e.clientY - rect.top)
    });
  };
  
  return (
    <div className="demo-box">
      <h3>5. Mouse Events</h3>
      <div 
        className={`mouse-area ${isHovering ? 'hover' : ''}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {isHovering ? "👋 Hover detected!" : "Move mouse here"}
        <p className="coords">X: {position.x}, Y: {position.y}</p>
      </div>
    </div>
  );
}

// Example 6: Keyboard Events
function KeyboardEvents() {
  const [key, setKey] = useState("");
  const [keyCode, setKeyCode] = useState("");
  
  const handleKeyDown = (e) => {
    setKey(e.key);
    setKeyCode(e.code);
  };
  
  return (
    <div className="demo-box">
      <h3>6. Keyboard Events</h3>
      <input
        type="text"
        onKeyDown={handleKeyDown}
        placeholder="Type to see key info..."
      />
      <div className="key-info">
        <p>Key: <strong>{key}</strong></p>
        <p>Code: <strong>{keyCode}</strong></p>
      </div>
    </div>
  );
}

// Example 7: Form Submit Event
function FormSubmitExample() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page refresh
    setSubmitted(true);
  };
  
  return (
    <div className="demo-box">
      <h3>7. Form Submit (preventDefault)</h3>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="success">
          <p>✅ Form submitted!</p>
          <p>Welcome, {name}!</p>
          <button onClick={() => setSubmitted(false)}>Reset</button>
        </div>
      )}
    </div>
  );
}

// Example 8: Multiple Events on One Element
function MultipleEvents() {
  const [events, setEvents] = useState([]);
  
  const addEvent = (eventName) => {
    setEvents(prev => [...prev, `${eventName} at ${new Date().toLocaleTimeString()}`].slice(-5));
  };
  
  return (
    <div className="demo-box">
      <h3>8. Multiple Event Handlers</h3>
      <button
        onClick={() => addEvent("Click")}
        onDoubleClick={() => addEvent("Double Click")}
        onMouseEnter={() => addEvent("Mouse Enter")}
        onMouseLeave={() => addEvent("Mouse Leave")}
        className="multi-event-btn"
      >
        Try Different Actions!
      </button>
      <div className="event-log">
        <h4>Event Log:</h4>
        {events.map((event, index) => (
          <div key={index} className="log-entry">{event}</div>
        ))}
      </div>
    </div>
  );
}

// Example 9: Click Counter
function ClickCounter() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  
  const handleClick = () => {
    const newCount = count + 1;
    setCount(newCount);
    
    if (newCount === 5) setMessage("🎉 5 clicks!");
    else if (newCount === 10) setMessage("🔥 10 clicks!");
    else if (newCount === 20) setMessage("⭐ 20 clicks! Amazing!");
    else setMessage("");
  };
  
  return (
    <div className="demo-box">
      <h3>9. Click Counter with Logic</h3>
      <div className="big-count">{count}</div>
      {message && <p className="achievement">{message}</p>}
      <button onClick={handleClick}>Click Me!</button>
      <button onClick={() => setCount(0)} className="reset">Reset</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>⚡ Chapter 8: React Events</h1>
        <p>Handling User Interactions</p>
      </header>
      
      <main className="content">
        <div className="info-banner">
          <h2>📝 Event Naming Convention</h2>
          <p>React events use <strong>camelCase</strong>: onClick, onChange, onSubmit, onMouseEnter, etc.</p>
        </div>
        
        <div className="examples-grid">
          <ClickExample />
          <ClickWithArgs />
          <EventObjectExample />
          <ChangeExample />
          <MouseEvents />
          <KeyboardEvents />
          <FormSubmitExample />
          <MultipleEvents />
          <ClickCounter />
        </div>
        
        <div className="tips-box">
          <h3>💡 Event Handling Tips</h3>
          <ul>
            <li>Pass function reference: <code>onClick={'{handleClick}'}</code></li>
            <li>Use arrow functions for arguments: <code>onClick={() => handleClick(arg)}</code></li>
            <li>Use <code>event.preventDefault()</code> for forms</li>
            <li>Access event object as first parameter</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;

