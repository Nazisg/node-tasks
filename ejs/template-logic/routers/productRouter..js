const productController = require('../controllers/productController')
const { PRODUCT_ENDPOINT } = require('../utils/urlHelper')

const handleProductRouter = (req, res) => {
    const { url } = req

    switch (url) {
        case PRODUCT_ENDPOINT:
            productController.getProductPage(req, res)
    }
}

module.exports = { handleProductRouter }