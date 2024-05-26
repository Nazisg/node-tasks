const baseService = require("../services/base-service");
const bcyrpt = require('bcrypt');
const { JSON_MODEL_KEYS } = require('../utils/enum')
const { userValidate } = require('../validations/user-validation')
const result = require('../utils/results/result')
const validatePassword = require('../validations/password-validation')
const { DATA_ADDED_SUCCESSFULLY } = require('../utils/messages/password-messages')
const { USER_USERNAME_DOESNT_EXIST, USER_PASSWORD_INCORRECT, USER_IS_BLOCK, USER_LOGIN_COMPLETE } = require('../utils/messages/user-message')

async function insertData(model) {
     //validate user model
    const validationResult = userValidate(model)
    if (!validationResult.success) return validationResult;

    //validate password
    const passwordValidationResult = validatePassword(model.password)
    if (!passwordValidationResult.success) return passwordValidationResult

    const saltRounds = 10;
    const saltKey = await bcyrpt.genSalt(saltRounds)
    model.password = await bcyrpt.hash(model.password, saltKey)

    const data = await baseService.insertData(JSON_MODEL_KEYS.USERS, model)
    return new result.SuccessResult(DATA_ADDED_SUCCESSFULLY, data)
};

async function verifyUser(user) {
    const myAllUsers = await baseService.getAllJsonData(JSON_MODEL_KEYS.USERS)
    const existingUser = myAllUsers.users.find(x=>x.username === user.username) 
    if (existingUser === undefined)
        return new result.ErrorResult(USER_USERNAME_DOESNT_EXIST)

    const passwordVerifyResult = await bcyrpt.compare(user.password,existingUser.password)

    if(!passwordVerifyResult) 
        return new  result.ErrorResult(USER_PASSWORD_INCORRECT)

    if(!existingUser.isActive) 
        return new result.ErrorResult(USER_IS_BLOCK)

    return new result.SuccessResult(USER_LOGIN_COMPLETE)
};

module.exports = { insertData, verifyUser };