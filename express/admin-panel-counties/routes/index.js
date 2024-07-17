const defaultRouter = require('./default-route')
const express = require('express')
const router = express.Router()
const countryRouter = require('./country-route')

router.use('/', defaultRouter)
router.use('/countries', countryRouter)

module.exports = router