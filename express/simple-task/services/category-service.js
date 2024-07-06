const pool = require('../config/db')
const Category = require('../models/category')


const getAllCategories = async () => {
    const res = await pool.query('select * from categories c where c.deleted = 0')
    return Category.map(res.rows)
}

// const init = async()=>{
//     const data = await getAllCategories()
//     console.log(data)
// }

// init()

module.exports = {
    getAllCategories
}