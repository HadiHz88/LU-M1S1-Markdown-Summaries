import React from 'react'
import './App.css'

// Chapter 3: JSX Examples

function App() {
  // Example 1: Variables in JSX
  const name = "John"
  const age = 25
  
  // Example 2: Expressions in JSX
  const x = 5
  const y = 10
  
  // Example 3: Object
  const user = {
    firstName: "Jane",
    lastName: "Doe"
  }
  
  // Example 4: Conditional rendering
  const isLoggedIn = true
  
  // Example 5: Array
  const colors = ["Red", "Green", "Blue", "Yellow", "Purple"]

  return (
    <div className="App">
      <header className="App-header">
        <h1>⚛️ Chapter 3: JSX Examples</h1>
        <p className="subtitle">JavaScript XML - The React Way</p>
      </header>

      <main className="content">
        <div className="demo-section">
          <h2>💡 What is JSX?</h2>
          <p>JSX stands for JavaScript XML. It allows us to write HTML elements in JavaScript and place them in the DOM.</p>
        </div>

        {/* Example 1: Using Variables */}
        <div className="demo-section">
          <h2>1. Variables in JSX</h2>
          <div className="example">
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Age:</strong> {age}</p>
            <p><strong>Adult:</strong> {age >= 18 ? "✅ Yes" : "❌ No"}</p>
          </div>
        </div>

        {/* Example 2: Expressions */}
        <div className="demo-section">
          <h2>2. JavaScript Expressions</h2>
          <div className="example">
            <p>{x} + {y} = {x + y}</p>
            <p>{x} × {y} = {x * y}</p>
            <p>React is {5 + 5} times better with JSX!</p>
            <p>Current Time: {new Date().toLocaleTimeString()}</p>
          </div>
        </div>

        {/* Example 3: Objects */}
        <div className="demo-section">
          <h2>3. Using Objects</h2>
          <div className="example">
            <p><strong>First Name:</strong> {user.firstName}</p>
            <p><strong>Last Name:</strong> {user.lastName}</p>
            <p><strong>Full Name:</strong> {user.firstName} {user.lastName}</p>
          </div>
        </div>

        {/* Example 4: Conditional Rendering */}
        <div className="demo-section">
          <h2>4. Conditional Rendering</h2>
          <div className="example">
            <h3>Using && operator:</h3>
            {isLoggedIn && <p className="success">✅ Welcome back, user!</p>}
            {!isLoggedIn && <p className="error">❌ Please log in</p>}
            
            <h3>Using ternary operator:</h3>
            <p className={isLoggedIn ? "success" : "error"}>
              {isLoggedIn ? "🟢 You are logged in" : "🔴 You are logged out"}
            </p>
          </div>
        </div>

        {/* Example 5: className */}
        <div className="demo-section highlight">
          <h2>5. className Attribute</h2>
          <div className="example">
            <p>In JSX, we use <code>className</code> instead of <code>class</code></p>
            <p>This is because <code>class</code> is a reserved keyword in JavaScript</p>
          </div>
        </div>

        {/* Example 6: Self-closing tags */}
        <div className="demo-section">
          <h2>6. Self-Closing Tags</h2>
          <div className="example">
            <p>In JSX, all tags must be closed:</p>
            <input type="text" placeholder="This is self-closing" />
            <br />
            <img src="https://via.placeholder.com/150" alt="Placeholder" />
          </div>
        </div>

        {/* Example 7: Fragments */}
        <div className="demo-section">
          <h2>7. React Fragments</h2>
          <div className="example">
            <>
              <p>These paragraphs are in a Fragment</p>
              <p>Fragments don't add extra DOM nodes!</p>
              <p>Use them to return multiple elements without wrapper divs</p>
            </>
          </div>
        </div>

        {/* Example 8: Mapping Arrays */}
        <div className="demo-section">
          <h2>8. Rendering Lists</h2>
          <div className="example">
            <h3>Colors:</h3>
            <ul>
              {colors.map((color, index) => (
                <li key={index} style={{ color: color.toLowerCase() }}>
                  {color}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Example 9: Inline Styles */}
        <div className="demo-section">
          <h2>9. Inline Styles</h2>
          <div className="example">
            <p style={{
              color: '#ffc107',
              fontSize: '20px',
              fontWeight: 'bold',
              padding: '10px',
              backgroundColor: '#333',
              borderRadius: '5px'
            }}>
              Styled with inline styles!
            </p>
            <p style={{ color: '#4caf50', fontSize: '18px' }}>
              Note: Inline styles use camelCase properties
            </p>
          </div>
        </div>

        {/* Example 10: Comments in JSX */}
        <div className="demo-section">
          <h2>10. Comments in JSX</h2>
          <div className="example">
            {/* This is a comment in JSX */}
            <p>Comments in JSX use curly braces: {'{/* comment */'}</p>
            <p>Regular HTML comments won't work!</p>
          </div>
        </div>

      </main>
    </div>
  )
}

export default App








