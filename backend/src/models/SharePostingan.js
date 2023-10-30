module.exports = (sequelize, DataTypes) => {
    const SharePostingan = sequelize.define('SharePostingan', {
      share_id: {
        type: DataTypes.STRING(10),
        primaryKey: true,
      },
      link_share: DataTypes.STRING(255),
    });
  
    SharePostingan.associate = (models) => {
      SharePostingan.belongsTo(models.User, { foreignKey: 'user_id' });
      SharePostingan.belongsTo(models.Postingan, { foreignKey: 'postingan_id' });
    };
  
    return SharePostingan;
  };
  