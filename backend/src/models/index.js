const { Sequelize } = require('sequelize');
const config = require('../config/config.json');

const sequelize = new Sequelize(config.development);

const User = require('./User.js')(sequelize, Sequelize);
const Kategori = require('./Kategori.js')(sequelize, Sequelize);
const Produk = require('./Produk.js')(sequelize, Sequelize);
const Transaksi = require('./Transaksi.js')(sequelize, Sequelize);
const DetailTransaksi = require('./DetailTransaksi.js')(sequelize, Sequelize);
const Review = require('./Review.js')(sequelize, Sequelize);
const Postingan = require('./Postingan.js')(sequelize, Sequelize);
const Komentar = require('./Komentar.js')(sequelize, Sequelize);
const LikePostingan = require('./LikePostingan.js')(sequelize, Sequelize);
const SharePostingan = require('./SharePostingan.js')(sequelize, Sequelize);
const NotifikasiTransaksi = require('./NotifikasiTransaksi.js')(sequelize, Sequelize);
const Toko = require('./Toko.js')(sequelize, Sequelize);
const ShoppingCart = require('./ShoppingCart.js')(sequelize, Sequelize);

User.associate(sequelize.models);
Kategori.associate(sequelize.models);
Produk.associate(sequelize.models);
Transaksi.associate(sequelize.models);
DetailTransaksi.associate(sequelize.models);
Review.associate(sequelize.models);
Postingan.associate(sequelize.models);
Komentar.associate(sequelize.models);
LikePostingan.associate(sequelize.models);
SharePostingan.associate(sequelize.models);
NotifikasiTransaksi.associate(sequelize.models);
Toko.associate(sequelize.models);
ShoppingCart.associate(sequelize.models);

const models = {
  User,
  Kategori,
  Produk,
  Transaksi,
  DetailTransaksi,
  Review,
  Postingan,
  Komentar,
  LikePostingan,
  SharePostingan,
  NotifikasiTransaksi,
  Toko,
  ShoppingCart
};

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
