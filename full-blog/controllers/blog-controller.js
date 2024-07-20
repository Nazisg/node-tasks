const blogService = require('../services/blog-service')

const getBlogsView = async (req, res) => {
    const result = await blogService.getAllBlogs()
    console.log(result , "result")
    if (result.success) {
        res.render('blog/blogs', { data: result.data })
    } else {
        res.render('blog/blogs')
    }
    // res.render('blog/blogs')
    // res.json(result)
}
const addBlogView = async (req, res) => {
    res.render('blog/blogAdd')
}

const addBlog = async (req, res) => {
    const { img_src, title, author, category } = req.body;
    const result = await blogService.addBlog(img_src, title, author, category);
    // res.status(201).json({ success: true, data: blog });
    res.json(result)

};

const getBlogById = async (req, res) => {
    const { id } = req.params;
    const result = await blogService.getBlogById(id);
    // res.status(200).json({ success: true, data: blog });
    res.json(result)
};

module.exports = {
    getBlogsView,
    addBlog,
    getBlogById,
    addBlogView
}