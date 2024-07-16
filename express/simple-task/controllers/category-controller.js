const CategoryAddDto = require('../models/categoryAdd')
const categoryService = require('../services/category-service')

const getAllCategories = async (req, res) => {
    const data = await categoryService.getAllCategories()
    // res.send(JSON.stringify(data,null,2))
    res.json(data)
}

const getCategoryById = async (req, res) => {
    const data = await categoryService.getCategoryById(req.params.id)
    res.json(data)
}
const getCategoryByHierarchy = async (req, res) => {
    const data = await categoryService.getCategoryByHierarchy(req.param.id)
    res.json(data)
}
const addCategory = async (req, res) => {
    const categoryAddDto = new CategoryAddDto(req.body)
    await categoryService.addCategory(categoryAddDto)
    res.status(201).json({ message: 'Data added successfully' })
}

const updateCategory = async (req, res) => {
    await categoryService.updateCategory(req.params.id, req.body);
    res.status(200).json({ message: "Category has been updated successfully" });
}

const deleteCategory = async(req,res)=>{
    const result = await categoryService.deleteCategory(req.params.id)
    res.json(result)
}

module.exports = {
    getAllCategories,
    getCategoryById,
    getCategoryByHierarchy,
    addCategory,
    deleteCategory,
    updateCategory
}