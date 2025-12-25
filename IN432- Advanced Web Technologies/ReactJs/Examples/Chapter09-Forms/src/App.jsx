import React, { useState } from 'react'
import './App.css'

// Chapter 9: React Forms - Comprehensive Examples

// Example 1: Simple Text Input
function SimpleInput() {
  const [name, setName] = useState("")
  
  return (
    <div className="form-demo">
      <h3>1. Simple Text Input</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p className="output">Hello, {name || "stranger"}! 👋</p>
    </div>
  )
}

// Example 2: Multiple Inputs
function MultipleInputs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: ""
  })
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  return (
    <div className="form-demo">
      <h3>2. Multiple Inputs</h3>
      <input
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Last Name"
      />
      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <div className="output">
        <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
        <p><strong>Email:</strong> {formData.email}</p>
      </div>
    </div>
  )
}

// Example 3: Checkbox
function CheckboxExample() {
  const [agreed, setAgreed] = useState(false)
  const [newsletter, setNewsletter] = useState(false)
  
  return (
    <div className="form-demo">
      <h3>3. Checkboxes</h3>
      <label className="checkbox-label">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
        />
        I agree to the terms and conditions
      </label>
      <label className="checkbox-label">
        <input
          type="checkbox"
          checked={newsletter}
          onChange={(e) => setNewsletter(e.target.checked)}
        />
        Subscribe to newsletter
      </label>
      <div className="output">
        <p>{agreed ? "✅ Agreed to terms" : "⬜ Not agreed"}</p>
        <p>{newsletter ? "✅ Subscribed" : "⬜ Not subscribed"}</p>
      </div>
    </div>
  )
}

// Example 4: Radio Buttons
function RadioExample() {
  const [selectedColor, setSelectedColor] = useState("blue")
  
  const colors = ["Red", "Green", "Blue", "Yellow", "Purple"]
  
  return (
    <div className="form-demo">
      <h3>4. Radio Buttons</h3>
      <div className="radio-group">
        {colors.map(color => (
          <label key={color}>
            <input
              type="radio"
              value={color.toLowerCase()}
              checked={selectedColor === color.toLowerCase()}
              onChange={(e) => setSelectedColor(e.target.value)}
            />
            {color}
          </label>
        ))}
      </div>
      <p className="output" style={{ color: selectedColor }}>
        Selected: {selectedColor} 🎨
      </p>
    </div>
  )
}

// Example 5: Select Dropdown
function SelectExample() {
  const [country, setCountry] = useState("USA")
  
  return (
    <div className="form-demo">
      <h3>5. Select Dropdown</h3>
      <select value={country} onChange={(e) => setCountry(e.target.value)}>
        <option value="USA">🇺🇸 USA</option>
        <option value="Canada">🇨🇦 Canada</option>
        <option value="UK">🇬🇧 UK</option>
        <option value="Australia">🇦🇺 Australia</option>
        <option value="Germany">🇩🇪 Germany</option>
        <option value="France">🇫🇷 France</option>
      </select>
      <p className="output">Selected Country: {country}</p>
    </div>
  )
}

// Example 6: Textarea
function TextareaExample() {
  const [message, setMessage] = useState("")
  const maxLength = 200
  
  return (
    <div className="form-demo">
      <h3>6. Textarea</h3>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter your message..."
        rows="4"
        maxLength={maxLength}
      />
      <p className="output">
        Character count: {message.length} / {maxLength}
        {message.length >= maxLength && " (Maximum reached!)"}
      </p>
    </div>
  )
}

// Example 7: Form Submission
function FormSubmission() {
  const [formData, setFormData] = useState({ name: "", email: "" })
  const [submitted, setSubmitted] = useState(false)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  return (
    <div className="form-demo">
      <h3>7. Form Submission</h3>
      {submitted ? (
        <div className="success-message">
          <p>✅ Form Submitted Successfully!</p>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  )
}

// Example 8: Form Validation
function FormValidation() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({})
  
  const validate = () => {
    const newErrors = {}
    
    if (!email.includes("@")) {
      newErrors.email = "Invalid email address"
    }
    
    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      alert("Form is valid! ✅")
      setEmail("")
      setPassword("")
      setErrors({})
    }
  }
  
  return (
    <div className="form-demo">
      <h3>8. Form Validation</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <p className="error-text">❌ {errors.email}</p>}
        </div>
        
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className={errors.password ? 'error' : ''}
          />
          {errors.password && <p className="error-text">❌ {errors.password}</p>}
        </div>
        
        <button type="submit">Validate & Submit</button>
      </form>
    </div>
  )
}

// Complete Registration Form
function CompleteForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    country: "USA",
    agreeTerms: false,
    newsletter: false
  })
  
  const [submitted, setSubmitted] = useState(false)
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }
  
  const handleReset = () => {
    setFormData({
      username: "",
      email: "",
      password: "",
      country: "USA",
      agreeTerms: false,
      newsletter: false
    })
    setSubmitted(false)
  }
  
  if (submitted) {
    return (
      <div className="form-demo complete-form">
        <h3>✅ Registration Complete!</h3>
        <div className="summary">
          <p><strong>Username:</strong> {formData.username}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Country:</strong> {formData.country}</p>
          <p><strong>Newsletter:</strong> {formData.newsletter ? "Yes" : "No"}</p>
        </div>
        <button onClick={handleReset}>Register Another</button>
      </div>
    )
  }
  
  return (
    <div className="form-demo complete-form">
      <h3>9. Complete Registration Form</h3>
      <form onSubmit={handleSubmit} className="registration-form">
        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
          required
        />
        
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password (min 6 chars)"
          required
          minLength={6}
        />
        
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
        >
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="UK">UK</option>
          <option value="Other">Other</option>
        </select>
        
        <label className="checkbox-label">
          <input
            name="agreeTerms"
            type="checkbox"
            checked={formData.agreeTerms}
            onChange={handleChange}
            required
          />
          I agree to terms and conditions *
        </label>
        
        <label className="checkbox-label">
          <input
            name="newsletter"
            type="checkbox"
            checked={formData.newsletter}
            onChange={handleChange}
          />
          Subscribe to newsletter
        </label>
        
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>📝 Chapter 9: React Forms</h1>
        <p>Controlled Components & Form Handling</p>
      </header>
      
      <main className="content">
        <div className="info-banner">
          <h2>🎯 What are Controlled Components?</h2>
          <p>In React, form inputs whose values are controlled by React state are called "controlled components".</p>
          <p>The React state becomes the "single source of truth" for the input value.</p>
        </div>
        
        <div className="examples-grid">
          <SimpleInput />
          <MultipleInputs />
          <CheckboxExample />
          <RadioExample />
          <SelectExample />
          <TextareaExample />
          <FormSubmission />
          <FormValidation />
        </div>
        
        <div className="full-width">
          <CompleteForm />
        </div>
        
        <div className="tips-box">
          <h3>💡 Form Best Practices</h3>
          <ul>
            <li>✅ Always use <code>value</code> and <code>onChange</code> for controlled inputs</li>
            <li>✅ Use <code>event.preventDefault()</code> in form submit handlers</li>
            <li>✅ Use <code>checked</code> prop for checkboxes and radio buttons</li>
            <li>✅ Validate input before submission</li>
            <li>✅ Provide clear, helpful error messages to users</li>
            <li>✅ Use appropriate input types (email, password, number, etc.)</li>
            <li>✅ Consider accessibility - use labels and ARIA attributes</li>
          </ul>
        </div>
      </main>
    </div>
  )
}

export default App








