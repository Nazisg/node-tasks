const loadEjs = require('../utils/load-ejs');
const _defaultService = require('../services/default-sevice')

const getDefaultPage = async (req, res) => {
    const cards = await _defaultService.getAllCards();
    loadEjs("default", req, res, cards);
};


module.exports = { getDefaultPage }