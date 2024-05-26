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

async function signUp(jsonKey, model) {
    const allData = await getAllJsonData();
    console.log(`alldata in base-service: ${allData}`);
    console.log(`jsonkey in base-service: ${jsonKey}`);
    console.log(`model in base-service: ${model}`);
    
    const newUser = { "id": generateId(allData[jsonKey]), ...model };
    allData[jsonKey].push(newUser);
    await writeFileAsync(DATABASE_PATH, JSON.stringify(allData, null, 2));
    return newUser;
};

module.exports = {
    signUp,
    getAllJsonData
};