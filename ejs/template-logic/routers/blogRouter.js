const { BLOG_ENDPOINT } = require('../utils/urlHelper')
const blogController = require('../controllers/blogController')

const handleBlogRouter = (req, res) => {

    const { url } = req

    switch (url) {
        case BLOG_ENDPOINT:
            blogController.getBlogPage(req, res)
            break;
    }
}

module.exports = {
    handleBlogRouter
}