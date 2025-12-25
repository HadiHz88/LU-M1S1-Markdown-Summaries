import React from 'react'
import './App.css'

// Chapter 5: Props Examples

// Example 1: Simple props
function Welcome(props) {
  return <h2>Hello, {props.name}! 👋</h2>
}

// Example 2: Multiple props
function Car(props) {
  return (
    <div className="car-info">
      <h3>🚗 {props.brand} {props.model}</h3>
      <p><strong>Year:</strong> {props.year}</p>
      <p><strong>Color:</strong> {props.color}</p>
      <p><strong>Price:</strong> ${props.price?.toLocaleString() || 'N/A'}</p>
    </div>
  )
}

// Example 3: Props with destructuring
function Person({ name, age, job, country }) {
  return (
    <div className="person-card">
      <h3>👤 {name}</h3>
      <p><strong>Age:</strong> {age} years old</p>
      <p><strong>Job:</strong> {job}</p>
      <p><strong>Country:</strong> {country}</p>
    </div>
  )
}

// Example 4: Props with default values
function Greeting({ name = "Guest", greeting = "Welcome" }) {
  return (
    <p className="greeting">
      {greeting}, {name}! 🎉
    </p>
  )
}

// Example 5: Passing objects as props
function UserProfile({ user }) {
  return (
    <div className="profile-card">
      <h3>📋 {user.name}</h3>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Location:</strong> {user.location}</p>
      <p><strong>Member Since:</strong> {user.joinDate}</p>
    </div>
  )
}

// Example 6: Props with children
function Card({ title, color, children }) {
  return (
    <div className="card" style={{ borderColor: color }}>
      <h3 className="card-title">{title}</h3>
      <div className="card-content">
        {children}
      </div>
    </div>
  )
}

// Example 7: Passing functions as props
function Button({ text, onClick, color, icon }) {
  return (
    <button 
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="custom-button"
    >
      {icon && <span>{icon}</span>}
      {text}
    </button>
  )
}

function App() {
  // Data for examples
  const userData = {
    name: "Sarah Johnson",
    email: "sarah@example.com",
    location: "New York, USA",
    joinDate: "January 2024"
  }

  const handleClick = (message) => {
    alert(message)
  }

  return (
    <div className="App">
      <header className="header">
        <h1>⚛️ Chapter 5: React Props</h1>
        <p className="subtitle">Passing Data Between Components</p>
      </header>

      <main className="content">
        <div className="intro-box">
          <h2>🎯 What are Props?</h2>
          <p>Props (short for "properties") are arguments passed into React components.</p>
          <p>Props are passed to components via HTML attributes and allow you to pass data from parent to child components.</p>
        </div>

        <div className="example-box">
          <h2>Example 1: Simple Props</h2>
          <p className="explanation">Pass a single prop to customize the component</p>
          <Welcome name="John" />
          <Welcome name="Mary" />
          <Welcome name="Alex" />
        </div>

        <div className="example-box">
          <h2>Example 2: Multiple Props</h2>
          <p className="explanation">Pass multiple props to provide more data</p>
          <div className="cars-grid">
            <Car brand="Ford" model="Mustang" year={1964} color="red" price={35000} />
            <Car brand="Tesla" model="Model 3" year={2023} color="blue" price={45000} />
            <Car brand="BMW" model="M3" year={2024} color="black" price={70000} />
          </div>
        </div>

        <div className="example-box">
          <h2>Example 3: Props Destructuring</h2>
          <p className="explanation">Destructure props for cleaner code</p>
          <div className="people-grid">
            <Person name="Alice Smith" age={28} job="Developer" country="USA" />
            <Person name="Bob Jones" age={35} job="Designer" country="Canada" />
            <Person name="Carol White" age={42} job="Manager" country="UK" />
          </div>
        </div>

        <div className="example-box">
          <h2>Example 4: Default Props</h2>
          <p className="explanation">Provide default values for props</p>
          <Greeting name="Charlie" />
          <Greeting />
          <Greeting name="David" greeting="Hello" />
          <Greeting greeting="Hi" />
        </div>

        <div className="example-box">
          <h2>Example 5: Object Props</h2>
          <p className="explanation">Pass entire objects as props</p>
          <UserProfile user={userData} />
        </div>

        <div className="example-box">
          <h2>Example 6: Children Props</h2>
          <p className="explanation">The special 'children' prop allows passing JSX content</p>
          <div className="cards-grid">
            <Card title="Information" color="#3b82f6">
              <p>This is the content inside the card.</p>
              <p>The children prop allows any content!</p>
            </Card>
            
            <Card title="Features" color="#10b981">
              <ul>
                <li>✅ Reusable components</li>
                <li>✅ Flexible layouts</li>
                <li>✅ Clean code</li>
              </ul>
            </Card>

            <Card title="Stats" color="#f59e0b">
              <p><strong>Users:</strong> 10,000+</p>
              <p><strong>Projects:</strong> 500+</p>
              <p><strong>Rating:</strong> ⭐⭐⭐⭐⭐</p>
            </Card>
          </div>
        </div>

        <div className="example-box">
          <h2>Example 7: Function Props</h2>
          <p className="explanation">Pass functions to handle events</p>
          <div className="buttons-container">
            <Button 
              text="Click Me!" 
              onClick={() => handleClick("Button 1 clicked!")} 
              color="#667eea"
              icon="🚀"
            />
            <Button 
              text="Alert!" 
              onClick={() => handleClick("Hello from Button 2!")} 
              color="#764ba2"
              icon="🔔"
            />
            <Button 
              text="Success!" 
              onClick={() => handleClick("Operation successful!")} 
              color="#10b981"
              icon="✅"
            />
          </div>
        </div>

        <div className="info-box">
          <h3>📚 Key Points About Props:</h3>
          <ul>
            <li>✅ Props are <strong>read-only</strong> - never modify them directly!</li>
            <li>✅ Props flow <strong>one-way</strong> from parent to child (top-down)</li>
            <li>✅ Props can be any JavaScript value: strings, numbers, objects, arrays, functions</li>
            <li>✅ Use destructuring for cleaner, more readable code</li>
            <li>✅ The <code>children</code> prop allows passing JSX content between component tags</li>
            <li>✅ Props make components reusable with different data</li>
          </ul>
        </div>
      </main>
    </div>
  )
}

export default App








