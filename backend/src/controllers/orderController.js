// Importing Dependencies
const { Order, OrderDetail, Sequelize, Product } = require("../models");
const Op = Sequelize.Op;

// Create a new order
const createNewOrder = async (req, res) => {
  try {
    // Find the latest order in the database
    const latestOrder = await Order.findOne({ order: [["order_id", "DESC"]] });

    // Get the next order ID by incrementing the latest order ID by 1
    const nextOrderId = latestOrder ? latestOrder.order_id + 1 : 1;

    // Create a new order with the next order ID
    const order = new Order({
      user_id: req.body.user_id,
      order_id: nextOrderId,
      order_date: new Date(),
      total_price: req.body.total_price,
    });

    const newOrder = await order.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get an order by user_id
const getOrderById = async (req, res) => {
  try {
    const order = await Order.findAll({
      where: { user_id: req.params.user_id },
    });
    if (order) {
      res.status(200).json(order);
    } else {
      res.status(404).json({ message: "Order not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addProductToOrder = async (req, res) => {
  try {
    // Find the order based on user_id
    const order = await Order.findOne({
      where: { user_id: req.params.user_id },
    });

    if (!order) {
      return res.status(404).json({ message: "Order not found for the user" });
    }

    // Get the product_id from the request body
    const product = await Product.findOne({
      where: { product_id: req.body.product_id },
    });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Calculate the subtotal based on the product price and quantity
    const subtotal = product.price * req.body.qty;

    // Create a new order detail
    const orderDetail = new OrderDetail({
      order_id: order.order_id,
      product_id: req.body.product_id,
      qty: req.body.qty,
      subtotal: subtotal,
    });

    const newOrderDetail = await orderDetail.save();

    res.status(201).json(newOrderDetail);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get order details by order_id
const getOrderDetailsById = async (req, res) => {
  try {
    console.log({ orderId: req.params.order_id });
    const orderDetails = await OrderDetail.findAll({
      where: { order_id: req.params.order_id },
      include: [
        {
          model: Product,
          attributes: ["product_id", "product_name", "price"],
          as: "Product",
        },
      ],
      attributes: [
        "detail_id",
        "order_id",
        "qty",
        "subtotal",
        "createdAt",
        "updatedAt",
        "deletedAt",
      ],
    });

    if (orderDetails && orderDetails.length > 0) {
      let total = 0; // Inisialisasi total

      const formattedResponse = {
        order_id: orderDetails[0].order_id,
        products: orderDetails.map((detail) => {
          // Menghitung total untuk setiap produk
          total += detail.subtotal;

          return {
            detail_id: detail.detail_id,
            product_id: detail.Product.product_id,
            product_name: detail.Product.product_name,
            price: detail.Product.price,
            qty: detail.qty,
            subtotal: detail.subtotal,
          };
        }),
        total: total, // Menambahkan total ke respons
      };

      res.status(200).json(formattedResponse);
    } else {
      res.status(404).json({ message: "Order details not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Exporting the functions
module.exports = {
  getOrderById,
  createNewOrder,
  getOrderDetailsById,
  addProductToOrder,
};