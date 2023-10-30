module.exports = (sequelize, DataTypes) => {
    const LikePostingan = sequelize.define('LikePostingan', {
      like_id: {
        type: DataTypes.STRING(10),
        primaryKey: true,
      },
    });
  
    LikePostingan.associate = (models) => {
      LikePostingan.belongsTo(models.User, { foreignKey: 'user_id' });
      LikePostingan.belongsTo(models.Postingan, { foreignKey: 'postingan_id' });
    };
  
    return LikePostingan;
  };
  