const { JSON_MODEL_KEYS } = require('../utils/enums')
const { userValidate } = require('../validations/user-validation')
const baseService = require('./base-service')
const result = require('../utils/results/result')
const validatePassword = require('../validations/password-validation')
const { DATA_ADDED_SUCCESSFULLY } = require('../validations/messages/password-messages')

async function getAllUsers() {
    return await baseService.getData(JSON_MODEL_KEYS.USERS)

}

async function addUser(model) {
    //validate user model
    const validationResult = userValidate(model)
    if (!validationResult.success) return validationResult;

    //validate password
    const passwordValidationResult = validatePassword(model.password)
    if(!passwordValidationResult.success) return passwordValidationResult


    const data = await baseService.insertData(JSON_MODEL_KEYS.USERS, model)
    return new result.SuccessResult(DATA_ADDED_SUCCESSFULLY,data)
}

module.exports = {
    getAllUsers,
    addUser
}