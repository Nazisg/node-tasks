const sequelize = require('../config/db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username : {
        type: DataTypes.STRING(255),
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(255),
        unique: true,
        allowNull: false
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        unique: true,
        allowNull: false
    },
    deleted: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = User