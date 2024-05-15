const urlHelper = require("../utils/urlHelper")
const generateResponse = require('../utils/responseGenerator')
const { handleDefaultRouter } = require("./defaultRouter")
const { handleCategoryRouter } = require("./categoryRouter")
const { handleProductRouter } = require("./productRouter.")

const handleRoutes = (req, res) => {
    const { url } = req;
    let newUrl = `/${url.split('/')[1]}`;

    switch (newUrl) {
        case urlHelper.DEFAULT_ENDPOINT:
            handleDefaultRouter(req,res)
            break;
        case urlHelper.CATEGORY_ENDPOINT:
            handleCategoryRouter(req,res)
            break;
        case urlHelper.PRODUCT_ENDPOINT:
            handleProductRouter(req,res)
            break;
        default:
            generateResponse(res, 404, { "message": 'Any error occured' })
            break;
    }
}
module.exports = { handleRoutes }