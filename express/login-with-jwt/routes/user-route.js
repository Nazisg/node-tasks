const userController = require('../controllers/user-controller')
const express = require('express')
const authenticateUser = require('../middleware/auth')
const router = express.Router()

router.get('/getalluser', userController.getAllUsers)
router.get('/getusersbyactivestatus', userController.getUsersByActiveStatus)
router.get('/getoneuser/:id', userController.getOneUser)
router.get('/getoneuserbyactivestatus/:id', userController.getOneUserByActiveStatus)
router.get('/getuserbyusername/:username', userController.getUserByUsername)
router.post('/', userController.addUser)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)

module.exports = router