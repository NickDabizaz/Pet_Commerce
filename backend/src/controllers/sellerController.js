const models = require("../models");

const createStore = async (req, res) => {

  const { user_id, store_name, store_description } = req.body;

  try {

    // Validate seller role
    const user = await models.User.findByPk(user_id);

    if (!user || user.role !== "seller") {
      return res.status(403).send("You don't have permission to create a store");
    }

    // Generate store id
    const highestStore = await models.Store.max("store_id");
    const nextId = highestStore ? highestStore + 1 : 1;

    // Create new store
    const store = await models.Store.create({
      store_id: nextId,
      store_name,
      store_description,
      user_id
    });

    // Return created store
    res.json(store);

  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating store"); 
  }

};

const addProduct = async (req, res) => {

  const { 
    user_id, 
    store_id, 
    product_name, 
    price, 
    quantity, 
    rating,
    category_id 
  } = req.body;

  try {

    // Validate seller role
    const user = await models.User.findByPk(user_id);

    if (!user || user.role !== "seller") {
      return res.status(403).send("You don't have permission to add products");
    }

    // Generate product id
    const highestProduct = await models.Product.max("product_id");
    const nextId = highestProduct ? highestProduct + 1 : 1;

    // Create new product
    const product = await models.Product.create({
      product_id: nextId,
      product_name,
      price,
      quantity,
      store_id, 
      rating,
      category_id
    });

    // Return created product
    res.json(product);

  } catch (error) {
    console.error(error);
    res.status(500).send("Error adding product");
  }

};

const editProduct = async (req, res) => {
  
  const { user_id } = req.body;
  const { product_id } = req.params;

  const { 
    product_name, 
    price, 
    quantity, 
    rating,
    category_id
  } = req.body;

  try {

    // Validate seller permission
    const user = await models.User.findByPk(user_id);
    const product = await models.Product.findByPk(product_id);

    if (!user || user.role !== "seller" || product.store_id !== user.user_id) {
      return res.status(403).send("You don't have permission to edit this product");
    }

    // Update product
    await product.update({
      product_name,
      price,
      quantity,
      rating,
      category_id 
    });

    // Return updated product
    res.json(product);

  } catch (error) {
    console.error(error);
    res.status(500).send("Error editing product");
  }

};

const deleteProduct = async (req, res) => {

  const { user_id } = req.body;
  const { product_id } = req.params;

  try {

    // Validate seller permission
    const user = await models.User.findByPk(user_id);
    const product = await models.Product.findByPk(product_id);

    if (!user || user.role !== "seller") {
      return res.status(403).send("You don't have permission to delete this product");
    }

    if (!product || product.store_id !== user.user_id) {
      return res.status(403).send("You don't have permission to delete this product");
    }

    // Delete product
    await models.Product.destroy({ where: { product_id } });

    // Return response
    res.send("Product deleted successfully");

  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting product");
  }

};


const viewProducts = async (req, res) => {

  const { user_id } = req.params;

  try {

    // Validate seller role  
    const user = await models.User.findByPk(user_id);

    if (!user || user.role !== "seller") {
      return res.status(403).send("You don't have permission to view products");
    }

    // Get products
    const products = await models.Product.findAll({
      where: { store_id: user_id }
    });

    // Return products
    res.json(products);

  } catch (error) {
    console.error(error);
    res.status(500).send("Error getting products");
  }

};

module.exports = {
  createStore,
  addProduct,
  editProduct,
  deleteProduct,
  viewProducts  
};