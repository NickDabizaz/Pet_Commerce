const express = require("express");
const router = express.Router();
const {
  getOrderById,
  createNewOrder,
  getOrderDetailsById,
  addProductToOrder,
  getCountProductId,
  getJumlahTrasaksi,
  getLast,
  reportByProduct,
  getTotalTransactionProduct
} = require("../controllers/orderController");

// GET a specific order by ID
router.post("/", createNewOrder);
router.get("/:user_id", getOrderById);
router.post("/add/:user_id", addProductToOrder);
router.get("/details/:order_id", getOrderDetailsById);
router.get('/count/:product_id', getCountProductId)
router.get('/Jumlah_transaksi/:user_id', getJumlahTrasaksi)
router.get('/Transaksi_terakhir/:user_id', getLast)
router.get('/report/:store_id', reportByProduct)
router.get('/report/product/:product_id', getTotalTransactionProduct)

module.exports = router;
