const fs = require('fs');
const path = require("path");
const util = require("util");
const generateUniqueId = require('../helper/generateUniqueId');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const parentFolder = path.join(__dirname, "..");
const DATABASE_PATH = path.join(parentFolder, "database/db.json");

async function getBrand() {
    const result = await readFileAsync(DATABASE_PATH);
    const myAllData = JSON.parse(result);
    return myAllData.brands;
}

async function createBrand(brand) {
    const result = await readFileAsync(DATABASE_PATH);
    const myAllData = JSON.parse(result);

    const newBrand = { "id": generateUniqueId(myAllData.brands), ...brand };
    myAllData.brands.push(newBrand);
    await writeFileAsync(DATABASE_PATH, JSON.stringify(myAllData, null, 2));
    return newBrand;
}

async function deleteBrand(id) {
    const result = await readFileAsync(DATABASE_PATH);
    const myAllData = JSON.parse(result);

    myAllData.brands = myAllData.brands.filter(brand => brand.id !== id);
    await writeFileAsync(DATABASE_PATH, JSON.stringify(myAllData, null, 2));
}

async function updateBrand(id, newData) {
    const result = await readFileAsync(DATABASE_PATH);
    const myAllData = JSON.parse(result);

    const index = myAllData.brands.findIndex(brand => brand.id === id);
    if (index !== -1) {
        myAllData.brands[index] = { ...myAllData.brands[index], ...newData };
        await writeFileAsync(DATABASE_PATH, JSON.stringify(myAllData, null, 2));
        return myAllData.brands[index];
    } else {
        throw new Error("Brand not found");
    }
}

module.exports = {
    getBrand,
    createBrand,
    deleteBrand,
    updateBrand
};
