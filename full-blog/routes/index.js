const defaultRouter = require('./default-route')
const express = require('express')
const router = express.Router()
const blogRouter = require('./blog-route')

router.use('/', defaultRouter)
router.use('/blogs', blogRouter)

module.exports = router