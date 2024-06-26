const { LOGGING_TYPES } = require("./constants/constants");
const LogModel = require("./logging/log-model");
const Logger = require("./logging/logger");

const newTestMethod = async () => {
    try {
        const _logger = new Logger(LOGGING_TYPES.SUCCESS)
        await _logger.log(new LogModel({
            name: 'Naz'
        }))
    } catch (error) {
        const logger = new Logger(LOGGING_TYPES.ERROR)
        await logger.log(new LogModel({
            error: error.stack
        }))
    }
}

newTestMethod()