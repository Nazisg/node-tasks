const fs = require('fs')
const path = require('path')

const getAllFaq = (res) => {
    const parentFol = path.join(__dirname, '..')
    const dbJsonPath = path.join(parentFol, 'db.json')
    const data = fs.readFile(dbJsonPath, 'utf-8', (err, data) => {
        if (err) {

        }
        faqData = JSON.parse(data).faq
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.write(JSON.stringify(faqData))
        res.end()
    })
}

const faqActions = {
    getAllFaq
}

module.exports = faqActions