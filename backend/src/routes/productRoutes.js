const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Mendapatkan daftar semua produk
router.get('/', productController.getProductList);

// Membuat produk baru
router.post('/', productController.createProduct);

module.exports = router;
