const { ADMIN_ENDPOINT, ADMIN_CREATE_ENDPOINT, ADMIN_CREATE_ACTION_ENDPOINT, ADMIN_UPDATE_ENDPOINT, ADMIN_UPDATE_ACTION_ENDPOINT, ADMIN_DELETE_ACTION_ENDPOINT } = require('../utils/urlHelper')
const adminController = require('../controllers/adminContoller')
const Router = require('./router')
const router = new Router()

router.addRoute(ADMIN_ENDPOINT, adminController.getAdminPanel)
router.addRoute(ADMIN_CREATE_ENDPOINT, adminController.getCreatePage);
router.addRoute(ADMIN_CREATE_ACTION_ENDPOINT, adminController.createCard);
router.addRoute(ADMIN_UPDATE_ENDPOINT, adminController.getUpdatePage);
router.addRoute(ADMIN_UPDATE_ACTION_ENDPOINT, adminController.updateCard);
router.addRoute(ADMIN_DELETE_ACTION_ENDPOINT, adminController.deleteCard);

module.exports = router.handleRoute.bind(router)