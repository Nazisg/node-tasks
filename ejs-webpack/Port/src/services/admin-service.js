const _baseService = require('./base-service');

async function getAllCards() {
    const result = await _baseService.getAllJsonData();
    return result.services;
};

async function createCard(model) {
    const data = await _baseService.create("services", model);
    return data;
};

async function updateCard(cardId, model) {
    const data = await _baseService.update("services", model, cardId);
    return data;
};

async function deleteCard(cardId) {
    const data = await _baseService.removeCard("services", cardId);
    return data;
};

module.exports = { createCard, getAllCards, updateCard, deleteCard };