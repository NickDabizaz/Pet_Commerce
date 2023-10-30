module.exports = (sequelize, DataTypes) => {
    const Transaksi = sequelize.define('Transaksi', {
      transaksi_id: {
        type: DataTypes.STRING(10),
        primaryKey: true,
      },
      tanggal_transaksi: DataTypes.DATE,
      total_harga: DataTypes.INTEGER,
    });
  
    Transaksi.associate = (models) => {
      Transaksi.belongsTo(models.User, { foreignKey: 'user_id' });
      Transaksi.hasMany(models.DetailTransaksi, { foreignKey: 'transaksi_id' });
    };
  
    return Transaksi;
  };
  