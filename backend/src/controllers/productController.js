const models = require('../models');

const getProductList = async (req, res) => {
  try {
    const products = await models.Produk.findAll();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).send('Terjadi kesalahan saat mencoba mendapatkan produk.');
  }
};

const createProduct = async (req, res) => {
  const { product_id, nama_produk, harga, rating, kategori_id, toko_id, qty } = req.body;

  try {
    const product = await models.Produk.create({
      product_id,
      nama_produk,
      harga,
      rating,
      kategori_id,
      toko_id,
      qty
    });
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).send('Terjadi kesalahan saat mencoba membuat produk.');
  }
};

module.exports = {
  getProductList,
  createProduct,
};
