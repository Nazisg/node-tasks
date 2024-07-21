const User = require('../models/user');
const { SuccessResult, ErrorResult } = require('../utils/results/result');
const { DATA_ADDED_SUCCESSFULLY} = require('../utils/constants/messages');
const {  USERNAME_NOT_EXIST, PASSWORD_INCORRECT, USER_SUCCESSFULLY } = require('../utils/constants/userMessages');

const bcryptjs = require('bcryptjs'); 

const register = async (username, password, email) => {
    const hashedPassword = await bcryptjs.hash(password, 10);
    const user = await User.create({ username, password: hashedPassword, email });
    return new SuccessResult(DATA_ADDED_SUCCESSFULLY, user);
};

const login = async (username, password) => {
    const user = await User.findOne({ where: { username } });
    if (!user) {
        return new ErrorResult(USERNAME_NOT_EXIST);
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
        return new ErrorResult(PASSWORD_INCORRECT);
    }

    return new SuccessResult(USER_SUCCESSFULLY, user);
};

module.exports = {
    login, 
    register
};
