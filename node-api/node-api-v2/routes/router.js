const ENDPOINTS = require("../helper/urlhelper")
const brandRouter = require('./brand-router')
const generateResponse = require('../helper/responseGenerator')

const handleRoutes = (req, res) => {
    const { url } = req

    switch (url) {
        case ENDPOINTS.DEFAULT_ENDPOINT:
            console.log("Home page")
            break;
        case ENDPOINTS.BRAND_ENDPOINT:
            brandRouter.handleBrandRoutes(req, res)
            break;
        default:
            generateResponse(res, 404, { "message": 'Any error occured' })

    }
}
module.exports = { handleRoutes }