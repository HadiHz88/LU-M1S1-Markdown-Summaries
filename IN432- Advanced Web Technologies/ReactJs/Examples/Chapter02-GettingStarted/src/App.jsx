import React from 'react'
import './App.css'

// This is your first React component!
// A component is a JavaScript function that returns JSX (HTML-like syntax)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🎉 Welcome to React!</h1>
        <p className="subtitle">This is your first React application with Vite</p>
        <p className="chapter-title">Chapter 2: Getting Started</p>
        
        <div className="info-box">
          <h2>✨ What you're seeing:</h2>
          <ul>
            <li>✅ A React component (the App function)</li>
            <li>✅ JSX syntax (HTML-like code in JavaScript)</li>
            <li>✅ CSS styling from App.css</li>
            <li>✅ Hot Module Replacement (HMR) - try editing this file!</li>
            <li>✅ Lightning-fast Vite development server ⚡</li>
          </ul>
        </div>

        <div className="task-box">
          <h3>🎯 Try This:</h3>
          <ol>
            <li>Edit the text above and save the file</li>
            <li>Watch the browser update automatically with HMR!</li>
            <li>Open the browser console (F12) to see any logs</li>
            <li>Try changing colors in App.css</li>
          </ol>
        </div>

        <div className="demo-section">
          <h3>🚀 Why Vite?</h3>
          <div className="vite-features">
            <div className="feature">
              <span className="emoji">⚡</span>
              <p>Instant server start</p>
            </div>
            <div className="feature">
              <span className="emoji">🔥</span>
              <p>Lightning fast HMR</p>
            </div>
            <div className="feature">
              <span className="emoji">📦</span>
              <p>Optimized builds</p>
            </div>
          </div>
        </div>

        <div className="next-steps">
          <h3>📚 Next Steps:</h3>
          <p>Continue to Chapter 3 to learn about JSX in depth!</p>
        </div>
      </header>
    </div>
  )
}

export default App








