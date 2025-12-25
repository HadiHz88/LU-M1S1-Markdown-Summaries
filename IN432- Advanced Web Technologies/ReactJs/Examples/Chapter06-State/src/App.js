import React, { useState } from 'react';
import './App.css';

// Chapter 6: State Examples

// Example 1: Simple Counter
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="demo-card">
      <h3>Simple Counter</h3>
      <p className="big-number">{count}</p>
      <div className="button-group">
        <button onClick={() => setCount(count + 1)}>➕ Increment</button>
        <button onClick={() => setCount(count - 1)}>➖ Decrement</button>
        <button onClick={() => setCount(0)}>🔄 Reset</button>
      </div>
    </div>
  );
}

// Example 2: Text Input
function TextInput() {
  const [text, setText] = useState("");

  return (
    <div className="demo-card">
      <h3>Text Input with State</h3>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
        className="text-input"
      />
      <p>You typed: <strong>{text}</strong></p>
      <p>Length: {text.length} characters</p>
    </div>
  );
}

// Example 3: Toggle Button
function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="demo-card">
      <h3>Toggle Button</h3>
      <div className={`light ${isOn ? 'on' : 'off'}`}>
        {isOn ? '💡 ON' : '⚫ OFF'}
      </div>
      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? 'Turn OFF' : 'Turn ON'}
      </button>
    </div>
  );
}

// Example 4: Multiple State Variables
function UserProfile() {
  const [name, setName] = useState("John Doe");
  const [age, setAge] = useState(25);
  const [email, setEmail] = useState("john@example.com");

  return (
    <div className="demo-card">
      <h3>Multiple State Variables</h3>
      <div className="form-group">
        <label>Name:</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Age:</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="profile-display">
        <h4>Profile:</h4>
        <p>👤 {name}</p>
        <p>🎂 {age} years old</p>
        <p>📧 {email}</p>
      </div>
    </div>
  );
}

// Example 5: State with Objects
function CarInfo() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: 1964,
    color: "red"
  });

  const updateColor = (newColor) => {
    setCar(prevCar => ({ ...prevCar, color: newColor }));
  };

  return (
    <div className="demo-card">
      <h3>State with Objects</h3>
      <p>🚗 {car.color} {car.brand} {car.model} ({car.year})</p>
      <div className="button-group">
        <button onClick={() => updateColor("blue")} style={{backgroundColor: "blue"}}>
          Blue
        </button>
        <button onClick={() => updateColor("red")} style={{backgroundColor: "red"}}>
          Red
        </button>
        <button onClick={() => updateColor("green")} style={{backgroundColor: "green"}}>
          Green
        </button>
      </div>
    </div>
  );
}

// Example 6: Todo List (State with Arrays)
function TodoList() {
  const [todos, setTodos] = useState(["Learn React", "Build a project"]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="demo-card">
      <h3>Todo List (Arrays in State)</h3>
      <div className="todo-input">
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a todo..."
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
        />
        <button onClick={addTodo}>➕ Add</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>❌</button>
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
        <h1>⚛️ Chapter 6: React State</h1>
        <p>Managing component data with useState</p>
      </header>

      <main className="content">
        <div className="info-banner">
          <h2>🎯 What is State?</h2>
          <p>State is data that changes over time in your component. When state changes, React re-renders the component!</p>
        </div>

        <div className="examples-grid">
          <Counter />
          <TextInput />
          <ToggleButton />
          <UserProfile />
          <CarInfo />
          <TodoList />
        </div>

        <div className="tips-box">
          <h3>💡 Key Points:</h3>
          <ul>
            <li>State is created with <code>useState</code></li>
            <li>State changes trigger re-renders</li>
            <li>Never modify state directly - always use the setter function</li>
            <li>For objects/arrays, use spread operator to update</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;

