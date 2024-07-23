const express = require('express')
const router = express.Router()
const blogController = require('../controllers/blog-controller')
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/img/blog');
    },
    filename: (req, file, cb) => {
        cb(null, path.parse(file.originalname).name + "-" + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

router.get('/', blogController.getBlogsView)
router.get('/dashboard', blogController.getDashboard)
router.get('/add', blogController.addBlogView)
router.post('/add', upload.single('img_src'), blogController.addBlog)
router.get('/:id', blogController.getBlogById)
router.get('/detail/:id', blogController.getBlogDetailView)
router.get('/edit/:id', blogController.editBlogView)
router.post('/edit/:id', upload.single('img_src'), blogController.editBlog)
router.post('/:id', blogController.deleteBlog)

module.exports = router