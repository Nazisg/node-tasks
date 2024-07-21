const express = require('express')
const router = express.Router()
const userController = require('../controllers/user-controller')

router.get('/register', userController.registerView)
router.post('/register', userController.register)
router.get('/login', userController.loginView)
router.post('/login', userController.login)

module.exports = router