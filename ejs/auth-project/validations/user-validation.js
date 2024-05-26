const { generateNotNullMessage, generateMinAndMAxLengthMessage } = require("../utils/messages/base-message")
const { ValidationResult } = require("./validation-result")
const result = require('../utils/results/result')
const { validationResultHelper } = require("../utils/common")

const userValidate = (user) => {
    const validationResult = validationResultHelper
        (
            checkUserNameNotNull(user),
            checkUserMinAndMax(user),
        )
    if (validationResult == null) return new result.SuccessResult()

    return new result.ErrorResult(validationResult.message)
}

const checkUserNameNotNull = (user) => {
    if (user.username === '') {
        return new ValidationResult(false, generateNotNullMessage('Username'))
    }
    return new ValidationResult(true)
}

const checkUserMinAndMax = (user) => {
    if (user.username.length < 5 || user.username.length > 20) {
        return new ValidationResult(false, generateMinAndMAxLengthMessage('Username', 3, 20))
    }
    return new ValidationResult(true)
}

module.exports = {
    userValidate
}