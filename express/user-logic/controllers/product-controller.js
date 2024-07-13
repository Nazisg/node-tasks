const productService = require('../services/product-service')

const getAllProducts = async (req, res) => {
    const data = await productService.getAllProducts()
    // res.send(JSON.stringify(data,null,2))
    res.json(data)
}

module.exports = {
    getAllProducts
}