const express = require('express')
const dotenv = require('dotenv')
const app = express()
dotenv.config()
const appRouter = require('./routes')
const authenticateUser = require('./middlewares/auth')

const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/', appRouter)
// app.use(authenticateUser)

app.listen(PORT, () => {
    console.log(`Server listening PORT:${PORT}`)
})