module.exports = (sequelize, DataTypes) => {
    const NotifikasiTransaksi = sequelize.define('NotifikasiTransaksi', {
      notifikasi_id: {
        type: DataTypes.STRING(10),
        primaryKey: true,
      },
      tanggal: DataTypes.DATE,
      pesan: DataTypes.TEXT,
    });
  
    NotifikasiTransaksi.associate = (models) => {
      NotifikasiTransaksi.belongsTo(models.User, { foreignKey: 'user_id' });
    };
  
    return NotifikasiTransaksi;
  };
  