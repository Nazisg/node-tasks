const pool = require('../config/db')
const UserLoginDTO = require('../models/user/userLogin')
const AccessToken = require('../utils/auth/access-token')
const { USERNAME_NOT_EXIST, USER_DEACTIVE, PASSWORD_INCORRECT, USER_SUCCESSFULLY } = require('../utils/constants/userMessages')
const { ErrorResult, SuccessResult } = require('../utils/results/result')
const userService = require('./user-service')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
/**
 * @param {UserLoginDTO} userLoginDto
 */

const loginUser = async (userLoginDto) => {
    //check username exists
    const userExists = await userService.getUserByUsername(userLoginDto.username)
    if (!userExists.data) {
        return new ErrorResult(USERNAME_NOT_EXIST)
    }

    //check user isactive issue

    if (!userExists.data.isactive) {
        return new ErrorResult(USER_DEACTIVE)
    }
    const passwordCheckingResult = await bcryptjs.compare(userLoginDto.password, userExists.data.password)
    if (!passwordCheckingResult) {
        return new ErrorResult(PASSWORD_INCORRECT)
    }
    const token = await jwt.sign({ username: userExists.data.username }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' })
    const expireData = new Date()
    expireData.setHours(expireData.getHours() + 1)
    const accessToken = new AccessToken(token, expireData.toString())
    return new SuccessResult(USER_SUCCESSFULLY, accessToken)
}
module.exports = {
    loginUser
}
