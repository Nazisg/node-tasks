const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    fs.readFile('db.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err)
        }
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON(data))
    })

})

server.listen(4000, () => {
    console.log('My server listening 4000 port')
})