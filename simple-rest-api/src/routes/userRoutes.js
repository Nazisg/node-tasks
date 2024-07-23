const userController = require('../controllers/userController')
const express = require('express')
const authenticateUser = require('../middlewares/auth')
const router = express.Router()

router.get('/', userController.getAllUsers)
router.get('/:id', userController.getOneUser)
router.post('/', userController.addUser)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)

module.exports = router