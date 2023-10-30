module.exports = (sequelize, DataTypes) => {
    const Toko = sequelize.define('Toko', {
      toko_id: {
        type: DataTypes.STRING(10),
        primaryKey: true,
      },
      nama_toko: DataTypes.STRING(255),
      deskripsi_toko: DataTypes.TEXT,
    });
  
    Toko.associate = (models) => {
      Toko.belongsTo(models.User, { foreignKey: 'user_id' });
      Toko.hasMany(models.Postingan, { foreignKey: 'toko_id' });
      Toko.hasMany(models.Produk, { foreignKey: 'toko_id' });
    };
  
    return Toko;
  };
  