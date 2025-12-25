import React from 'react';
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import './App.css';

// Chapter 10: React Router Examples

// Layout Component with Navigation
function Layout() {
  return (
    <div className="layout">
      <nav className="navbar">
        <h2>🧭 React Router Demo</h2>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/products">Products</Link>
          <Link to="/blog">Blog</Link>
        </div>
      </nav>
    </div>
  );
}

// Home Page
function Home() {
  const navigate = useNavigate();
  
  return (
    <div className="page">
      <h1>🏠 Home Page</h1>
      <p>Welcome to the React Router tutorial!</p>
      
      <div className="info-card">
        <h3>What You'll Learn:</h3>
        <ul>
          <li>Basic routing with Routes and Route</li>
          <li>Navigation with Link components</li>
          <li>URL parameters</li>
          <li>Programmatic navigation</li>
          <li>Nested routes</li>
        </ul>
      </div>

      <div className="button-group">
        <button onClick={() => navigate('/about')}>Go to About</button>
        <button onClick={() => navigate('/products')}>View Products</button>
      </div>
    </div>
  );
}

// About Page
function About() {
  return (
    <div className="page">
      <h1>ℹ️ About Us</h1>
      <p>This is the About page demonstrating React Router navigation.</p>
      
      <div className="info-card">
        <h3>React Router Features:</h3>
        <p>✅ Client-side routing</p>
        <p>✅ No page refresh</p>
        <p>✅ Fast navigation</p>
        <p>✅ Browser history support</p>
      </div>

      <Link to="/" className="back-link">← Back to Home</Link>
    </div>
  );
}

// Contact Page
function Contact() {
  return (
    <div className="page">
      <h1>📧 Contact Us</h1>
      <div className="contact-form">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message" rows="4"></textarea>
        <button>Send Message</button>
      </div>

      <Link to="/" className="back-link">← Back to Home</Link>
    </div>
  );
}

// Products List
function Products() {
  const products = [
    { id: 1, name: 'Product 1', price: '$99' },
    { id: 2, name: 'Product 2', price: '$149' },
    { id: 3, name: 'Product 3', price: '$199' },
  ];

  return (
    <div className="page">
      <h1>🛍️ Products</h1>
      <div className="products-grid">
        {products.map(product => (
          <Link to={`/products/${product.id}`} key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
            <button>View Details</button>
          </Link>
        ))}
      </div>

      <Link to="/" className="back-link">← Back to Home</Link>
    </div>
  );
}

// Product Detail (URL Parameter Example)
function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const products = {
    1: { name: 'Product 1', price: '$99', description: 'Amazing product with great features!' },
    2: { name: 'Product 2', price: '$149', description: 'Premium quality and excellent value.' },
    3: { name: 'Product 3', price: '$199', description: 'Top-tier product for professionals.' },
  };

  const product = products[id];

  if (!product) {
    return (
      <div className="page">
        <h1>❌ Product Not Found</h1>
        <button onClick={() => navigate('/products')}>Back to Products</button>
      </div>
    );
  }

  return (
    <div className="page">
      <h1>📦 {product.name}</h1>
      <div className="product-detail">
        <p className="price-large">{product.price}</p>
        <p>{product.description}</p>
        <div className="button-group">
          <button onClick={() => navigate('/products')}>← Back to Products</button>
          <button className="primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

// Blog with Nested Routes
function Blog() {
  const posts = [
    { id: 1, title: 'Getting Started with React' },
    { id: 2, title: 'Understanding React Router' },
    { id: 3, title: 'State Management Tips' },
  ];

  return (
    <div className="page">
      <h1>📝 Blog</h1>
      <div className="blog-list">
        {posts.map(post => (
          <Link to={`/blog/${post.id}`} key={post.id} className="blog-item">
            <h3>{post.title}</h3>
            <p>Read more →</p>
          </Link>
        ))}
      </div>

      <Link to="/" className="back-link">← Back to Home</Link>
    </div>
  );
}

// Blog Post Detail
function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();

  const posts = {
    1: {
      title: 'Getting Started with React',
      content: 'React is a JavaScript library for building user interfaces...'
    },
    2: {
      title: 'Understanding React Router',
      content: 'React Router enables navigation among views in a React application...'
    },
    3: {
      title: 'State Management Tips',
      content: 'Managing state effectively is crucial for React applications...'
    },
  };

  const post = posts[id];

  return (
    <div className="page">
      <h1>{post.title}</h1>
      <div className="blog-content">
        <p>{post.content}</p>
      </div>
      <button onClick={() => navigate('/blog')}>← Back to Blog</button>
    </div>
  );
}

// 404 Page
function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="page not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
      <button onClick={() => navigate('/')}>Go Home</button>
    </div>
  );
}

// Main App with Router
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout />
        
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

