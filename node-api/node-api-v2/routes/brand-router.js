const { HTTP_METHODS } = require('../helper/enums')
const brandController = require("../controllers/brand-controller")

const handleBrandRoutes = (req, res) => {
    const { method } = req;

    switch (method) {
        case HTTP_METHODS.GET:
            brandController.getBrandInfo(req, res)
            break;
        case HTTP_METHODS.POST:
            brandController.createBrand(req, res)
            break;
        case HTTP_METHODS.DELETE:
            brandController.deleteBrand(req, res)
            break;
    }
}

module.exports = {
    handleBrandRoutes
}