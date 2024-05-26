const loadEjs = require('../utils/load-ejs');
const parseRequestBody = require('../utils/parser');
const User = require('../models/User');
const generateResponse = require('../utils/responseGenerator');
const _userService = require('../services/user-service');
const { CONTENT_TYPES } = require('../utils/constants');

const getLogin = (req, res) => {
    loadEjs("login", req, res);
};

const verifyUser = async (req, res) => {
    const body = await parseRequestBody(req);
    const result = await _userService.verifyUser(body);

    if (result) {
        res.writeHead(302, {
            'Location': '/'
        });
        res.end();
    } else {
        generateResponse({
            res: res,
            status: 500,
            header: CONTENT_TYPES['.json'],
            data: { error: 'Registration failed' }
        });
    }
};

const getRegister = (req, res) => {
    loadEjs("register", req, res);
};

const registerUser = async (req, res) => {
    const body = await parseRequestBody(req);
    const user = new User(body.email, body.username, body.password, true);
    const result = await _userService.signUp(user);

    if (result) {
        res.writeHead(302, {
            'Location': '/login'
        });
        res.end();
    } else {
        generateResponse({
            res: res,
            status: 500,
            header: CONTENT_TYPES['.json'],
            data: { error: 'Registration failed' }
        });
    }
};

module.exports = {
    getLogin,
    verifyUser,
    getRegister,
    registerUser
}