const blogService = require('../services/blog-service')
const fs = require('fs')

const getBlogsView = async (req, res) => {
    const result = await blogService.getAllBlogs()
    if (result.success) {
        res.render('blog/blogs', { data: result.data })
    } else {
        res.render('blog/blogs')
    }
}
const addBlogView = async (req, res) => {
    res.render('blog/blogAdd')
}
const editBlogView = async (req, res) => {
    const id = req.params.id;
    const result = await blogService.getBlogById(id);
    console.log(result.data.dataValues.img_src);
    if (result.success) {
        res.render('blog/blogEdit', { data: result.data });
    } else {
        res.redirect('/blogs/dashboard');
    }
}

const getBlogDetailView = async (req, res) => {
    const id = req.params.id;
    const result = await blogService.getBlogById(id);
    if (result.success) {
        res.render('blog/blogDetail', { data: result.data });
    } else {
        res.redirect('/blogs');
    }
}

const addBlog = async (req, res) => {
    const { title, author, category, description } = req.body;
    const img_src = req.file ? req.file.path : null;
    const img = img_src.slice(6)    
    const result = await blogService.addBlog(img, title, author, category, description);
    if (result.success) {
        res.redirect('/blogs/dashboard');
    }
};

const editBlog = async (req, res) => {
    const id = req.params.id;
    if (req.file) {
        req.body.img_src = `/img/blog/${req.file.filename}`;
    }
    const result = await blogService.updateBlog(id, req.body);
    if (result.success) {
        res.redirect('/blogs/dashboard');
    } else {
        res.redirect(`/blogs/edit/${id}`);
    }
};

const getBlogById = async (req, res) => {
    const { id } = req.params;
    const result = await blogService.getBlogById(id);
    res.json(result)
};

const deleteBlog = async (req, res) => {
    const result = await blogService.deleteBlog(req.params.id)
    if (result.success) {
        res.redirect('/blogs/dashboard')
    }
}

const getDashboard = async (req, res) => {
    const result = await blogService.getAllBlogs()
    if (result.success) {
        res.render('blog/dashboard', { data: result.data })
    } else {
        res.render('blog/dashboard')
    }
}

module.exports = {
    getBlogsView,
    addBlog,
    getBlogById,
    addBlogView,
    editBlogView,
    editBlog,
    deleteBlog,
    getBlogDetailView,
    getDashboard
}