const defaultController = require('../controllers/defaultController')
const { DEFAULT_ENDPOINT } = require('../utils/urlHelper')

const handleDefaultRouter = (req, res) => {
    const { url } = req

    switch (url) {
        case DEFAULT_ENDPOINT:
            defaultController.getDefaultPage(req,res)
    }
}

module.exports = { handleDefaultRouter }