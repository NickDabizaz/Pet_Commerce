module.exports = (sequelize, DataTypes) => {
    const ShoppingCart = sequelize.define('ShoppingCart', {
      cart_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      qty: DataTypes.INTEGER
    },
    {
      paranoid: true
    });
  
    ShoppingCart.associate = (models) => {
      ShoppingCart.belongsTo(models.User, { foreignKey: 'user_id' });
      ShoppingCart.belongsTo(models.Product, { foreignKey: 'product_id' });
    };
  
    return ShoppingCart;
  };