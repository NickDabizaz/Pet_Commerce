module.exports = (sequelize, DataTypes) => {
    const Komentar = sequelize.define('Komentar', {
      komentar_id: {
        type: DataTypes.STRING(10),
        primaryKey: true,
      },
      komentar_text: DataTypes.TEXT,
      waktu_komentar: DataTypes.DATE,
    });
  
    Komentar.associate = (models) => {
      Komentar.belongsTo(models.User, { foreignKey: 'user_id' });
      Komentar.belongsTo(models.Postingan, { foreignKey: 'postingan_id' });
    };
  
    return Komentar;
  };
  