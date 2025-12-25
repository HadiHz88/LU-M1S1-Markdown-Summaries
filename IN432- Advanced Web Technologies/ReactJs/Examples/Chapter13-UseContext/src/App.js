import React, { useState, createContext, useContext } from 'react'
import './App.css'

// Chapter 13: useContext Hook Examples

// Example 1: Basic Context
const UserContext = createContext();

function Example1() {
  const [user, setUser] = useState("John Doe");

  return (
    <div className="demo-box">
      <h3>1. Basic Context</h3>
      <UserContext.Provider value={user}>
        <div className="context-tree">
          <div>App Component (Provider)</div>
          <Level1 />
        </div>
      </UserContext.Provider>
    </div>
  );
}

function Level1() {
  return (
    <div className="level">
      <div>Level 1 (no props needed)</div>
      <Level2 />
    </div>
  );
}

function Level2() {
  return (
    <div className="level">
      <div>Level 2 (no props needed)</div>
      <Level3 />
    </div>
  );
}

function Level3() {
  const user = useContext(UserContext);
  return (
    <div className="level">
      <div>Level 3: Hello, {user}!</div>
    </div>
  );
}

// Example 2: Theme Context
const ThemeContext = createContext();

function Example2() {
  const [theme, setTheme] = useState("light");

  return (
    <div className="demo-box">
      <h3>2. Theme Context</h3>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <ThemedComponent />
      </ThemeContext.Provider>
    </div>
  );
}

function ThemedComponent() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={`themed-box ${theme}`}>
      <p>Current Theme: {theme}</p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
}

// Example 3: Multiple Values Context
const AppContext = createContext();

function Example3() {
  const [user, setUser] = useState("Alice");
  const [count, setCount] = useState(0);

  const value = {
    user,
    setUser,
    count,
    setCount
  };

  return (
    <div className="demo-box">
      <h3>3. Multiple Values</h3>
      <AppContext.Provider value={value}>
        <MultipleValuesComponent />
      </AppContext.Provider>
    </div>
  );
}

function MultipleValuesComponent() {
  const { user, count, setCount } = useContext(AppContext);

  return (
    <div className="multi-values">
      <p>User: {user}</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// Example 4: Auth Context with Custom Hook
const AuthContext = createContext();

function useAuth() {
  return useContext(AuthContext);
}

function Example4() {
  const [user, setUser] = useState(null);

  const login = (username) => {
    setUser({ username });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <div className="demo-box">
      <h3>4. Auth Context + Custom Hook</h3>
      <AuthContext.Provider value={{ user, login, logout }}>
        <AuthComponent />
      </AuthContext.Provider>
    </div>
  );
}

function AuthComponent() {
  const { user, login, logout } = useAuth();

  return (
    <div className="auth-box">
      {user ? (
        <>
          <p>✅ Welcome, {user.username}!</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <p>❌ Not logged in</p>
          <button onClick={() => login("John")}>Login as John</button>
        </>
      )}
    </div>
  );
}

// Example 5: Shopping Cart Context
const CartContext = createContext();

function Example5() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  return (
    <div className="demo-box">
      <h3>5. Shopping Cart Context</h3>
      <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
        <Cart />
      </CartContext.Provider>
    </div>
  );
}

function Cart() {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart">
      <div className="cart-items">
        <strong>Cart ({cartItems.length}):</strong>
        {cartItems.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item}
                <button onClick={() => removeFromCart(index)}>❌</button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="products">
        <strong>Products:</strong>
        <button onClick={() => addToCart("Product 1")}>Add Product 1</button>
        <button onClick={() => addToCart("Product 2")}>Add Product 2</button>
        <button onClick={() => addToCart("Product 3")}>Add Product 3</button>
      </div>
    </div>
  );
}

// Example 6: Settings Context
const SettingsContext = createContext();

function Example6() {
  const [settings, setSettings] = useState({
    fontSize: "medium",
    language: "en",
    notifications: true
  });

  const updateSetting = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="demo-box">
      <h3>6. Settings Context</h3>
      <SettingsContext.Provider value={{ settings, updateSetting }}>
        <Settings />
      </SettingsContext.Provider>
    </div>
  );
}

function Settings() {
  const { settings, updateSetting } = useContext(SettingsContext);

  return (
    <div className="settings">
      <div className="setting-item">
        <label>Font Size:</label>
        <select 
          value={settings.fontSize}
          onChange={(e) => updateSetting("fontSize", e.target.value)}
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>

      <div className="setting-item">
        <label>Language:</label>
        <select 
          value={settings.language}
          onChange={(e) => updateSetting("language", e.target.value)}
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
        </select>
      </div>

      <div className="setting-item">
        <label>
          <input 
            type="checkbox"
            checked={settings.notifications}
            onChange={(e) => updateSetting("notifications", e.target.checked)}
          />
          Notifications
        </label>
      </div>

      <div className="settings-display">
        <pre>{JSON.stringify(settings, null, 2)}</pre>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>🌐 Chapter 13: useContext Hook</h1>
        <p>Global State Management</p>
      </header>

      <main className="content">
        <div className="info-banner">
          <h2>💡 What is useContext?</h2>
          <p>useContext allows you to share state globally without prop drilling. Perfect for themes, auth, settings, and more!</p>
        </div>

        <div className="examples-grid">
          <Example1 />
          <Example2 />
          <Example3 />
          <Example4 />
          <Example5 />
          <Example6 />
        </div>

        <div className="tips-box">
          <h3>✨ When to Use Context:</h3>
          <ul>
            <li>Theme (dark/light mode)</li>
            <li>User authentication</li>
            <li>Language/localization</li>
            <li>Shopping cart</li>
            <li>Global settings</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App


