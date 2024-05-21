const { BLOG_DETAIL_ENDPOINT } = require('../utils/urlHelper')
const blogDetailController = require('../controllers/blogDetailController')

const handleBlogDetailRouter = (req, res) => {

    const { url } = req

    switch (url) {
        case BLOG_DETAIL_ENDPOINT:
            blogDetailController.getBlogDetailPage(req, res)
            break;
    }
}

module.exports = {
    handleBlogDetailRouter
}