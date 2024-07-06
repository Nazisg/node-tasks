const categoryService = require('../services/category-service')

const getAllCategories = async (req, res) => {
    const data = await categoryService.getAllCategories()
    // res.send(JSON.stringify(data,null,2))
    res.json(data)
}

module.exports = {
    getAllCategories
}