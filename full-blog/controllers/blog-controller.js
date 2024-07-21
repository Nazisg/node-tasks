const blogService = require('../services/blog-service')

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
    if (result.success) {
        res.render('blog/blogEdit', { data: result.data });
    } else {
        res.redirect('/blogs');
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
    const img_src = req.file && req.file.path;
    console.log(img_src)
    const result = await blogService.addBlog(img_src, title, author, category, description);
    if (result.success) {
        res.redirect('/blogs');
    }
};

const editBlog = async (req, res) => {
    const id = req.params.id;
    const result = await blogService.updateBlog(id, req.body);
    if (result.success) {
        res.redirect('/blogs');
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
        res.redirect('/blogs')
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