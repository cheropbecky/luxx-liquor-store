
// Import required packages
const express = require('express');
const cors = require('cors');

// Import routes
const productsRoutes = require('./routes/products');
const ordersRoutes = require('./routes/orders');

// Initialize Express app
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products', productsRoutes);
app.use('/api/orders', ordersRoutes);

// Test route
app.get('/', (req, res) => {
  res.json({ 
    message: 'Welcome to Luxx Liquor Store API',
    status: 'Server is running successfully!',
    endpoints: {
      products: {
        getAll: 'GET /api/products',
        getById: 'GET /api/products/:id',
        getByCategory: 'GET /api/products/category/:category'
      },
      orders: {
        create: 'POST /api/orders',
        getAll: 'GET /api/orders',
        getById: 'GET /api/orders/:id'
      }
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📡 API ready to receive requests`);
});
