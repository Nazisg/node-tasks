const winston = require('winston');
const { combine, timestamp, json, prettyPrint, errors } = winston.format
const TelegramTransport = require('./telegram-log');

const telegramLogger = new TelegramTransport({
    token: '7267021299:AAF07qsUc8n0deXht-0puY59_nolswY34sw',
    chatId: '1086894870',
    level: 'error',
});

const logger = winston.createLogger({
    level: 'info',
    format: combine(
        errors({ stack: true }),
        timestamp(),
        json(),
        prettyPrint()
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({filename:'index.log', level:'error'}),
        telegramLogger,
    ],
});

const requestLog = { method: 'GET', isAuthenticated: false }
const childLogger = logger.child(requestLog)

childLogger.info('An info log')
childLogger.error('An error log', new Error('504 Gateway Timeout'))
