const ENDPOINTS = require("../helper/urlhelper")
const brandRouter = require('./brand-router')
const generateResponse = require('../helper/responseGenerator')

const handleRoutes = (req, res) => {
    const { url } = req

    let newUrl = `/${url.split('/')[1]}`

    switch (newUrl) {
        case ENDPOINTS.DEFAULT_ENDPOINT:
            console.log("Home page", newUrl)
            break;
        case ENDPOINTS.BRAND_ENDPOINT:
            brandRouter.handleBrandRoutes(req, res)
            break;
        default:
            generateResponse(res, 404, { "message": 'Any error occured' })

    }
}
module.exports = { handleRoutes }