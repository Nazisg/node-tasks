const categoryController = require('../controllers/category-controller')
const express = require('express')
const router = express.Router()

router.get('/', categoryController.getAllCategories)
router.get('/:id', categoryController.getCategoryById)
router.get('/hierarchy/:id', categoryController.getCategoryByHierarchy)
router.post('/', categoryController.addCategory)
router.delete('/:id', categoryController.deleteCategory)
router.put('/:id', categoryController.updateCategory)

module.exports = router