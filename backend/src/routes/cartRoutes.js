
const express = require('express');
const router = express.Router();
const { addToCart, getCart, updateCart, deleteCart } = require('../controllers/cartController.js');

// Route untuk menambahkan cart
router.post('/', addToCart);

// Route untuk mendapatkan cart
router.get('/:user_id', getCart);

// Route untuk mengupdate cart
router.put('/:user_id', updateCart);

// Route untuk menghapus cart
router.delete('/:user_id', deleteCart);

module.exports = router;
