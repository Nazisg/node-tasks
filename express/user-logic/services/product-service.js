const pool =require('../config/db')
const Product = require('../models/product/product')


const getAllProducts = async()=>{
    const res = await pool.query('select * from products')
    return Product.map(res.rows)
}

module.exports={
    getAllProducts
}