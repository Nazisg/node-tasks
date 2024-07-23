const pool = require('../config/db');
const { DATA_GET_SUCCESSFULLY, DATA_ADDED_SUCCESSFULLY } = require('../utils/constants/messages');
const { SuccessResult, ErrorResult } = require('../utils/results/result');
const bcryptjs = require('bcryptjs');

const getAllUsers = async () => {
    try {
        const res = await pool.query('select * from users');
        return new SuccessResult(DATA_GET_SUCCESSFULLY, res.rows);
    } catch (error) {
        return new ErrorResult(error.message);
    }
};

const getOneUser = async id => {
    try {
        const res = await pool.query('select * from users where id = $1', [id]);
        return new SuccessResult(DATA_GET_SUCCESSFULLY, res.rows[0]);
    } catch (error) {
        return new ErrorResult(error.message);
    }
};

const addUser = async user => {
    try {
        user.password = await bcryptjs.hash(user.password, 10);
        const res = await pool.query(
            'insert into users (username, password) values ($1, $2) retuning *',
            [user.username, user.password]
        );
        return new SuccessResult(DATA_ADDED_SUCCESSFULLY, res.rows[0]);
    } catch (error) {
        return new ErrorResult(error.message);
    }
};

const updateUser = async (id, user) => {
    const { username, password } = user;
    const hashedPassword = password ? await bcryptjs.hash(password, 10) : undefined;
    await pool.query(
        'update users set username = $1, password = coalesce($2, password) where id = $3',
        [username, hashedPassword, id]
    );
};

const deleteUser = async id => {
    await pool.query('delete from users where id = $1', [id]);
};

module.exports = {
    getAllUsers,
    getOneUser,
    addUser,
    updateUser,
    deleteUser
};
