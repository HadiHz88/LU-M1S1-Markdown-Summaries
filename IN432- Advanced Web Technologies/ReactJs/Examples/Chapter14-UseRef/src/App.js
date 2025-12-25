import React, { useState, useEffect, useRef } from 'react'
import './App.css'

// Chapter 14: useRef Hook Examples

// Example 1: Focus Input
function FocusExample() {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div className="demo-box">
      <h3>1. Focus Input</h3>
      <input ref={inputRef} type="text" placeholder="Click button to focus" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

// Example 2: Render Count
function RenderCount() {
  const [inputValue, setInputValue] = useState('');
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <div className="demo-box">
      <h3>2. Track Render Count</h3>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type to trigger renders..."
      />
      <p>Render Count: {count.current}</p>
      <p className="note">useRef doesn't cause re-renders!</p>
    </div>
  );
}

// Example 3: Previous Value
function PreviousValue() {
  const [count, setCount] = useState(0);
  const prevCount = useRef();

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
    <div className="demo-box">
      <h3>3. Track Previous Value</h3>
      <p>Current: {count}</p>
      <p>Previous: {prevCount.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// Example 4: Timer Control
function TimerControl() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef();

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setSeconds(s => s + 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  const reset = () => {
    setSeconds(0);
    setIsRunning(false);
  };

  return (
    <div className="demo-box">
      <h3>4. Timer with useRef</h3>
      <div className="timer">{seconds}s</div>
      <div className="button-group">
        <button onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

// Example 5: DOM Measurements
function MeasureElement() {
  const divRef = useRef();
  const [dimensions, setDimensions] = useState({});

  const measure = () => {
    if (divRef.current) {
      setDimensions({
        width: divRef.current.offsetWidth,
        height: divRef.current.offsetHeight
      });
    }
  };

  return (
    <div className="demo-box">
      <h3>5. Measure DOM Element</h3>
      <div ref={divRef} className="measure-box">
        Measure me!
      </div>
      <button onClick={measure}>Get Dimensions</button>
      {dimensions.width && (
        <p>Width: {dimensions.width}px, Height: {dimensions.height}px</p>
      )}
    </div>
  );
}

// Example 6: Multiple Refs
function MultipleRefs() {
  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();

  return (
    <div className="demo-box">
      <h3>6. Multiple Refs</h3>
      <div className="input-group">
        <input ref={input1} type="text" placeholder="Input 1" />
        <input ref={input2} type="text" placeholder="Input 2" />
        <input ref={input3} type="text" placeholder="Input 3" />
      </div>
      <div className="button-group">
        <button onClick={() => input1.current.focus()}>Focus 1</button>
        <button onClick={() => input2.current.focus()}>Focus 2</button>
        <button onClick={() => input3.current.focus()}>Focus 3</button>
      </div>
    </div>
  );
}

// Example 7: Scroll to Element
function ScrollExample() {
  const topRef = useRef();
  const bottomRef = useRef();

  const scrollToTop = () => {
    topRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="demo-box">
      <h3>7. Scroll to Element</h3>
      <div className="scroll-container">
        <div ref={topRef} className="scroll-marker">🔝 Top</div>
        <div className="scroll-content">
          <p>Content...</p>
          <p>Content...</p>
          <p>Content...</p>
        </div>
        <div ref={bottomRef} className="scroll-marker">⬇️ Bottom</div>
      </div>
      <div className="button-group">
        <button onClick={scrollToTop}>Scroll to Top</button>
        <button onClick={scrollToBottom}>Scroll to Bottom</button>
      </div>
    </div>
  );
}

// Example 8: Input Value without State
function UncontrolledInput() {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Input value: ${inputRef.current.value}`);
    inputRef.current.value = '';
  };

  return (
    <div className="demo-box">
      <h3>8. Uncontrolled Input</h3>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" placeholder="Uncontrolled input" />
        <button type="submit">Submit</button>
      </form>
      <p className="note">Value not stored in state</p>
    </div>
  );
}

// Example 9: useRef vs useState
function RefVsState() {
  const [stateCount, setStateCount] = useState(0);
  const refCount = useRef(0);

  const incrementState = () => {
    setStateCount(stateCount + 1);
  };

  const incrementRef = () => {
    refCount.current = refCount.current + 1;
    console.log('Ref count:', refCount.current);
  };

  return (
    <div className="demo-box">
      <h3>9. useRef vs useState</h3>
      <div className="comparison">
        <div>
          <strong>useState:</strong>
          <p>Count: {stateCount}</p>
          <button onClick={incrementState}>+</button>
          <p className="note">Triggers re-render</p>
        </div>
        <div>
          <strong>useRef:</strong>
          <p>Count: {refCount.current}</p>
          <button onClick={incrementRef}>+</button>
          <p className="note">No re-render (check console)</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>🎯 Chapter 14: useRef Hook</h1>
        <p>Persisting Values & Accessing DOM</p>
      </header>

      <main className="content">
        <div className="info-banner">
          <h2>💡 What is useRef?</h2>
          <p>useRef lets you persist values between renders without causing re-renders. Perfect for DOM access and storing mutable values!</p>
        </div>

        <div className="examples-grid">
          <FocusExample />
          <RenderCount />
          <PreviousValue />
          <TimerControl />
          <MeasureElement />
          <MultipleRefs />
          <ScrollExample />
          <UncontrolledInput />
          <RefVsState />
        </div>

        <div className="tips-box">
          <h3>🎯 When to Use useRef:</h3>
          <ul>
            <li>Accessing DOM elements</li>
            <li>Storing mutable values without re-renders</li>
            <li>Keeping reference to timers/intervals</li>
            <li>Tracking previous values</li>
            <li>Focus management</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App


