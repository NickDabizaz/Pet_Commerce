module.exports = (sequelize, DataTypes) => {
    const Store = sequelize.define('Store', {
      store_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true  
      },
      store_name: DataTypes.STRING(255),
      store_description: DataTypes.TEXT
    },
    {
      paranoid: true
    });
  
    Store.associate = (models) => {
      Store.belongsTo(models.User, { foreignKey: 'user_id' });
      Store.hasMany(models.Post, { foreignKey: 'store_id' });
      Store.hasMany(models.Product, { foreignKey: 'store_id' });
    };
  
    return Store;
  };