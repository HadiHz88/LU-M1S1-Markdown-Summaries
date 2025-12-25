# ⚡ Vite Guide for React

## 🚀 What is Vite?

Vite (French word for "quick", pronounced `/vit/`) is a modern build tool that provides:

- ⚡️ **Lightning Fast HMR** (Hot Module Replacement)
- 🔥 **Instant Server Start** - No bundling in development
- 📦 **Optimized Build** - Uses Rollup for production
- 🎯 **Pre-configured** - Works out of the box
- 🔧 **Powerful** - Rich plugin ecosystem

### Why Vite Over Create React App?

| Feature | Vite | Create React App |
|---------|------|------------------|
| Dev Server Start | Instant | 10-30 seconds |
| HMR Speed | < 100ms | 1-3 seconds |
| Build Tool | Rollup | Webpack |
| Configuration | Simple | Complex |
| File Size | Smaller | Larger |
| Modern | Yes | Becoming outdated |

---

## 📁 Vite Project Structure

```
my-react-app/
├── index.html          # Entry HTML (at root, not in public/)
├── package.json        # Dependencies with Vite
├── vite.config.js      # Vite configuration
├── public/             # Static assets
│   └── (images, fonts, etc.)
└── src/
    ├── main.jsx        # Entry point (not index.js)
    ├── App.jsx         # Main component
    ├── App.css         # Component styles
    └── index.css       # Global styles
```

### Key Differences from Create React App:

1. **index.html is at root** (not in public/)
2. **Entry file is main.jsx** (not index.js)
3. **Use .jsx extension** for files with JSX
4. **No PUBLIC_URL** - use `/` for public assets

---

## 🛠️ Creating a New Vite React Project

### Quick Start:

```bash
# Using npm
npm create vite@latest my-react-app -- --template react

# Using yarn
yarn create vite my-react-app --template react

# Using pnpm
pnpm create vite my-react-app --template react
```

### Step-by-Step:

```bash
# Create project
npm create vite@latest my-react-app -- --template react

# Navigate to project
cd my-react-app

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 📦 Package.json Configuration

```json
{
  "name": "my-react-app",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.1",
    "vite": "^5.0.8"
  }
}
```

### Available Scripts:

- **`npm run dev`** - Start development server (default: http://localhost:5173)
- **`npm run build`** - Build for production
- **`npm run preview`** - Preview production build locally

---

## ⚙️ Vite Configuration (vite.config.js)

### Basic Configuration:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,  // Default is 5173
    open: true   // Auto-open browser
  }
})
```

### Advanced Configuration:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
```

---

## 📄 index.html Structure

Vite uses **index.html** as the entry point:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My React App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

### Key Points:
- Located at **project root** (not in public/)
- Uses `<script type="module">` to load entry file
- References `/src/main.jsx` directly

---

## 🎯 Entry Point (main.jsx)

```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

---

## 🖼️ Using Assets

### Images in src/:
```javascript
import logo from './assets/logo.png'

function App() {
  return <img src={logo} alt="Logo" />
}
```

### Images in public/:
```javascript
function App() {
  return <img src="/images/logo.png" alt="Logo" />
}
```

### CSS/Styles:
```javascript
import './App.css'  // Works the same as CRA
```

---

## 🔌 Environment Variables

### .env File:
```bash
# Use VITE_ prefix (not REACT_APP_)
VITE_API_URL=https://api.example.com
VITE_APP_TITLE=My App
```

### Usage:
```javascript
const apiUrl = import.meta.env.VITE_API_URL
const title = import.meta.env.VITE_APP_TITLE

// Built-in variables
const isDev = import.meta.env.DEV
const isProd = import.meta.env.PROD
```

### Key Differences from CRA:
- Use `VITE_` prefix instead of `REACT_APP_`
- Access via `import.meta.env` instead of `process.env`

---

## 📦 Installing Additional Packages

### React Router:
```bash
npm install react-router-dom
```

### Styled Components:
```bash
npm install styled-components
```

### Axios:
```bash
npm install axios
```

---

## 🚀 Deployment

### Build for Production:
```bash
npm run build
```

This creates a `dist/` folder with optimized files.

### Preview Production Build:
```bash
npm run preview
```

### Deploy to Various Platforms:

**Vercel:**
```bash
npm install -g vercel
vercel
```

**Netlify:**
```bash
npm install -g netlify-cli
netlify deploy --prod
```

**GitHub Pages:**
```bash
# Add to vite.config.js
base: '/your-repo-name/'

# Build and deploy
npm run build
```

---

## 🔥 Hot Module Replacement (HMR)

Vite's HMR is incredibly fast:

```javascript
// Automatically enabled for React components
// Changes appear instantly without full page reload

// For custom HMR:
if (import.meta.hot) {
  import.meta.hot.accept()
}
```

---

## 🎨 CSS/Styling Options

### Plain CSS:
```javascript
import './App.css'
```

### CSS Modules:
```javascript
import styles from './App.module.css'

function App() {
  return <div className={styles.container}>Hello</div>
}
```

### SCSS/SASS:
```bash
npm install -D sass
```
```javascript
import './App.scss'
```

### Styled Components:
```bash
npm install styled-components
```
```javascript
import styled from 'styled-components'
```

---

## ⚡ Performance Tips

1. **Use Dynamic Imports:**
```javascript
const Component = lazy(() => import('./Component'))
```

2. **Optimize Images:**
- Use WebP format
- Place large images in public/
- Use proper image sizes

3. **Code Splitting:**
- Vite automatically splits code
- Use React.lazy() for route-based splitting

4. **Tree Shaking:**
- Import only what you need
- Vite automatically removes unused code

---

## 🐛 Troubleshooting

### Port Already in Use:
```bash
# Change port in vite.config.js
server: {
  port: 3001
}
```

### Clear Cache:
```bash
rm -rf node_modules/.vite
npm run dev
```

### Build Errors:
```bash
# Clean and rebuild
rm -rf dist node_modules
npm install
npm run build
```

---

## 📊 Vite vs CRA Migration Checklist

- [ ] Move `public/index.html` to root `index.html`
- [ ] Rename `src/index.js` to `src/main.jsx`
- [ ] Update `package.json` (vite instead of react-scripts)
- [ ] Add `vite.config.js`
- [ ] Update `index.html` with `<script type="module">`
- [ ] Change `.js` to `.jsx` for files with JSX
- [ ] Update env variables: `REACT_APP_` → `VITE_`
- [ ] Update env access: `process.env` → `import.meta.env`
- [ ] Update scripts: `start` → `dev`

---

## 🎯 Quick Comparison Table

| Aspect | Create React App | Vite |
|--------|-----------------|------|
| **Command** | `npm start` | `npm run dev` |
| **Port** | 3000 | 5173 (configurable) |
| **Entry** | `src/index.js` | `src/main.jsx` |
| **HTML** | `public/index.html` | `index.html` |
| **Env Prefix** | `REACT_APP_` | `VITE_` |
| **Env Access** | `process.env` | `import.meta.env` |
| **Build Output** | `build/` | `dist/` |

---

## 🌟 Why Students Should Use Vite

1. **Instant Feedback** - See changes in < 100ms
2. **Modern Standard** - Industry is moving to Vite
3. **Better DX** - Faster development experience
4. **Learn Modern Tools** - Vite is the future
5. **Easy Setup** - Simpler configuration

---

## 📚 Additional Resources

- **Official Docs:** https://vitejs.dev
- **Vite + React Guide:** https://vitejs.dev/guide/#scaffolding-your-first-vite-project
- **Plugin List:** https://vitejs.dev/plugins/
- **Migration Guide:** https://vitejs.dev/guide/migration

---

**Ready to use Vite? All our React examples now use Vite! ⚡**












