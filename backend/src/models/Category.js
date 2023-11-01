module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
      category_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      category_name: DataTypes.STRING(255)
    },
    {
      paranoid: true
    });
  
    Category.associate = (models) => {
      Category.hasMany(models.Product, { foreignKey: 'category_id' });
    };
  
    return Category;
  };