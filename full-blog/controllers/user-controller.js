const userService = require('../services/user-service')

const registerView = async (req, res) => {
    res.render('user/register')
}
const loginView = async (req, res) => {
    res.render('user/login')
}

const register = async (req, res) => {
    const { username, password, email } = req.body;
    const result = await userService.register(username, password, email);
    if (result.success) {
        res.redirect('/user/login');
    }
};
const login = async (req, res) => {
    const { username, password } = req.body;
    const result = await userService.login(username, password);
    if (result.success) {
        req.session.isLogged = true; 
        res.redirect('/blogs/dashboard');
    } else {
        res.render('login', { isLogged: false });
    }
};

const logout = (req, res) => {
    req.session.isLogged = false; 
    res.redirect('/');
};

module.exports = {
    registerView,
    loginView,
    register,
    login,
    logout
}