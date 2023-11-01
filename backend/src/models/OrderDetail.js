module.exports = (sequelize, DataTypes) => {
    const OrderDetail = sequelize.define('OrderDetail', {
      detail_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      qty: DataTypes.INTEGER,
      subtotal: DataTypes.INTEGER
    }, 
    {
      paranoid: true
    });
  
    OrderDetail.associate = (models) => {
      OrderDetail.belongsTo(models.Order, { foreignKey: 'order_id'});
      OrderDetail.belongsTo(models.Product, { foreignKey: 'product_id'});
    };
  
    return OrderDetail;
  };