const express = require("express")
const authController = require('../controllers/auth')
const router = express.Router();

// ROUTES

router.post('/register',authController.register)
router.post('/login',authController.login)

module.exports = router