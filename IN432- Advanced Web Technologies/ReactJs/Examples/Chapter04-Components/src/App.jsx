import React from 'react'
import './App.css'
// Importing components from separate files
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Card from './components/Card.jsx'

// Chapter 4: Components Examples

// Example 1: Simple Function Component
function Welcome() {
  return <h2>👋 Welcome Component</h2>
}

// Example 2: Arrow Function Component
const Greeting = () => {
  return <p>This is an arrow function component</p>
}

// Example 3: Component that returns a fragment
const Info = () => {
  return (
    <>
      <p>Components are the building blocks of React</p>
      <p>They are reusable and independent</p>
      <p>You can compose them together to build complex UIs</p>
    </>
  )
}

// Example 4: Nested Components
function UserProfile() {
  return (
    <div className="profile">
      <h3>User Profile</h3>
      <UserInfo />
      <UserStats />
    </div>
  )
}

function UserInfo() {
  return <p>👤 Name: John Doe | 📧 Email: john@example.com</p>
}

function UserStats() {
  return <p>📝 Posts: 42 | 👥 Followers: 1,234 | ⭐ Rating: 4.8</p>
}

// Main App Component
function App() {
  return (
    <div className="App">
      <Header />
      
      <main className="content">
        <h1>⚛️ Chapter 4: React Components</h1>
        <p className="subtitle">Building Blocks of React Applications</p>

        <div className="example-box">
          <h2>Example 1: Basic Function Component</h2>
          <p className="explanation">The simplest way to define a component</p>
          <Welcome />
        </div>

        <div className="example-box">
          <h2>Example 2: Arrow Function Component</h2>
          <p className="explanation">Modern ES6 syntax for components</p>
          <Greeting />
        </div>

        <div className="example-box">
          <h2>Example 3: Component with Fragment</h2>
          <p className="explanation">Fragments let you group elements without adding extra DOM nodes</p>
          <Info />
        </div>

        <div className="example-box">
          <h2>Example 4: Nested Components</h2>
          <p className="explanation">Components can contain other components</p>
          <UserProfile />
        </div>

        <div className="example-box">
          <h2>Example 5: Reusable Components</h2>
          <p className="explanation">The Card component is used multiple times with the same structure</p>
          <div className="cards-container">
            <Card />
            <Card />
            <Card />
          </div>
        </div>

        <div className="example-box">
          <h2>Example 6: Components from Separate Files</h2>
          <p className="explanation">The Header and Footer are imported from separate files!</p>
          <p>✅ Check the 'components' folder to see Header.jsx, Footer.jsx, and Card.jsx</p>
          <p>✅ This is how you organize larger React applications</p>
        </div>

        <div className="tips-box">
          <h3>💡 Key Concepts:</h3>
          <ul>
            <li><strong>Components</strong> are JavaScript functions that return JSX</li>
            <li><strong>Component names</strong> must start with a capital letter</li>
            <li><strong>Components</strong> can be nested inside other components</li>
            <li><strong>Components</strong> should be reusable and independent</li>
            <li><strong>Props</strong> allow you to pass data to components (next chapter!)</li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App








