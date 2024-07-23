const userRouter = require('./userRoutes')
const bookRouter = require('./booksRoutes')
const authRouter = require('../routes/authRoutes')

const express = require('express')
const authenticateUser = require('../middlewares/auth')
const router = express()

router.use('/books', authenticateUser, bookRouter)
router.use('/users', userRouter)
router.use('/auth', authRouter)

module.exports = router