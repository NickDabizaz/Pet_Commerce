module.exports = (sequelize, DataTypes) => {
    const Produk = sequelize.define('Produk', {
      product_id: {
        type: DataTypes.STRING(10),
        primaryKey: true,
      },
      nama_produk: DataTypes.STRING(255),
      harga: DataTypes.INTEGER,
      rating: DataTypes.FLOAT,
      kategori_id: DataTypes.STRING(10), // Tambahkan baris ini
      toko_id: DataTypes.STRING(10), // Tambahkan baris ini
      qty: DataTypes.INTEGER,
    });
  
    Produk.associate = (models) => {
      Produk.belongsTo(models.Kategori, { foreignKey: 'kategori_id' });
      Produk.belongsTo(models.Toko, { foreignKey: 'toko_id' });
      Produk.hasMany(models.DetailTransaksi, { foreignKey: 'product_id' });
      Produk.hasMany(models.Review, { foreignKey: 'product_id' });
      Produk.hasMany(models.ShoppingCart, { foreignKey: 'product_id' });
    };
  
    return Produk;
  };
  