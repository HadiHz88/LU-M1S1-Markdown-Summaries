import React, { useState, useEffect, useRef } from 'react'
import './App.css'

// Chapter 15: Custom Hooks

// Custom Hook 1: useFetch
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      // Simulating API call
      setData({ message: `Data from ${url}` });
      setLoading(false);
    }, 1000);
  }, [url]);

  return { data, loading };
}

function FetchExample() {
  const { data, loading } = useFetch('https://api.example.com/data');

  return (
    <div className="demo-box">
      <h3>1. useFetch Hook</h3>
      <div className="result-box">
        {loading ? <p>Loading...</p> : <p>{data?.message}</p>}
      </div>
    </div>
  );
}

// Custom Hook 2: useLocalStorage
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

function LocalStorageExample() {
  const [name, setName] = useLocalStorage('userName', '');

  return (
    <div className="demo-box">
      <h3>2. useLocalStorage Hook</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p>Stored: {name}</p>
      <p className="note">Refreshes persist!</p>
    </div>
  );
}

// Custom Hook 3: useToggle
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = () => setValue(!value);
  return [value, toggle];
}

function ToggleExample() {
  const [isVisible, toggleVisible] = useToggle(false);

  return (
    <div className="demo-box">
      <h3>3. useToggle Hook</h3>
      <button onClick={toggleVisible}>
        {isVisible ? 'Hide' : 'Show'} Content
      </button>
      {isVisible && (
        <div className="content-box">
          🎉 This content is toggleable!
        </div>
      )}
    </div>
  );
}

// Custom Hook 4: useWindowSize
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

function WindowSizeExample() {
  const { width, height } = useWindowSize();

  return (
    <div className="demo-box">
      <h3>4. useWindowSize Hook</h3>
      <div className="info-grid">
        <div>Width: {width}px</div>
        <div>Height: {height}px</div>
      </div>
      <p className="note">Resize window to see changes</p>
    </div>
  );
}

// Custom Hook 5: useCounter
function useCounter(initialValue = 0, step = 1) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + step);
  const decrement = () => setCount(count - step);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}

function CounterExample() {
  const { count, increment, decrement, reset } = useCounter(0, 5);

  return (
    <div className="demo-box">
      <h3>5. useCounter Hook</h3>
      <div className="counter-display">{count}</div>
      <div className="button-group">
        <button onClick={decrement}>-5</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>+5</button>
      </div>
    </div>
  );
}

// Custom Hook 6: useDebounce
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

function DebounceExample() {
  const [text, setText] = useState('');
  const debouncedText = useDebounce(text, 1000);

  return (
    <div className="demo-box">
      <h3>6. useDebounce Hook</h3>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p>Current: {text}</p>
      <p>Debounced (1s): {debouncedText}</p>
    </div>
  );
}

// Custom Hook 7: usePrevious
function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

function PreviousExample() {
  const [count, setCount] = useState(0);
  const previousCount = usePrevious(count);

  return (
    <div className="demo-box">
      <h3>7. usePrevious Hook</h3>
      <p>Current: {count}</p>
      <p>Previous: {previousCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// Custom Hook 8: useOnlineStatus
function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
}

function OnlineStatusExample() {
  const isOnline = useOnlineStatus();

  return (
    <div className="demo-box">
      <h3>8. useOnlineStatus Hook</h3>
      <div className={`status ${isOnline ? 'online' : 'offline'}`}>
        {isOnline ? '✅ Online' : '❌ Offline'}
      </div>
      <p className="note">Try disconnecting your network</p>
    </div>
  );
}

// Custom Hook 9: useArray
function useArray(initialArray = []) {
  const [array, setArray] = useState(initialArray);

  const push = (element) => setArray([...array, element]);
  const remove = (index) => setArray(array.filter((_, i) => i !== index));
  const clear = () => setArray([]);

  return { array, push, remove, clear };
}

function ArrayExample() {
  const { array, push, remove, clear } = useArray(['Item 1', 'Item 2']);
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input) {
      push(input);
      setInput('');
    }
  };

  return (
    <div className="demo-box">
      <h3>9. useArray Hook</h3>
      <div className="array-controls">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add item..."
        />
        <button onClick={handleAdd}>Add</button>
        <button onClick={clear}>Clear All</button>
      </div>
      <ul className="array-list">
        {array.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => remove(index)}>✕</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>🪝 Chapter 15: Custom Hooks</h1>
        <p>Creating Reusable Logic</p>
      </header>

      <main className="content">
        <div className="info-banner">
          <h2>💡 What are Custom Hooks?</h2>
          <p>Custom Hooks let you extract component logic into reusable functions. They start with "use" and can call other Hooks!</p>
        </div>

        <div className="examples-grid">
          <FetchExample />
          <LocalStorageExample />
          <ToggleExample />
          <WindowSizeExample />
          <CounterExample />
          <DebounceExample />
          <PreviousExample />
          <OnlineStatusExample />
          <ArrayExample />
        </div>

        <div className="tips-box">
          <h3>✨ Custom Hook Rules:</h3>
          <ul>
            <li>Must start with "use" prefix</li>
            <li>Can call other React Hooks</li>
            <li>Share logic, not state</li>
            <li>Keep them focused and reusable</li>
            <li>Follow React Hook rules</li>
          </ul>
        </div>

        <div className="benefits-box">
          <h3>🎯 Benefits:</h3>
          <ul>
            <li>Code reusability</li>
            <li>Better organization</li>
            <li>Easier testing</li>
            <li>Cleaner components</li>
            <li>Share logic across components</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App


