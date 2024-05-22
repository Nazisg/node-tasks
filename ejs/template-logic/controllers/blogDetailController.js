const fs = require('fs');
const path = require('path');
const getRootPath = require('../utils/root-path');
const ejs = require('ejs');
const blogService = require('../services/blog-service'); 

const getBlogDetailPage = async (req, res) => {
    const htmlFilePath = path.join(getRootPath(), 'views', 'pages', 'blog-detail.ejs');
    // const blogs = await blogService.getAllBlogs();

    // const { url } = req;
    // const id = url.split('/')[3];
    // const blog = blogs?.find((b) => b.id == id);

    fs.readFile(htmlFilePath, 'utf-8', (err,data) => {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'})
            res.end('Internal server error')
        }
        // const datas = {
        //     rootPath: getRootPath(),
        //     blog: blog && blog
        // };
        
        const renderedHTML = ejs.render(data,{rootPath:getRootPath()})
        res.writeHead(200,{'Content-Type': 'text/html'})
        res.end(renderedHTML)
  
    })
}

module.exports = { getBlogDetailPage };