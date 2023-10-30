const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Proses registrasi
router.post('/register', userController.register);

// Proses login
router.post('/login', userController.login);

// Proses logout
router.post('/logout', userController.logout);

module.exports = router;
