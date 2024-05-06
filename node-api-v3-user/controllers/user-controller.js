const User = require('../models/user')
const _userService = require('../services/user-service')
const parseRequestBody = require('../utils/parser')
const generateResponse = require('../utils/responseGenerator')

async function getAllUsers(req, res) {
    const data = await _userService.getAllUsers()
    generateResponse(res, 200, data)
}

async function addUser(req, res) {
    const body = await parseRequestBody(req)
    const user = new User(body.email, body.fullname, body.username, body.password)
    const result = await _userService.addUser(user)
    generateResponse(res, 201, result)
}

module.exports = {
    getAllUsers,
    addUser
}