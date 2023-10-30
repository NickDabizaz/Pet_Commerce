module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    user_id: {
      type: DataTypes.STRING(10),
      primaryKey: true,
    },
    nama: DataTypes.STRING(255),
    email: DataTypes.STRING(255),
    password: DataTypes.STRING(255),
    alamat: DataTypes.STRING(255),
    nomor_telepon: DataTypes.STRING(15),
    token: DataTypes.STRING(255),
    role: DataTypes.STRING(20), // Tambahkan kolom role
  });

  User.associate = (models) => {
    User.hasMany(models.Transaksi, { foreignKey: "user_id" });
    User.hasMany(models.Review, { foreignKey: "user_id" });
    User.hasMany(models.Postingan, { foreignKey: "user_id" });
    User.hasMany(models.Komentar, { foreignKey: "user_id" });
    User.hasMany(models.LikePostingan, { foreignKey: "user_id" });
    User.hasMany(models.SharePostingan, { foreignKey: "user_id" });
    User.hasMany(models.NotifikasiTransaksi, { foreignKey: "user_id" });
    User.hasMany(models.Toko, { foreignKey: "user_id" });
    User.hasMany(models.ShoppingCart, { foreignKey: "user_id" });
  };

  return User;
};
