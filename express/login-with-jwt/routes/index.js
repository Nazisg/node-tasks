const userRouter = require('./user-route')
const categoryRouter = require('./category-route')
const productController = require('../controllers/product-controller')
const authRouter = require('../routes/auth-route')

const express = require('express')
const authenticateUser = require('../middleware/auth')
const router = express()

router.get('/products', productController.getAllProducts)
router.use('/categories', categoryRouter)
router.use('/users', userRouter)
router.use('/auth', authRouter)

module.exports = router