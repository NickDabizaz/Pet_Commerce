const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Registration process
router.post('/register', userController.register); 

// Login process
router.post('/login', userController.login);

// Logout process
router.post('/logout', userController.logout);

module.exports = router;