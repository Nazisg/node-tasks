const userController = require('../controllers/user-controller')

const express = require('express')
const router = express.Router()

router.get('./getalluser', userController.getAllUsers)
router.get('./getoneuser/:id', userController.getOneUser)
router.get('./getoneuserbyactivestatus/:id', userController.getOneUserByActiveStatus)
router.get('./getuserbyusername/:username', userController.getUserByUsername)
router.get('./getusersbyactivestatus', userController.getUsersByActiveStatus)
router.post('./', userController.addUser)

module.exports = router