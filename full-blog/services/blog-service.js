const Blog = require('../models/blog');
const { SuccessResult } = require('../utils/results/result')
const { DATA_ADDED_SUCCESSFULLY, DATA_GET_SUCCESSFULLY, DATA_UPDATED_SUCCESSFULLY, DATA_DELETED_SUCCESSFULLY } = require('../utils/constants/messages')


const getAllBlogs = async () => {
    const blogs = await Blog.findAll({ where: { deleted: 0 } });
    return new SuccessResult(DATA_GET_SUCCESSFULLY, blogs)
};

const addBlog = async (img_src, title, author, category) => {
    const blog = await Blog.create({ img_src, title, author, category })
    return new SuccessResult(DATA_ADDED_SUCCESSFULLY, blog)
};

const getBlogById = async (id) => {
    const blog = await Blog.findByPk(id);
    return new SuccessResult(DATA_GET_SUCCESSFULLY, blog)
};

module.exports = {
    getAllBlogs,
    addBlog,
    getBlogById
}
