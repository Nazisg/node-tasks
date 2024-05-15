const categoryController= require('../controllers/categoryController')
const { CATEGORY_ENDPOINT } = require('../utils/urlHelper')

const handleCategoryRouter = (req, res) => {
    const { url } = req

    switch (url) {
        case CATEGORY_ENDPOINT:
            categoryController.getCategoryPage(req,res)
    }
}

module.exports = { handleCategoryRouter }