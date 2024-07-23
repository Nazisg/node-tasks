const UserAddDto = require('../models/user/userAdd')
const userService = require('../services/userService')

const getAllUsers = async (req, res) => {
    const result = await userService.getAllUsers()
    res.json(result)
}

const getOneUser = async (req, res) => {
    const result = await userService.getOneUser(req.params.id)
    res.json(result)
}

const getUserByUsername = async (req, res) => {
    const result = await userService.getUserByUsername(req.params.username)
    res.json(result)
}

const addUser = async (req, res) => {
    const userDTO = new UserAddDto(req.body)
    await userService.addUser(userDTO)
    res.status(200).json({ message: "User added successfully" });
}

const updateUser = async (req, res) => {
    await userService.updateUser(req.params.id, req.body)
    res.status(200).json({ message: "User has been updated successfully" });
}

const deleteUser = async (req, res) => {
    await userService.deleteUser(req.params.id)
    res.status(200).json({ message: "User deleted successfully" });

}

module.exports = {
    getAllUsers,
    getOneUser,
    addUser,
    updateUser,
    deleteUser,
    getUserByUsername
}