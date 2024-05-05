const fs = require('fs')
const path = require('path')

const getAllCountries = (res) => {
    const parentFol = path.join(__dirname, '..')
    const dbJsonPath = path.join(parentFol, 'db.json')
    const data = fs.readFile(dbJsonPath, 'utf-8', (err, data) => {
        if (err) {

        }
        counData = JSON.parse(data).countries
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.write(JSON.stringify(counData))
        res.end()
    })
}

const countryActions = {
    getAllCountries
}

module.exports = countryActions