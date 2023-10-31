const models = require("../models");

const createStore = async (req, res) => {
  const { user_id, nama_toko, deskripsi_toko } = req.body;

  try {
    // Cek apakah user_id memiliki role seller
    const user = await models.User.findOne({
      where: { user_id, role: "seller" },
    });

    if (!user) {
      return res
        .status(403)
        .send("Anda tidak memiliki izin untuk membuat toko.");
    }

    const storeId = await generateStoreId(); // Tambahkan await di sini
    const store = await models.Toko.create({
      toko_id: storeId,
      nama_toko,
      deskripsi_toko,
      user_id,
    });
    res.json(store);
  } catch (error) {
    console.error(error);
    res.status(500).send("Terjadi kesalahan saat mencoba membuat toko.");
  }
};

const addProduct = async (req, res) => {
  const { user_id, toko_id, nama_produk, harga, qty, rating, kategori_id } =
    req.body;

  try {
    // Cek apakah user_id memiliki role seller
    const user = await models.User.findOne({
      where: { user_id, role: "seller" },
    });

    if (!user) {
      return res
        .status(403)
        .send("Anda tidak memiliki izin untuk menambahkan produk.");
    }

    const product = await models.Produk.create({
      product_id: await generateProductId(),
      nama_produk,
      harga,
      qty,
      toko_id,
      rating, // Tambahkan rating
      kategori_id, // Tambahkan kategori_id
    });

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).send("Terjadi kesalahan saat mencoba menambahkan produk.");
  }
};

const editProduct = async (req, res) => {
  const { user_id } = req.body;
  const { product_id } = req.params;
  const { nama_produk, harga, qty, rating, kategori_id } = req.body;

  try {
    // Cek apakah user_id memiliki role seller dan memiliki toko dengan produk_id
    const user = await models.User.findOne({
      where: { user_id, role: "seller" },
    });
    const product = await models.Produk.findOne({ where: { product_id } });

    if (!user || !product || product.toko_id !== user_id) {
      return res
        .status(403)
        .send("Anda tidak memiliki izin untuk mengedit produk ini.");
    }

    await product.update({ nama_produk, harga, qty, rating, kategori_id });
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).send("Terjadi kesalahan saat mencoba mengedit produk.");
  }
};

const deleteProduct = async (req, res) => {
    const { user_id } = req.body;
    const { product_id } = req.params;
  
    try {
      // Cek apakah user_id memiliki role seller dan memiliki toko dengan produk_id
      const user = await models.User.findOne({
        where: { user_id, role: "seller" },
      });
      const product = await models.Produk.findOne({ where: { product_id } });
  
      if (!user || !product || product.toko_id !== user_id) {
        return res
          .status(403)
          .send("Anda tidak memiliki izin untuk menghapus produk ini.");
      }
  
      await models.Produk.destroy({ where: { product_id } }); // Hapus produk berdasarkan ID
      res.send("Produk berhasil dihapus.");
    } catch (error) {
      console.error(error);
      res.status(500).send("Terjadi kesalahan saat mencoba menghapus produk.");
    }
  };
  

  const viewProducts = async (req, res) => {
    const { user_id } = req.params;
  
    try {
      // Cek apakah user_id memiliki role seller
      const user = await models.User.findOne({
        where: { user_id, role: "seller" },
      });
  
      if (!user) {
        return res
          .status(403)
          .send("Anda tidak memiliki izin untuk melihat produk.");
      }
  
      const products = await models.Produk.findAll({
        where: { toko_id: user_id },
      });
      res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).send("Terjadi kesalahan saat mencoba melihat produk.");
    }
  };
  
  

module.exports = {
  createStore,
  addProduct,
  editProduct,
  deleteProduct,
  viewProducts,
};

const generateStoreId = async () => {
  try {
    const highestStore = await models.Toko.findOne({
      attributes: [
        [models.sequelize.fn("max", models.sequelize.col("toko_id")), "max_id"],
      ],
    });

    let nextId = 1;

    if (highestStore && highestStore.dataValues.max_id) {
      nextId = parseInt(highestStore.dataValues.max_id) + 1;
    }

    return nextId.toString();
  } catch (error) {
    console.error(error);
    throw new Error("Gagal menghasilkan ID toko.");
  }
};

const generateProductId = async () => {
  try {
    const highestProduct = await models.Produk.max("product_id");

    let nextId = 1;

    if (highestProduct) {
      nextId = parseInt(highestProduct) + 1;
    }

    return nextId.toString();
  } catch (error) {
    console.error(error);
    throw new Error("Gagal menghasilkan ID produk.");
  }
};
