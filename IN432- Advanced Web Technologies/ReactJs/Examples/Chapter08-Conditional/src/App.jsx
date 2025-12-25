import React, { useState } from 'react'
import './App.css'

// Chapter 8: Conditional Rendering - Comprehensive Examples

function App() {
  // State for examples
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userRole, setUserRole] = useState("guest")
  const [hasMessages, setHasMessages] = useState(true)
  const [messageCount, setMessageCount] = useState(5)
  const [loadingState, setLoadingState] = useState("idle") // idle, loading, success, error
  const [showModal, setShowModal] = useState(false)
  const [theme, setTheme] = useState("light")
  const [items, setItems] = useState(["Apple", "Banana", "Orange"])

  // Example 1: if/else Conditional Rendering
  const renderLoginStatus = () => {
    if (isLoggedIn) {
      return <p className="success">✅ You are logged in!</p>
    } else {
      return <p className="error">❌ Please log in</p>
    }
  }

  // Example 2: Ternary Operator Component
  const LoginButton = () => {
    return (
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    )
  }

  // Example 3: Logical && Operator
  const NotificationBadge = () => {
    return (
      <div className="notification-area">
        {hasMessages && <span className="badge">{messageCount}</span>}
        {hasMessages && <p>You have {messageCount} new messages!</p>}
      </div>
    )
  }

  // Example 4: Multiple Conditions (Switch-like)
  const renderUserAccess = () => {
    switch(userRole) {
      case "admin":
        return <div className="access admin">🔑 Admin Access - Full Control</div>
      case "user":
        return <div className="access user">👤 User Access - Limited Control</div>
      case "guest":
        return <div className="access guest">👻 Guest Access - View Only</div>
      default:
        return <div className="access">❓ Unknown Access Level</div>
    }
  }

  // Example 5: Loading States
  const renderLoadingState = () => {
    switch(loadingState) {
      case "loading":
        return <div className="loading">⏳ Loading...</div>
      case "success":
        return <div className="success">✅ Data loaded successfully!</div>
      case "error":
        return <div className="error">❌ Error loading data</div>
      default:
        return <div className="idle">💤 Click a button to load data</div>
    }
  }

  const simulateLoading = () => {
    setLoadingState("loading")
    setTimeout(() => {
      setLoadingState(Math.random() > 0.3 ? "success" : "error")
    }, 2000)
  }

  // Example 6: Conditional Classes
  const getButtonClass = () => {
    return `theme-button ${theme === "dark" ? "dark-mode" : "light-mode"}`
  }

  // Example 7: Null Rendering
  const AlertMessage = ({ show, message }) => {
    if (!show) return null
    return <div className="alert">{message}</div>
  }

  // Example 8: Inline Conditional with Multiple Elements
  const DashboardWidget = () => {
    return (
      <div className="dashboard">
        <h3>Dashboard</h3>
        {isLoggedIn ? (
          <>
            <p>Welcome back!</p>
            <p>Last login: Today</p>
            <button>Go to Profile</button>
          </>
        ) : (
          <>
            <p>Please log in to access the dashboard</p>
            <button onClick={() => setIsLoggedIn(true)}>Login Now</button>
          </>
        )}
      </div>
    )
  }

  return (
    <div className="App">
      <header className="header">
        <h1>🔀 Chapter 8: Conditional Rendering</h1>
        <p>Displaying Content Based on Conditions</p>
      </header>

      <main className="content">
        <div className="intro-box">
          <h2>🎯 What is Conditional Rendering?</h2>
          <p>In React, you can create distinct components that encapsulate behavior you need. Then, you can render only some of them, depending on the state of your application.</p>
        </div>

        {/* Example 1: if/else Statement */}
        <div className="example-box">
          <h2>1. if/else Statement</h2>
          <p className="explanation">Traditional conditional logic in a function</p>
          <div className="demo">
            {renderLoginStatus()}
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
              Toggle Login Status
            </button>
          </div>
        </div>

        {/* Example 2: Ternary Operator */}
        <div className="example-box">
          <h2>2. Ternary Operator (?:)</h2>
          <p className="explanation">Inline conditional rendering</p>
          <div className="demo">
            <p>Status: {isLoggedIn ? "🟢 Online" : "🔴 Offline"}</p>
            <LoginButton />
            <div className={isLoggedIn ? "logged-in-box" : "logged-out-box"}>
              {isLoggedIn ? "Access granted" : "Access denied"}
            </div>
          </div>
        </div>

        {/* Example 3: Logical && Operator */}
        <div className="example-box">
          <h2>3. Logical && Operator</h2>
          <p className="explanation">Render element only if condition is true</p>
          <div className="demo">
            <NotificationBadge />
            <button onClick={() => setHasMessages(!hasMessages)}>
              Toggle Messages
            </button>
            <button onClick={() => setMessageCount(Math.floor(Math.random() * 20))}>
              Random Count
            </button>
          </div>
        </div>

        {/* Example 4: Multiple Conditions (Switch) */}
        <div className="example-box">
          <h2>4. Multiple Conditions (Switch)</h2>
          <p className="explanation">Handle multiple states with switch statement</p>
          <div className="demo">
            {renderUserAccess()}
            <div className="button-group">
              <button onClick={() => setUserRole("admin")}>Set Admin</button>
              <button onClick={() => setUserRole("user")}>Set User</button>
              <button onClick={() => setUserRole("guest")}>Set Guest</button>
            </div>
          </div>
        </div>

        {/* Example 5: Loading States */}
        <div className="example-box">
          <h2>5. Loading States</h2>
          <p className="explanation">Handle async operations with different states</p>
          <div className="demo">
            {renderLoadingState()}
            <div className="button-group">
              <button onClick={simulateLoading}>Simulate Loading</button>
              <button onClick={() => setLoadingState("idle")}>Reset</button>
            </div>
          </div>
        </div>

        {/* Example 6: Conditional CSS Classes */}
        <div className="example-box">
          <h2>6. Conditional CSS Classes</h2>
          <p className="explanation">Apply different styles based on state</p>
          <div className="demo">
            <div className={`theme-box ${theme}`}>
              Current Theme: {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
            </div>
            <button 
              className={getButtonClass()}
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              Toggle Theme
            </button>
          </div>
        </div>

        {/* Example 7: Returning Null */}
        <div className="example-box">
          <h2>7. Returning Null (Hide Component)</h2>
          <p className="explanation">Return null to hide a component completely</p>
          <div className="demo">
            <AlertMessage 
              show={showModal} 
              message="⚠️ This is an important alert!" 
            />
            <button onClick={() => setShowModal(!showModal)}>
              {showModal ? "Hide Alert" : "Show Alert"}
            </button>
          </div>
        </div>

        {/* Example 8: Complex Conditional with Fragments */}
        <div className="example-box">
          <h2>8. Multiple Elements with Ternary</h2>
          <p className="explanation">Use fragments to return multiple elements</p>
          <div className="demo">
            <DashboardWidget />
          </div>
        </div>

        {/* Example 9: Conditional List Rendering */}
        <div className="example-box">
          <h2>9. Conditional List Rendering</h2>
          <p className="explanation">Display different content based on array length</p>
          <div className="demo">
            {items.length > 0 ? (
              <ul className="items-list">
                {items.map((item, index) => (
                  <li key={index}>🍎 {item}</li>
                ))}
              </ul>
            ) : (
              <p className="empty-state">📭 No items to display</p>
            )}
            <div className="button-group">
              <button onClick={() => setItems([...items, `Item ${items.length + 1}`])}>
                Add Item
              </button>
              <button onClick={() => setItems(items.slice(0, -1))}>
                Remove Item
              </button>
              <button onClick={() => setItems([])}>
                Clear All
              </button>
            </div>
          </div>
        </div>

        {/* Example 10: Nested Conditionals */}
        <div className="example-box">
          <h2>10. Nested Conditionals</h2>
          <p className="explanation">Combine multiple conditional checks</p>
          <div className="demo">
            <div className="status-box">
              {isLoggedIn ? (
                userRole === "admin" ? (
                  <p className="admin-status">👑 Logged in as Admin</p>
                ) : (
                  <p className="user-status">👤 Logged in as {userRole}</p>
                )
              ) : (
                <p className="guest-status">👻 Not logged in</p>
              )}
            </div>
          </div>
        </div>

        <div className="tips-box">
          <h3>💡 Best Practices for Conditional Rendering</h3>
          <ul>
            <li>✅ Use <strong>&&</strong> for simple "show if true" conditions</li>
            <li>✅ Use <strong>ternary (?:)</strong> for "show A or B" conditions</li>
            <li>✅ Use <strong>if/else</strong> or <strong>switch</strong> for complex logic (extract to function)</li>
            <li>✅ Return <strong>null</strong> to hide a component completely</li>
            <li>✅ Use <strong>fragments</strong> (&lt;&gt;) to return multiple elements</li>
            <li>✅ Avoid deeply nested ternary operators - extract to functions instead</li>
            <li>✅ Consider extracting complex conditionals into separate components</li>
            <li>⚠️ Be careful with <strong>&&</strong>: <code>count && &lt;Component /&gt;</code> can render 0!</li>
          </ul>
        </div>
      </main>
    </div>
  )
}

export default App








