module.exports = (sequelize, DataTypes) => {
    const DetailTransaksi = sequelize.define('DetailTransaksi', {
      detail_transaksi_id: {
        type: DataTypes.STRING(10),
        primaryKey: true,
      },
      qty: DataTypes.INTEGER,
      subtotal: DataTypes.INTEGER,
    });
  
    DetailTransaksi.associate = (models) => {
      DetailTransaksi.belongsTo(models.Transaksi, { foreignKey: 'transaksi_id' });
      DetailTransaksi.belongsTo(models.Produk, { foreignKey: 'product_id' });
    };
  
    return DetailTransaksi;
  };
  