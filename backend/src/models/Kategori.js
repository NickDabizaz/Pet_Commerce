module.exports = (sequelize, DataTypes) => {
    const Kategori = sequelize.define('Kategori', {
      kategori_id: {
        type: DataTypes.STRING(10),
        primaryKey: true,
      },
      nama_kategori: DataTypes.STRING(255),
    });
  
    Kategori.associate = (models) => {
      Kategori.hasMany(models.Produk, { foreignKey: 'kategori_id' });
    };
  
    return Kategori;
  };
  