const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const ordersFile = path.join(__dirname, '../data/orders.json');

const getOrders = () => {
  try {
    const data = fs.readFileSync(ordersFile, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

const saveOrders = (orders) => {
  fs.writeFileSync(ordersFile, JSON.stringify(orders, null, 2));
};

router.post('/', (req, res) => {
  try {
    const { name, email, phone, items, total } = req.body;
    if (!name || !email || !phone || !items || !total) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields'
      });
    }
    const orders = getOrders();
    const newOrder = {
      id: orders.length + 1,
      orderNumber: `LUX-${Date.now()}`,
      customerInfo: { name, email, phone },
      items,
      total,
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    orders.push(newOrder);
    saveOrders(orders);
    res.status(201).json({
      success: true,
      message: 'Order created successfully',
      data: newOrder
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error creating order',
      error: error.message
    });
  }
});

router.get('/', (req, res) => {
  try {
    const orders = getOrders();
    res.json({
      success: true,
      count: orders.length,
      data: orders
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching orders',
      error: error.message
    });
  }
});

router.get('/:id', (req, res) => {
  try {
    const orderId = parseInt(req.params.id);
    const orders = getOrders();
    const order = orders.find(o => o.id === orderId);
    if (!order) {
      return res.status(404).json({
        success: false,
        message: `Order with ID ${orderId} not found`
      });
    }
    res.json({
      success: true,
      data: order
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching order',
      error: error.message
    });
  }
});

module.exports = router;