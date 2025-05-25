const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;
// This module defines the authentication routes for user registration and login.
// It uses Express.js to create a router that maps HTTP POST requests to the appropriate controller methods.