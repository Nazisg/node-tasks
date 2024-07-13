const express = require('express')
const dotenv = require('dotenv')
const categoryController = require('./controllers/category-controller')
const productController = require('./controllers/product-controller')
const app = express()
const categoryRouter = require('./routes/category-route')
dotenv.config()

const PORT = process.env.PORT | 4000

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/about', (req, res) => {
    res.send('Aboust')
})

app.get('/products', productController.getAllProducts)
app.use('/categories', categoryRouter)

app.listen(PORT, () => {
    console.log(`Server listening PORT:${PORT}`)
})

