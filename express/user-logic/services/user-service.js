const pool = require('../config/db')
const { DATA_GET_SUCCESSFULLY, DUPLICATE_USER, DATA_ADDED_SUCCESSFULLY } = require('../utils/constants/messages')
const { SuccessResult, ErrorResult } = require('../utils/results/result')
const bcryptjs = require('bcryptjs')
const getAllUsers = async () => {
    try {
        const res = await pool.query('select * from users where u deleted = 0')
        return new SuccessResult(DATA_GET_SUCCESSFULLY)
    } catch (error) {
        return new ErrorResult(error.message)
    }
}
const getUserByUsername = async username => {
    try {
        const res = await pool.query('select * from users u where u.deleted = 0 and u.username = $1', [username])
        return new SuccessResult(DATA_GET_SUCCESSFULLY, res.rows[0])
    } catch (error) {
        return new ErrorResult(error.message)
    }
}
const getOneUser = async id => {
    try {
        const res = await pool.query('select * from users u where u.deleted=0 and u.isActive = true and u.id = $1', [id])
        return new SuccessResult(DATA_GET_SUCCESSFULLY, res.rows[0])
    } catch (error) {
        return new ErrorResult(error.message)
    }
}

const getUsersByActiveStatus = async status => {
    try {
        const res = await pool.query('select * from users u where u.deleted=0 and u.isActive = $1', [status])
        return new SuccessResult(DATA_GET_SUCCESSFULLY, res.rows)
    } catch (error) {
        return new ErrorResult(error.message)
    }
}

const getOneUserByActiveStatus = async (id, status) => {
    try {
        const res = await pool.query('select * from users u where u.deleted=0 and u.isActive = $1 and u.id = $2', [status, id])
        return new SuccessResult(DATA_GET_SUCCESSFULLY, res.rows[0])
    } catch (error) {
        return new ErrorResult(error.message)
    }
}

const addUser = async user => {
    try {
        const validator = new UserValidation(user)
        const validationResult = validator.validate()
        if (!validationResult.isValid)
            return new ErrorResult(validationResult.toString())
        const businessResults = await checkDuplicateUser(user)
        if (!businessResults.success) {
            return businessResults.data
        }
        user.password = await bcryptjs.hash(user.password,10)
        const res = await pool.query('call add_user($1,$2,$3)', [user.username, user.password, user.isActive])
        const addedUser = await getUserByUsername(user.username)
        return new SuccessResult(DATA_ADDED_SUCCESSFULLY, addedUser.data)

    } catch (error) {
        return new ErrorResult(error.message)

    }
}

const checkDuplicateUser = async (user) => {
    const isExistonUser = await getUserByUsername(user.username)
    if (isExistonUser.data)
        return new ErrorResult(DUPLICATE_USER)

    return new SuccessResult()
}

module.exports ={
    getAllUsers,
    getOneUser,
    getOneUserByActiveStatus,
    getUserByUsername,
    getUsersByActiveStatus,
    addUser
}