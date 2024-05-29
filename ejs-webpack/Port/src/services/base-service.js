const fs = require('fs');
const path = require('path');
const util = require('util');
const generateId = require('../utils/generateUniquelId');
const getRootPath = require('../utils/root-path');
const DATABASE_PATH = path.join(getRootPath(), 'database/db.json');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

async function getAllJsonData() {
    const allText = await readFileAsync(DATABASE_PATH);
    const allData = JSON.parse(allText);
    return allData;
};

async function create(jsonKey, model) {
    const allData = await getAllJsonData();
    const newCard = { "id": generateId(allData[jsonKey]), ...model };
    allData[jsonKey].push(newCard);
    await writeFileAsync(DATABASE_PATH, JSON.stringify(allData, null, 2));
    return newCard;
};

async function update(jsonKey, model, id) {
    const allData = await getAllJsonData();
    const updatedCard = model;

    allData[jsonKey].map((card) => {
        if (card.id === id) {
            card.title = updatedCard.title;
            card.desc = updatedCard.desc;
            card.url = updatedCard.url;
        }
    });

    await writeFileAsync(DATABASE_PATH, JSON.stringify(allData, null, 2));
    const singleCard = allData[jsonKey].find((card) => card.id === id);

    if (singleCard) {
        return singleCard;
    } else {
        throw new Error("Not Found");
    }
};

async function removeCard(jsonKey, id) {
    const allData = await getAllJsonData();
    const deleteCard = allData[jsonKey].find((card) => card.id === id);

    const indexDeleteCard = allData[jsonKey].indexOf(deleteCard);
    allData[jsonKey].splice(indexDeleteCard, 1);
    await writeFileAsync(DATABASE_PATH, JSON.stringify(allData, null, 2));
    return deleteCard;
};

module.exports = { getAllJsonData, create, update, removeCard };