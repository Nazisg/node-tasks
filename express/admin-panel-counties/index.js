const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
const Router = require('./routes')

dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use('/', Router)

app.listen(PORT, () => {
    console.log(`Server listening PORT:${PORT}`)
})

