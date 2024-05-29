const loadEjs = require('../utils/load-ejs');
const _adminService =require('../services/admin-service')
const Card = require('../models/serviceCard');
const parseRequestBody = require('../utils/parser');

const getAdminPanel = async (req, res) => {
    const cards = await _adminService.getAllCards();
    loadEjs("admin", req, res, cards);
};

const getCreatePage = (req, res) => {
    loadEjs("create", req, res);
};

const getUpdatePage = async (req, res) => {
    const { url } = req;
    const id = url.split("/")[3];
    const cardId = id.replace("/", "");

    const cards = await _adminService.getAllCards();
    const card = cards.find(c => c.id === cardId);

    console.log("getUpdatePage card", card);

    if (card) {
        loadEjs("update", req, res, card);
    } else {
        generateResponse({
            res: res,
            status: 500,
            header: CONTENT_TYPES['.json'],
            data: { error: 'update failed' }
        });
    }
};

const createCard = async (req, res) => {
    const body = await parseRequestBody(req);
    const card = new Card(body.title, body.desc, body.url);
    const result = await _adminService.createCard(card);

    if (result) {
        res.writeHead(302, {
            'Location': '/admin'
        });
        res.end();
    } else {
        generateResponse({
            res: res,
            status: 500,
            header: CONTENT_TYPES['.json'],
            data: { error: 'Create failed' }
        });
    }
};

const updateCard = async (req, res) => {
    const { url } = req;
    const id = url.split("/")[3];
    const cardId = id.replace("/", "");

    const body = await parseRequestBody(req);
    const updatedCard = await _adminService.updateCard(cardId, body);

    if (updatedCard) {
        res.writeHead(302, {
            'Location': '/admin'
        });
        res.end();
    } else {
        generateResponse({
            res: res,
            status: 500,
            header: CONTENT_TYPES['.json'],
            data: { error: 'Update failed' }
        });
    }
};

const deleteCard = async (req, res) => {
    const { url } = req;
    const id = url.split("/")[3];
    const cardId = id.replace("/", "");

    const deletedCard = await _adminService.deleteCard(cardId);

    if (deletedCard) {
        res.writeHead(302, {
            'Location': '/admin'
        });
        res.end();
    } else {
        generateResponse({
            res: res,
            status: 500,
            header: CONTENT_TYPES['.json'],
            data: { error: 'Card was not found' }
        });
    }
};

module.exports = { getAdminPanel, getCreatePage, getUpdatePage, createCard, updateCard, deleteCard };
