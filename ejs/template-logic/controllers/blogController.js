const fs = require('fs')
const path = require('path')
const getRootPath = require('../utils/root-path')
const ejs = require('ejs')
const blogService = require('../services/blog-service')

const getBlogPage = async (req, res) => {
    const htmlFilePath = path.join(getRootPath(), 'views', 'pages', 'blog.ejs')
    const blogs =  await blogService.getAllBlogs()

    fs.readFile(htmlFilePath, 'utf-8', (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' })
            res.end('Internal server error')
        }
        const datas = {
            rootPath: getRootPath(),
            blogs: blogs
        }

        const renderedHTML = ejs.render(data,datas)
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(renderedHTML)
    })
}

module.exports = { getBlogPage }