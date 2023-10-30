module.exports = (sequelize, DataTypes) => {
    const Review = sequelize.define('Review', {
      review_id: {
        type: DataTypes.STRING(10),
        primaryKey: true,
      },
      rating: DataTypes.FLOAT,
      comment: DataTypes.TEXT,
    });
  
    Review.associate = (models) => {
      Review.belongsTo(models.User, { foreignKey: 'user_id' });
      Review.belongsTo(models.Produk, { foreignKey: 'product_id' });
    };
  
    return Review;
  };
  