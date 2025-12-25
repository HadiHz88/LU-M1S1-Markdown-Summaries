import React, { useState, useEffect } from 'react'
import './App.css'

// Chapter 12: useEffect Hook Examples

// Example 1: Run on Every Render
function EveryRender() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Effect runs on every render');
  });

  return (
    <div className="demo-box">
      <h3>1. Run on Every Render</h3>
      <p className="code">useEffect(() => {'{...}'})</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p className="note">Check console - effect runs every time!</p>
    </div>
  );
}

// Example 2: Run Once (On Mount)
function RunOnce() {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log('This runs only once!');
    setTimeout(() => {
      setData('Data loaded!');
    }, 1000);
  }, []); // Empty dependency array

  return (
    <div className="demo-box">
      <h3>2. Run Once (On Mount)</h3>
      <p className="code">useEffect(() => {'{...}'}, [])</p>
      <p>{data || 'Loading...'}</p>
    </div>
  );
}

// Example 3: Run When Dependency Changes
function DependencyExample() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(count * 2);
    console.log(`Count changed to: ${count}`);
  }, [count]); // Only runs when count changes

  return (
    <div className="demo-box">
      <h3>3. Dependency Array</h3>
      <p className="code">useEffect(() => {'{...}'}, [count])</p>
      <p>Count: {count}</p>
      <p>Calculation (count × 2): {calculation}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

// Example 4: Cleanup Function
function CleanupExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(count + 1);
    }, 1000);

    // Cleanup function
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div className="demo-box">
      <h3>4. Cleanup Function</h3>
      <p className="code">return () => cleanup()</p>
      <p>Auto-incrementing: {count}</p>
      <p className="note">Timer is cleaned up on each re-render</p>
    </div>
  );
}

// Example 5: Fetch Data
function FetchExample() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating API call
    setTimeout(() => {
      setUsers([
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'Bob Johnson' }
      ]);
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="demo-box">
      <h3>5. Fetching Data</h3>
      <p className="code">fetch API on mount</p>
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Example 6: Document Title Update
function TitleExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div className="demo-box">
      <h3>6. Update Document Title</h3>
      <p className="code">document.title = ...</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <p className="note">Check browser tab title!</p>
    </div>
  );
}

// Example 7: Event Listeners
function EventListenerExample() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="demo-box">
      <h3>7. Event Listeners</h3>
      <p className="code">addEventListener + cleanup</p>
      <p>Window Width: {windowWidth}px</p>
      <p className="note">Resize window to see changes</p>
    </div>
  );
}

// Example 8: Multiple useEffect Hooks
function MultipleEffects() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // Effect 1: For count
  useEffect(() => {
    console.log(`Count changed: ${count}`);
  }, [count]);

  // Effect 2: For text
  useEffect(() => {
    console.log(`Text changed: ${text}`);
  }, [text]);

  // Effect 3: On mount only
  useEffect(() => {
    console.log('Component mounted');
  }, []);

  return (
    <div className="demo-box">
      <h3>8. Multiple useEffect</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p className="note">Check console for all effects</p>
    </div>
  );
}

// Example 9: Local Storage Sync
function LocalStorageExample() {
  const [name, setName] = useState(() => {
    return localStorage.getItem('name') || '';
  });

  useEffect(() => {
    localStorage.setItem('name', name);
  }, [name]);

  return (
    <div className="demo-box">
      <h3>9. Local Storage Sync</h3>
      <p className="code">localStorage sync</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p>Stored: {name}</p>
      <p className="note">Refresh page - value persists!</p>
    </div>
  );
}

function App() {
  const [showCleanup, setShowCleanup] = useState(true);

  return (
    <div className="App">
      <header className="header">
        <h1>⚡ Chapter 12: useEffect Hook</h1>
        <p>Managing Side Effects in React</p>
      </header>

      <main className="content">
        <div className="info-banner">
          <h2>💡 What is useEffect?</h2>
          <p>useEffect lets you perform side effects in function components: fetching data, subscriptions, timers, and manual DOM changes.</p>
        </div>

        <div className="examples-grid">
          <EveryRender />
          <RunOnce />
          <DependencyExample />
          {showCleanup && <CleanupExample />}
          <FetchExample />
          <TitleExample />
          <EventListenerExample />
          <MultipleEffects />
          <LocalStorageExample />
        </div>

        <div className="control-box">
          <button onClick={() => setShowCleanup(!showCleanup)}>
            {showCleanup ? 'Hide' : 'Show'} Cleanup Example
          </button>
          <p>Toggle to see cleanup in action!</p>
        </div>

        <div className="tips-box">
          <h3>📋 Dependency Array Rules:</h3>
          <ul>
            <li><strong>No array:</strong> Runs after every render</li>
            <li><strong>Empty []:</strong> Runs once (on mount)</li>
            <li><strong>[var1, var2]:</strong> Runs when dependencies change</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App


