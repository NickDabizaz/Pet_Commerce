const express = require('express');
const router = express.Router();
const sellerController = require('../controllers/sellerController');

// Route for seller to create a new store
router.post('/create-store', sellerController.createStore);

router.get('/store/:store_id', sellerController.getDetailStore)

// Route for seller to add product to store  
router.post('/add-product', sellerController.addProduct);

// Route for seller to edit product in store
router.put('/edit-product/:product_id', sellerController.editProduct);

// Route for seller to delete product in store
router.delete('/delete-product/:product_id', sellerController.deleteProduct);

// Route for seller to view all products in store
router.get('/view-products/:user_id', sellerController.viewProducts);

router.get('/get-all-products', sellerController.getAllProducts);

router.get('/products', sellerController.searchProduct);

router.get('/product/:product_id', sellerController.getProductDetail);



module.exports = router;