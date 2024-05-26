const fs = require('fs');
const path = require('path');
const util = require('util');
const generateId = require('../utils/generateUniqueId');
const getRootPath = require('../utils/root-path');
const DATABASE_PATH = path.join(getRootPath(), 'database/db.json');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

async function getAllJsonData() {
    const allText = await readFileAsync(DATABASE_PATH);
    const allData = JSON.parse(allText);
    return allData;
};

async function insertData(jsonKey, model) {
    const allData = await getAllJsonData();    
    const newUser = { "id": generateId(allData[jsonKey]), ...model };
    allData[jsonKey].push(newUser);
    await writeFileAsync(DATABASE_PATH, JSON.stringify(allData, null, 2));
    return newUser;
};

module.exports = {
    insertData,
    getAllJsonData
};