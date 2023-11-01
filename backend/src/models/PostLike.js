module.exports = (sequelize, DataTypes) => {
    const PostLike = sequelize.define('PostLike', {
      like_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      }
    },
    {
      paranoid: true
    });
  
    PostLike.associate = (models) => {
      PostLike.belongsTo(models.User, { foreignKey: 'user_id' });
      PostLike.belongsTo(models.Post, { foreignKey: 'post_id' });
    };
  
    return PostLike;
  };