const express = require("express");
const router = express.Router();
const {
  getOrderById,
  createNewOrder,
  getOrderDetailsById,
  addProductToOrder
} = require("../controllers/orderController");

// GET a specific order by ID
router.get("/:user_id", getOrderById);
router.get("/details/:order_id", getOrderDetailsById);
router.post("/add/:user_id", addProductToOrder);
router.post("/", createNewOrder);

module.exports = router;
