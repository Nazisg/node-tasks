const aboutActions = require("./controllers/aboutController")
const homeActions = require("./controllers/homeController")

const routes = {
    '/': {
        "GET": homeActions.bindHomePage
    },
    '/about': {
        "GET": aboutActions.bindAboutPage
    }
}

module.exports = routes