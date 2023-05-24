const express = require('express');
const router = express.Router();
const {signup} = require('../controllers/costumerController');

// Route for creating a new user
router.post('/signup', signup);

module.exports = router;