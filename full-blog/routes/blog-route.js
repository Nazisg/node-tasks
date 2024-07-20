const express = require('express')
const router = express.Router()
const blogController = require('../controllers/blog-controller')

router.get('/', blogController.getBlogsView)
router.get('/add', blogController.addBlogView)
router.post('/add', blogController.addBlog)
router.get('/:id', blogController.getBlogById)
router.post('/', blogController.addBlog)

module.exports = router