const express = require('express');
const router = express.Router();
const sellerController = require('../controllers/sellerController');

// Rute untuk seller membuat toko baru
router.post('/create-store', sellerController.createStore);

// Rute untuk seller menambahkan produk ke toko
router.post('/add-product', sellerController.addProduct);

// Rute untuk seller mengedit produk di toko
router.put('/edit-product/:product_id', sellerController.editProduct);

// Rute untuk seller menghapus produk di toko
router.delete('/delete-product/:product_id', sellerController.deleteProduct);

// Rute untuk seller melihat semua produk yang ada di toko
router.get('/view-products/:user_id', sellerController.viewProducts);

module.exports = router;
