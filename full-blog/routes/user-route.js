const express = require('express')
const router = express.Router()
const userController = require('../controllers/user-controller')

router.get('/register', userController.registerView)
router.post('/register', userController.register)
router.get('/login', userController.loginView)
router.post('/login', userController.login)
router.get('/logout', userController.logout);


module.exports = router