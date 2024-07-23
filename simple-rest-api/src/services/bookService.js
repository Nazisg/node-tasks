const pool = require('../config/db')
const Category = require('../models/category/category')


const getAllCategories = async () => {
    const res = await pool.query('select * from categories c where c.deleted = 0')
    return Category.mapAll(res.rows)
}

const getCategoryById = async id => {
    const res = await pool.query('select * from categories c where c.id = $1 and c.deleted=0', [id])
    return Category.mapOne(res.rows[0])
}

const getCategoryByHierarchy = async id => {
    const res = await pool.query('select * from FUNC_GETCATEGORYBYHIERARCHY($1)', [id])
    return Category.mapAll(res.rows)
}

const updateCategory = async (category) => {
    const { id, code, name, parent_id } = category;
    await pool.query('CALL UPDATE_CATEGORY($1, $2, $3, $4);', [id, code, name, parent_id]);
};

const addCategory = async category => {
    await pool.query('call add_category($1,$2,$3);', [category.code, category.name, category.parent_id])
}
const deleteCategory = async id => {
    const hierarchy_data = await getCategoryByHierarchy(id)
    if (hierarchy_data.length > 1) {
        return { message: "Cannot delete relational/hierarchyal data" }
    } else {
        await pool.query('call delete_category($1);', [id])
        return { message: 'Category deleted successfully' }
    }
}

module.exports = {
    getAllCategories,
    getCategoryById,
    getCategoryByHierarchy,
    addCategory,
    deleteCategory,
    updateCategory
}