# ⚠️ READ THIS FIRST - How to View React Examples

## ❌ COMMON MISTAKE

**DON'T double-click `index.html` files!**

You will get this error:
```
❌ Access to script at 'file:///C:/assets/index-xxx.js' from origin 'null' 
   has been blocked by CORS policy
```

## ✅ CORRECT WAY

React apps MUST run on a web server.

---

###  NPM Development Server

```bash
# 1. Open terminal/command prompt
# 2. Navigate to any chapter:
cd Chapter01-Introduction

# 3. Install (first time only):
npm install

# 4. Start server:
npm run dev

# 5. Open browser to: http://localhost:5173
```

**✅ Advantages:** Hot reload, best for learning, see changes instantly

---

## 🎯 Quick Reference

| What You Want | Command | URL |
|---------------|---------|-----|
| Learn & Code | `npm run dev` | http://localhost:5173 |
| Quick Preview | `python -m http.server 8000` | http://localhost:8000 |
| Super Easy | Double-click `.bat` file | Opens automatically |

---

## 📚 More Help

- **Detailed solutions:** `HOW_TO_VIEW_EXAMPLES.md`
- **Full guide:** `START_ALL_EXAMPLES.md`
- **General info:** `README.md`

---

## 💡 Remember

🚫 **Never use:** `file://` protocol (double-clicking files)  
✅ **Always use:** `http://localhost` (web server)

**React apps are web applications - they need a web server to run properly!**


