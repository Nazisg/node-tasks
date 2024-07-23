const express = require('express')
const dotenv = require('dotenv')
const categoryController = require('./controllers/category-controller')
const productController = require('./controllers/product-controller')
const app = express()
dotenv.config()
const appRouter = require('./routes')
const authenticateUser = require('./middleware/auth')

const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/api',appRouter)
// app.use(authenticateUser)

app.listen(PORT, () => {
    console.log(`Server listening PORT:${PORT}`)
})