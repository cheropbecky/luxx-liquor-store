# Luxx Liquor Store – Beginner's Toolkit with Node.js & Express

> **Moringa School AI Capstone Project**
> "Prompt-Powered Kickstart: Building a Beginner's Toolkit for Node.js & Express"

---

## 📌 Title & Objective

**Project:** Getting Started with Node.js & Express – A Beginner's Backend Guide

**Technology Chosen:** Node.js + Express.js

**Why I Chose It:**
I already had a fully working e-commerce frontend (Luxx Liquor Store) built with HTML, CSS and JavaScript. The products were hardcoded and orders were never saved anywhere. I chose Node.js to build a real backend API that serves products dynamically and saves customer orders — turning a static site into a full-stack application.

**End Goal:**
Build a RESTful API backend that:
- Serves 68 products across 5 categories
- Filters products by category
- Saves customer orders to a database
- Connects to the existing frontend with minimal changes

---

## 🧠 Quick Summary of Node.js

**What is it?**
Node.js is a JavaScript runtime that lets you run JavaScript on the server (backend), not just in the browser. Express.js is a lightweight framework built on top of Node.js that makes building APIs fast and easy.

**Where is it used?**
Node.js powers the backends of companies like Netflix, LinkedIn, Uber, and PayPal. It's one of the most popular backend technologies in the world.

**Real-world example:**
When you open Netflix and it loads your recommended shows, a Node.js server is fetching that data from a database and sending it to your browser as JSON — exactly what we built for Luxx!

---

## 💻 System Requirements

| Requirement | Version |
|------------|---------|
| OS | macOS / Linux / Windows |
| Node.js | v14 or higher (tested on v22.18.0) |
| npm | v6 or higher (tested on v10.9.3) |
| Editor | VS Code (recommended) |
| API Testing | Browser or Postman or curl |

---

## 📁 Project Structure

```
luxx-liquor-store/
├── luxx-frontend/              # Frontend (HTML/CSS/JS)
│   ├── assets/                 # Images and video
│   ├── index.html              # Homepage
│   ├── shop.html               # Shop page
│   ├── cart.html               # Cart page
│   ├── checkout.html           # Checkout page
│   ├── shop.js                 # Fetches products from API
│   ├── checkout.js             # Sends orders to API
│   ├── shop.css                # Shop styles
│   ├── style.css               # Global styles
│   └── footer.html             # Shared footer
│
└── Luxx_backend/               # Backend (Node.js + Express)
    ├── server.js               # Main Express server
    ├── package.json            # Dependencies
    ├── data/
    │   ├── products.json       # 68 products database
    │   └── orders.json         # Saved orders database
    └── routes/
        ├── products.js         # Product API endpoints
        └── orders.js           # Order API endpoints
```

---

## ⚙️ Installation & Setup Instructions

### Step 1: Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/luxx-liquor-store.git
cd luxx-liquor-store
```

### Step 2: Install Backend Dependencies

```bash
cd Luxx_backend
npm install
```

### Step 3: Start the Backend Server

```bash
# Development mode (auto-restart on changes)
npm run dev

# OR Production mode
npm start
```

You should see:
```
🚀 Server running on http://localhost:3000
📡 API ready to receive requests
```

### Step 4: Open the Frontend

Open `luxx-frontend/index.html` in your browser directly, or use VS Code Live Server.

> ⚠️ **Important:** If using Live Server, add `Luxx_backend/data/orders.json` to the ignore list in VS Code settings to prevent auto-refresh when orders are saved.

```json
"liveServer.settings.ignoreFiles": [
  "Luxx_backend/data/orders.json"
]
```

---

## 🔌 API Endpoints

Base URL: `http://localhost:3000`

### Products

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all 68 products |
| GET | `/api/products/:id` | Get single product by ID |
| GET | `/api/products/category/:category` | Get products by category |

**Available categories:** `wines`, `whiskey`, `vodka`, `beer`, `softdrinks`

### Orders

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/orders` | Create a new order |
| GET | `/api/orders` | Get all orders |
| GET | `/api/orders/:id` | Get single order by ID |

---

## 🧪 Minimal Working Example

### Test 1: Get all products
```bash
curl http://localhost:3000/api/products
```

**Expected output:**
```json
{
  "success": true,
  "count": 68,
  "data": [...]
}
```

### Test 2: Filter by category
```bash
curl http://localhost:3000/api/products/category/wines
```

**Expected output:**
```json
{
  "success": true,
  "category": "wines",
  "count": 16,
  "data": [...]
}
```

### Test 3: Create an order
```bash
curl -X POST http://localhost:3000/api/orders \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Becky Cherop",
    "email": "becky@gmail.com",
    "phone": "0799049979",
    "items": [{"name": "Four Cousins", "price": 1200, "quantity": 2}],
    "total": 2400
  }'
```

**Expected output:**
```json
{
  "success": true,
  "message": "Order created successfully",
  "data": {
    "id": 1,
    "orderNumber": "LUX-1234567890",
    "customerInfo": {...},
    "total": 2400,
    "status": "pending",
    "createdAt": "2026-02-17T..."
  }
}
```

---

## 🤖 AI Prompt Journal

| # | Prompt Used | What It Helped With |
|---|-------------|---------------------|
| 1 | "How do I set up a Node.js project from scratch with Express?" | Scaffolded the initial server setup and folder structure |
| 2 | "Create a REST API with Express that reads from a JSON file" | Built the products endpoints with file reading logic |
| 3 | "How do I handle POST requests in Express and save data to a JSON file?" | Built the orders endpoint with file writing logic |
| 4 | "How do I enable CORS in Express so my frontend can call my backend?" | Fixed cross-origin request issues between frontend and backend |
| 5 | "How do I fetch data from an API in vanilla JavaScript and render it to the DOM?" | Updated shop.js to fetch products from backend instead of hardcoded data |
| 6 | "Why is my Live Server refreshing when my backend writes to a JSON file?" | Discovered and fixed the auto-refresh bug that was closing the payment modal |
| 7 | "How do I structure routes in Express using a separate router file?" | Organized code into routes/products.js and routes/orders.js |
| 8 | "What is the difference between type=submit and type=button in HTML forms?" | Fixed the form submission bug that was refreshing the checkout page |

**Learning Reflection:**
Using AI as a learning companion significantly accelerated my understanding of Node.js. Instead of spending hours reading documentation, I could ask specific questions about my exact problem and get working code immediately. The most valuable lesson was learning to debug by asking AI to explain error messages — this helped me understand WHY things were broken, not just HOW to fix them.

---

## 🐛 Common Issues & Fixes

### Issue 1: "Cannot find module 'express'"
**Cause:** Dependencies not installed
**Fix:**
```bash
cd Luxx_backend
npm install
```

### Issue 2: Payment modal closes automatically
**Cause:** Live Server auto-refreshes when `orders.json` is updated by the backend
**Fix:** Add to VS Code `settings.json`:
```json
"liveServer.settings.ignoreFiles": [
  "Luxx_backend/data/orders.json"
]
```

### Issue 3: CORS error in browser console
**Cause:** Browser blocking requests from frontend to backend
**Fix:** Already handled! CORS is enabled in `server.js`:
```javascript
app.use(cors());
```

### Issue 4: Port 3000 already in use
**Cause:** Another process is using port 3000
**Fix:**
```bash
# Find and kill process on port 3000
lsof -ti:3000 | xargs kill
# Then restart server
npm run dev
```

### Issue 5: Products not loading on shop page
**Cause:** Backend server is not running
**Fix:** Make sure you run `npm run dev` in the `Luxx_backend` folder before opening the frontend

### Issue 6: Form submitting and refreshing page
**Cause:** Button had `type="submit"` inside a form
**Fix:** Change to `type="button"` on all buttons that should not submit forms

---

## 🔗 References

### Official Documentation
- [Node.js Official Docs](https://nodejs.org/en/docs/)
- [Express.js Official Docs](https://expressjs.com/)
- [MDN Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [MDN localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

### Helpful Resources
- [Express.js Crash Course - Traversy Media](https://www.youtube.com/watch?v=L72fhGm1tfE)
- [REST API Tutorial](https://restfulapi.net/)
- [Node.js File System Module](https://nodejs.org/api/fs.html)
- [CORS Explained](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

---

## 🌐 Live Demo

| Part | URL |
|------|-----|
| Frontend | Coming soon (Vercel) |
| Backend API | Coming soon (Render) |

---

## 👤 Author

**Becky Cherop**
Moringa School – AI Capstone Project
February 2026

---

## 📄 License

MIT
