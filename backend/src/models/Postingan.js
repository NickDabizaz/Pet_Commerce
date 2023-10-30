module.exports = (sequelize, DataTypes) => {
    const Postingan = sequelize.define('Postingan', {
      postingan_id: {
        type: DataTypes.STRING(10),
        primaryKey: true,
      },
      judul: DataTypes.STRING(255),
      gambar: DataTypes.STRING(255),
    });
  
    Postingan.associate = (models) => {
      Postingan.belongsTo(models.User, { foreignKey: 'user_id' });
      Postingan.belongsTo(models.Toko, { foreignKey: 'toko_id' });
      Postingan.hasMany(models.Komentar, { foreignKey: 'postingan_id' });
      Postingan.hasMany(models.LikePostingan, { foreignKey: 'postingan_id' });
      Postingan.hasMany(models.SharePostingan, { foreignKey: 'postingan_id' });
    };
  
    return Postingan;
  };
  