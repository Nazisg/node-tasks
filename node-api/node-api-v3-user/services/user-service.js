const { JSON_MODEL_KEYS } = require('../utils/enums')
const { userValidate } = require('../validations/user-validation')
const baseService = require('./base-service')
const result = require('../utils/results/result')
const validatePassword = require('../validations/password-validation')
const { DATA_ADDED_SUCCESSFULLY } = require('../validations/messages/password-messages')
const bcrypt = require('bcrypt')

async function getAllUsers() {
    return await baseService.getData(JSON_MODEL_KEYS.USERS)

}

async function addUser(model) {
    //validate user model
    const validationResult = userValidate(model)
    if (!validationResult.success) return validationResult;

    //validate password
    const passwordValidationResult = validatePassword(model.password)
    if (!passwordValidationResult.success) return passwordValidationResult

    const saltRounds = 10;
    const saltKey = await bcrypt.genSalt(saltRounds)
    model.password = await bcrypt.hash(model.password, saltKey)


    const data = await baseService.insertData(JSON_MODEL_KEYS.USERS, model)
    return new result.SuccessResult(DATA_ADDED_SUCCESSFULLY, data)
}
async function verifyUser(user) {
    const myAllUsers = await baseService.getData(JSON_MODEL_KEYS)
    const existingUser = myAllUsers.find(x => x.username === user.username)
    if (existingUser === undefined)
        return new result.ErrorResult()
}

module.exports = {
    getAllUsers,
    addUser
}