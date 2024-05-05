const fs = require('fs')
const path = require('path')

const getAllAbout = (res) => {
    const parentFol = path.join(__dirname, '..')
    const dbJsonPath = path.join(parentFol, 'db.json')
    const data = fs.readFile(dbJsonPath, 'utf-8', (err, data) => {
        if (err) {

        }
        aboutData = JSON.parse(data).about
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.write(JSON.stringify(aboutData))
        res.end()
    })
}

const aboutActions = {
    getAllAbout
}

module.exports = aboutActions