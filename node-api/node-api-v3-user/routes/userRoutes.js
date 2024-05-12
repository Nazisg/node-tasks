const { USER_GET_ALL, USER_CREATE, USER_DELETE, USER_UPDATE } = require('../utils/urlhelper')

const userController = require('../controllers/user-controller')

const handleUserRoutes = (req, res) => {
    const { url } = req

    switch (url) {
        case USER_CREATE:
            userController.addUser(req, res);
            break;
        case USER_GET_ALL:
            userController.getAllUsers(req, res);
            break;
        case USER_DELETE:
            userController.getAllUsers(req, res);
            break;
        case USER_UPDATE:
            userController.getAllUsers(req, res);
            break;
    }
}

module.exports = {
    handleUserRoutes
}