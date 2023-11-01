module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
      order_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      order_date: DataTypes.DATE,
      total_price: DataTypes.INTEGER
    },
    {
      paranoid: true
    });
  
    Order.associate = (models) => {
      Order.belongsTo(models.User, { foreignKey: 'user_id' });
      Order.hasMany(models.OrderDetail, { foreignKey: 'order_id' });
    };
  
    return Order;
  };