const express = require("express");
const router = express.Router();
const {
  getOrderById,
  createNewOrder,
  getOrderDetailsById,
  addProductToOrder
} = require("../controllers/orderController");

// GET a specific order by ID
router.post("/", createNewOrder);
router.get("/:user_id", getOrderById);
router.post("/add/:user_id", addProductToOrder);
router.get("/details/:order_id", getOrderDetailsById);

module.exports = router;
