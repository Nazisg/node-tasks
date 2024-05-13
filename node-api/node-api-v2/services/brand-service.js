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

    const deleteBrands = myAllData.brands.find((brand) => brand.id === id);
    const indexDeleteBrand = myAllData.brands.indexOf(deleteBrands);
    myAllData.brands.splice(indexDeleteBrand, 1);
    await writeFileAsync(DATABASE_PATH, JSON.stringify(myAllData, null, 2));
    return deleteBrands;
}

async function updateBrand(id, newData) {
    const result = await readFileAsync(DATABASE_PATH);
    const myAllData = JSON.parse(result);
    const uptadeBrand = newData;

    myAllData.brands.map((brand) => {
        if (brand.id === id) {
            brand.brand_name = uptadeBrand.brand_name;
        }
    });

    await writeFileAsync(DATABASE_PATH, JSON.stringify(myAllData, null, 2));
    const uptadeBrandItem = myAllData.brands.find((brand) => brand.id === id);
    if (uptadeBrandItem) {
        return uptadeBrandItem;
    } else {
        throw new Error("Not Found");
    }
}

module.exports = {
    getBrand,
    createBrand,
    deleteBrand,
    updateBrand
};
