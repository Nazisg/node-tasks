const authController = require('../controllers/authController')
const express = require('express')
const router = express.Router()

router.post('/verifyUser', authController.loginUser)

module.exports = router