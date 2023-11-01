const models = require('../models');

const viewAllUsers = async (req, res) => {
  try {
    const users = await models.User.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send("Terjadi kesalahan saat mencoba melihat semua pengguna.");
  }
};

const deleteUser = async (req, res) => {
  try {
    const { user_id } = req.params;
    const targetUser = await models.User.findOne({
      where: { user_id: user_id },
    });

    if (!targetUser) {
      return res.status(404).send("Pengguna tidak ditemukan.");
    }

    await targetUser.destroy();
    res.send("Pengguna berhasil dihapus.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Terjadi kesalahan saat mencoba menghapus pengguna.");
  }
};

module.exports = {
  viewAllUsers,
  deleteUser,
};
