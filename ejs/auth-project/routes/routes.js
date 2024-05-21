const defaultHandler = require('./defaultRouter')
const authHandler = require('./authRouter')

module.exports = [
    defaultHandler,
    authHandler
]