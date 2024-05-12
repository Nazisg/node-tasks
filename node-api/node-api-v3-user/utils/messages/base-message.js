const generateNotNullMessage = fieldname => {
    return `${fieldname} must be required`
}

const generateMinAndMAxLengthMessage = (fieldname, min, max) => {
    return `${fieldname} must between ${min} and ${max}`
}

module.exports = {
    generateNotNullMessage,
    generateMinAndMAxLengthMessage
}