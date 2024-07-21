const defaultRouter = require('./default-route')
const express = require('express')
const router = express.Router()
const blogRouter = require('./blog-route')
const userRouter = require('./user-route')

router.use('/', defaultRouter)
router.use('/blogs', blogRouter)
router.use('/user', userRouter)

module.exports = router