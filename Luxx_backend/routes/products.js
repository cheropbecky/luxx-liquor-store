const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, '../data/products.json');

const getProducts = () => {
  const data = fs.readFileSync(productsFile, 'utf8');
  return JSON.parse(data);
};

router.get('/', (req, res) => {
  try {
    const products = getProducts();
    const allProducts = [];
    for (const category in products) {
      allProducts.push(...products[category]);
    }
    res.json({
      success: true,
      count: allProducts.length,
      data: allProducts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching products',
      error: error.message
    });
  }
});

router.get('/category/:category', (req, res) => {
  try {
    const { category } = req.params;
    const products = getProducts();
    if (!products[category]) {
      return res.status(404).json({
        success: false,
        message: `Category '${category}' not found`
      });
    }
    res.json({
      success: true,
      category: category,
      count: products[category].length,
      data: products[category]
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching products by category',
      error: error.message
    });
  }
});

router.get('/:id', (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const products = getProducts();
    let foundProduct = null;
    for (const category in products) {
      foundProduct = products[category].find(p => p.id === productId);
      if (foundProduct) break;
    }
    if (!foundProduct) {
      return res.status(404).json({
        success: false,
        message: `Product with ID ${productId} not found`
      });
    }
    res.json({
      success: true,
      data: foundProduct
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching product',
      error: error.message
    });
  }
});

module.exports = router;
