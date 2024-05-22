const fs = require('fs');
const path = require('path');
const util = require('util');
const getRootPath = require('../utils/root-path');

const DATABASE_PATH = path.join(getRootPath(), 'database/db.json');
const readFileAsync = util.promisify(fs.readFile);

async function getAllJSONData() {
    const allText = await readFileAsync(DATABASE_PATH)
    const myAllData = JSON.parse(allText)
    return myAllData
}

module.exports = {
    getAllJSONData,
};