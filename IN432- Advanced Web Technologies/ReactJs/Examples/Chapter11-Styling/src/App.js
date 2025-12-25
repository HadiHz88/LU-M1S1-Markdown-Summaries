import React, { useState } from 'react'
import styled from 'styled-components'
import './App.css'
import styles from './Button.module.css'

// Chapter 11: React Styling Methods

// Method 1: Inline Styling
function InlineExample() {
  const headingStyle = {
    color: 'white',
    backgroundColor: '#667eea',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center'
  };

  return (
    <div className="demo-box">
      <h3>1. Inline Styling</h3>
      <div style={headingStyle}>
        Styled with inline styles!
      </div>
      <p style={{ color: '#666', marginTop: '10px' }}>
        Quick and dynamic styling
      </p>
    </div>
  );
}

// Method 2: CSS Stylesheet (App.css)
function CSSExample() {
  return (
    <div className="demo-box">
      <h3>2. CSS Stylesheet</h3>
      <div className="styled-box">
        Styled with external CSS file!
      </div>
      <button className="styled-button">Click Me</button>
    </div>
  );
}

// Method 3: CSS Modules
function CSSModulesExample() {
  return (
    <div className="demo-box">
      <h3>3. CSS Modules</h3>
      <button className={styles.moduleButton}>
        CSS Module Button
      </button>
      <p className={styles.moduleText}>
        Scoped styles with CSS Modules
      </p>
    </div>
  );
}

// Method 4: Styled Components
const StyledContainer = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
`;

const StyledButton = styled.button`
  background-color: ${props => props.primary ? '#28a745' : '#6c757d'};
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

function StyledComponentsExample() {
  return (
    <div className="demo-box">
      <h3>4. Styled Components</h3>
      <StyledContainer>
        Styled with styled-components!
      </StyledContainer>
      <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
        <StyledButton primary>Primary</StyledButton>
        <StyledButton>Secondary</StyledButton>
      </div>
    </div>
  );
}

// Method 5: Conditional Styling
function ConditionalExample() {
  const [isActive, setIsActive] = useState(false);

  const boxStyle = {
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    backgroundColor: isActive ? '#28a745' : '#dc3545',
    color: 'white',
    transition: 'all 0.3s'
  };

  return (
    <div className="demo-box">
      <h3>5. Conditional Styling</h3>
      <div style={boxStyle}>
        Status: {isActive ? 'Active' : 'Inactive'}
      </div>
      <button onClick={() => setIsActive(!isActive)} style={{ marginTop: '15px' }}>
        Toggle Status
      </button>
    </div>
  );
}

// Method 6: Dynamic Classes
function DynamicClassesExample() {
  const [theme, setTheme] = useState('light');

  return (
    <div className="demo-box">
      <h3>6. Dynamic Classes</h3>
      <div className={`theme-box ${theme}`}>
        Current Theme: {theme}
      </div>
      <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
        <button onClick={() => setTheme('light')}>Light</button>
        <button onClick={() => setTheme('dark')}>Dark</button>
      </div>
    </div>
  );
}

// Comparison Component
function ComparisonTable() {
  return (
    <div className="comparison-table">
      <h3>📊 Styling Methods Comparison</h3>
      <table>
        <thead>
          <tr>
            <th>Method</th>
            <th>Pros</th>
            <th>Cons</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Inline</strong></td>
            <td>Quick, Dynamic</td>
            <td>No pseudo-classes</td>
          </tr>
          <tr>
            <td><strong>CSS Files</strong></td>
            <td>Familiar, Full features</td>
            <td>Global scope</td>
          </tr>
          <tr>
            <td><strong>CSS Modules</strong></td>
            <td>Scoped, No conflicts</td>
            <td>Extra syntax</td>
          </tr>
          <tr>
            <td><strong>Styled Components</strong></td>
            <td>Dynamic, Props-based</td>
            <td>Learning curve</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>🎨 Chapter 11: React Styling</h1>
        <p>Exploring Different Styling Methods</p>
      </header>

      <main className="content">
        <div className="info-banner">
          <h2>💡 Multiple Ways to Style</h2>
          <p>React doesn't enforce a specific styling method. Choose what works best for your project!</p>
        </div>

        <div className="examples-grid">
          <InlineExample />
          <CSSExample />
          <CSSModulesExample />
          <StyledComponentsExample />
          <ConditionalExample />
          <DynamicClassesExample />
        </div>

        <ComparisonTable />

        <div className="tips-box">
          <h3>🎯 When to Use Each Method:</h3>
          <ul>
            <li><strong>Inline:</strong> Quick prototypes, dynamic styles</li>
            <li><strong>CSS Files:</strong> Traditional projects, simple apps</li>
            <li><strong>CSS Modules:</strong> Medium to large projects</li>
            <li><strong>Styled Components:</strong> Component libraries, themes</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App


