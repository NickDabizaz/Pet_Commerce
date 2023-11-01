const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/users', adminController.viewAllUsers);
router.delete('/users/:user_id', adminController.deleteUser);

module.exports = router;
