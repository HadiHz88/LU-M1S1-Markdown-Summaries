# ⚡ Installation Guide - React with Vite

This guide will help you set up and run the React code examples built with Vite.

## 📋 Prerequisites

Before you begin, make sure you have the following installed:

### Node.js and npm

- **Node.js**: Version 14.18+ or 16+ (Latest LTS recommended)
- **npm**: Version 6+ (comes with Node.js)

**Check your versions:**
```bash
node --version
npm --version
```

**Download Node.js:**
If you don't have Node.js installed, download it from [nodejs.org](https://nodejs.org/)

---

## 🚀 Quick Start (Single Chapter)

### Step 1: Navigate to a Chapter

```bash
cd React_Code_Examples/Chapter01-Introduction
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install:
- React (^18.2.0)
- React-DOM (^18.2.0)
- Vite (^5.0.8)
- @vitejs/plugin-react (^4.2.1)

### Step 3: Run the Development Server

```bash
npm run dev
```

The app will be available at:
- **http://localhost:3000** (configured in examples)
- or **http://localhost:5173** (Vite's default)

### Step 4: Make Changes

Try editing `src/App.jsx` - your changes will appear **instantly** thanks to Vite's HMR!

---

## 📦 Running All Chapters

If you want to install dependencies for all chapters at once:

### Windows (PowerShell):
```powershell
Get-ChildItem -Directory -Filter "Chapter*" | ForEach-Object {
    Write-Host "Installing $($_.Name)..." -ForegroundColor Green
    Set-Location $_.FullName
    npm install
    Set-Location ..
}
```

### Mac/Linux (Bash):
```bash
for dir in Chapter*/; do
    echo "Installing $dir..."
    cd "$dir"
    npm install
    cd ..
done
```

---

## 🎯 Available Scripts

Each chapter supports these npm scripts:

### `npm run dev`
Starts the Vite development server with:
- ⚡ Instant server start
- 🔥 Lightning-fast HMR
- 📝 Error overlay in browser

### `npm run build`
Builds the app for production:
- Optimized bundles
- Minified code
- Tree-shaking
- Output in `dist/` folder

### `npm run preview`
Preview the production build locally before deploying

---

## 🌟 Vite Features

### Hot Module Replacement (HMR)
- Changes appear in < 100ms
- State is preserved during updates
- No full page reload needed

### Fast Server Start
- Vite starts **instantly** - no bundling in development
- Uses native ES modules

### Optimized Builds
- Rollup-based production builds
- Automatic code splitting
- Tree-shaking

---

## 🔧 Configuration

Each chapter includes a `vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,    // Custom port
    open: true     // Auto-open browser
  }
})
```

**Common Customizations:**

Change port:
```javascript
server: {
  port: 5173
}
```

Disable auto-open:
```javascript
server: {
  open: false
}
```

---

## 📁 Project Structure

```
ChapterXX-Topic/
├── index.html          # Entry HTML (at root!)
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
├── public/            # Static assets
└── src/
    ├── main.jsx        # Application entry point
    ├── App.jsx         # Main component
    ├── App.css         # Component styles
    └── index.css       # Global styles
```

**Key Differences from Create React App:**
- `index.html` is at **root** (not in public/)
- Entry file is `main.jsx` (not index.js)
- Use `.jsx` extension for JSX files
- Command is `npm run dev` (not npm start)

---

## 🐛 Troubleshooting

### Port Already in Use

**Problem:** Port 3000 or 5173 is already in use

**Solution:** 
1. Kill the process using the port
2. Or change the port in `vite.config.js`:
```javascript
server: {
  port: 3001
}
```

### Dependencies Not Installing

**Problem:** `npm install` fails

**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Vite Not Found

**Problem:** `npm run dev` says vite command not found

**Solution:**
```bash
# Make sure you're in the chapter directory
cd Chapter01-Introduction

# Install dependencies
npm install

# Try again
npm run dev
```

### Module Not Found Errors

**Problem:** Import errors or module not found

**Solution:**
1. Check file extensions (.jsx vs .js)
2. Ensure imports use correct paths
3. Reinstall dependencies

---

## 🔄 Creating a New Vite React Project

Want to create your own React project with Vite?

```bash
# Using npm
npm create vite@latest my-app -- --template react

# Navigate and install
cd my-app
npm install

# Start development
npm run dev
```

---

## 📚 Additional Dependencies

### React Router (Chapter 10)
```bash
npm install react-router-dom
```

### Styled Components (Chapter 11)
```bash
npm install styled-components
```

---

## 🌐 Browser Support

Vite targets browsers with native ES modules support:
- Chrome >=87
- Firefox >=78
- Safari >=14
- Edge >=88

For production builds, legacy browsers are supported through plugins.

---

## 📖 Learn More

- **Vite Documentation:** https://vitejs.dev
- **React Documentation:** https://react.dev
- **Vite + React Guide:** https://vitejs.dev/guide/#scaffolding-your-first-vite-project

---

## ✅ Verification

To verify everything is working:

1. Navigate to any chapter
2. Run `npm install`
3. Run `npm run dev`
4. Open browser to the provided URL
5. You should see the chapter's examples
6. Try editing `src/App.jsx` - changes should appear instantly!

---

## 💡 Tips

- **Fast Refresh:** Vite's HMR preserves component state
- **Console:** Check browser console for helpful info
- **DevTools:** Install React DevTools browser extension
- **Hot Reload:** Save any file to see instant updates
- **Error Overlay:** Build errors appear directly in browser

---

## 🆘 Need Help?

1. Check the browser console for errors
2. Verify Node.js and npm versions
3. Try deleting `node_modules` and reinstalling
4. Check that you're using correct commands (`npm run dev` not `npm start`)
5. Ensure you're in the correct directory

---

**Happy Learning with Vite! ⚡⚛️**
