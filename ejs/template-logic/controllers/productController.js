const fs = require('fs')
const path = require('path')
const getRootPath = require('../utils/root-path')

const getProductPage = (req, res) => {
    const htmlFilePath = path.join(getRootPath(), 'views', 'product.html')
    fs.readFile(htmlFilePath, 'utf-8', (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' })
            res.end('Internal server error')

        }

        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(data)
    })
}

module.exports = {getProductPage}