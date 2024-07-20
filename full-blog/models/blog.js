const sequelize = require('../config/db')
const { DataTypes, Sequelize } = require('sequelize');

const Blog = sequelize.define('blogs', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    img_src: {
        type: DataTypes.STRING(255),
        unique: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING(255),
        unique: true,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING(255),
        unique: true,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING(255),
        unique: true,
        allowNull: false
    },
    deleted: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0        
    }
})

module.exports = Blog