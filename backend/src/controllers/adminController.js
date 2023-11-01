const models = require('../models');

const viewAllUsers = async (req, res) => {

  try {

    // Get all users
    const users = await models.User.findAll();

    // Return users
    res.json(users);

  } catch (error) {
    console.error(error);
    res.status(500).send("Error getting users");
  }

};

const deleteUser = async (req, res) => {

  const { user_id } = req.params;

  try {

    // Find target user
    const user = await models.User.findByPk(user_id);

    if (!user) {
      return res.status(404).send("User not found");
    }

    // Delete user
    await user.destroy();

    // Return response
    res.send("User deleted successfully");

  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting user");
  }

};

module.exports = {
  viewAllUsers,
  deleteUser
};