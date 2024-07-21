const Blog = require('../models/blog');
const { SuccessResult } = require('../utils/results/result')
const { DATA_ADDED_SUCCESSFULLY, DATA_GET_SUCCESSFULLY, DATA_UPDATED_SUCCESSFULLY, DATA_DELETED_SUCCESSFULLY } = require('../utils/constants/messages')


const getAllBlogs = async () => {
    const blogs = await Blog.findAll({ where: { deleted: 0 } });
    return new SuccessResult(DATA_GET_SUCCESSFULLY, blogs)
};

const addBlog = async (img_src, title, author, category,description) => {
    const blog = await Blog.create({ img_src, title, author, category,description })
    return new SuccessResult(DATA_ADDED_SUCCESSFULLY, blog)
};

const getBlogById = async (id) => {
    const blog = await Blog.findByPk(id);
    return new SuccessResult(DATA_GET_SUCCESSFULLY, blog)
};

const updateBlog = async (id, blog) => {
    const { img_src, title, author, category, description } = blog;
    const [updated] = await Blog.update({ img_src, title, author, category,description }, { where: { id, deleted: 0 } });
    if (updated) {
        const updatedBlog = await Blog.findByPk(id);
        return new SuccessResult(DATA_UPDATED_SUCCESSFULLY, updatedBlog);
    }
};

const deleteBlog = async (id) => {
    const [deleted] = await Blog.update({ deleted: 1 }, { where: { id, deleted: 0 } });
    if (deleted) {
        return new SuccessResult(DATA_DELETED_SUCCESSFULLY, { id });
    }
};

module.exports = {
    getAllBlogs,
    addBlog,
    getBlogById,
    updateBlog,
    deleteBlog
}
