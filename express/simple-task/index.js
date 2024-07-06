const express = require('express')
const dotenv = require('dotenv')
const categoryController = require('./controllers/category-controller')
const productController = require('./controllers/product-controller')
const app = express()

const PORT = process.env.PORT | 4000


app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/about', (req, res) => {
    res.send('Aboust')
})

app.get('/categories', categoryController.getAllCategories)
app.get('/products', productController.getAllProducts)

app.listen(PORT, () => {
    console.log(`Server listening PORT:${PORT}`)
})

