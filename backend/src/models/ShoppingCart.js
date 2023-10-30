module.exports = (sequelize, DataTypes) => {
    const ShoppingCart = sequelize.define('ShoppingCart', {
      cart_id: {
        type: DataTypes.STRING(10),
        primaryKey: true,
      },
      qty: DataTypes.INTEGER,
    });
  
    ShoppingCart.associate = (models) => {
      ShoppingCart.belongsTo(models.User, { foreignKey: 'user_id' });
      ShoppingCart.belongsTo(models.Produk, { foreignKey: 'product_id' });
    };
  
    return ShoppingCart;
  };
  