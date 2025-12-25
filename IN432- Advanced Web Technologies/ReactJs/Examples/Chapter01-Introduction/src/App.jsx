import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🚀 Chapter 1: Introduction to React</h1>
        <p className="subtitle">Welcome to React with Vite!</p>
      </header>

      <main className="content">
        <section className="info-card">
          <h2>⚡ What is Vite?</h2>
          <p>This project uses <strong>Vite</strong> - a lightning-fast build tool that provides:</p>
          <ul>
            <li>⚡ Instant server start</li>
            <li>🔥 Lightning-fast HMR (Hot Module Replacement)</li>
            <li>📦 Optimized builds</li>
            <li>🎯 Out-of-the-box TypeScript support</li>
          </ul>
        </section>

        <section className="info-card">
          <h2>📚 What is React?</h2>
          <p>React is a JavaScript library for building user interfaces.</p>
          <ul>
            <li><strong>Declarative:</strong> Design simple views for each state</li>
            <li><strong>Component-Based:</strong> Build encapsulated components</li>
            <li><strong>Learn Once, Write Anywhere:</strong> Develop new features without rewriting</li>
          </ul>
        </section>

        <section className="info-card">
          <h2>🎯 Why React?</h2>
          <div className="features-grid">
            <div className="feature">
              <h3>🔄 Reusable Components</h3>
              <p>Build once, use everywhere</p>
            </div>
            <div className="feature">
              <h3>⚡ Fast Performance</h3>
              <p>Virtual DOM optimization</p>
            </div>
            <div className="feature">
              <h3>📱 Cross-Platform</h3>
              <p>Web, mobile, desktop</p>
            </div>
            <div className="feature">
              <h3>🌍 Large Community</h3>
              <p>Tons of resources & libraries</p>
            </div>
          </div>
        </section>

        <section className="info-card">
          <h2>🛠️ Key Concepts</h2>
          <div className="concepts">
            <div className="concept">
              <span className="concept-number">1</span>
              <div>
                <h4>Components</h4>
                <p>Building blocks of React apps</p>
              </div>
            </div>
            <div className="concept">
              <span className="concept-number">2</span>
              <div>
                <h4>JSX</h4>
                <p>JavaScript XML syntax</p>
              </div>
            </div>
            <div className="concept">
              <span className="concept-number">3</span>
              <div>
                <h4>Props</h4>
                <p>Pass data between components</p>
              </div>
            </div>
            <div className="concept">
              <span className="concept-number">4</span>
              <div>
                <h4>State</h4>
                <p>Manage component data</p>
              </div>
            </div>
          </div>
        </section>

        <section className="info-card success">
          <h2>✅ Getting Started with Vite</h2>
          <div className="command-box">
            <code>npm create vite@latest my-app -- --template react</code>
          </div>
          <div className="command-box">
            <code>cd my-app</code>
          </div>
          <div className="command-box">
            <code>npm install</code>
          </div>
          <div className="command-box">
            <code>npm run dev</code>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;












