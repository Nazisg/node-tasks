const parseRequestBody = require('../helper/parser')
const generateResponse = require('../helper/responseGenerator')
const brandService = require('../services/brand-service')

const getBrandInfo = async (req, res) => {
    const result = await brandService.getBrand()
    generateResponse(res, 200, result)
}

const createBrand = async (req, res) => {
    const body = await parseRequestBody(req)
    const addNewRecord = await brandService.createBrand(body)
    generateResponse(res, 201, addNewRecord)
}

const removeBrand = async (req, res) => {
    const { url } = req;
    const id = url.split("/")[2];
    const newId = id.replace("/", "");

    const wasDeleted = await brandService.deleteBrand(newId);
    console.log(`Delete result: ${wasDeleted ? "Success" : "Not Found"}`);
    if (wasDeleted) {
        generateResponse(res, 200, { message: "Resource deleted" });
    } else {
        generateResponse(res, 404, { message: "Resource not found" });
    }
};

async function updateBrand(req, res) {
    const { url } = req;
    const id = url.split("/")[2];
    const newId = id.replace("/", "");

    const body = await parseRequestBody(req);
    const updatedRecord = await brandService.updateBrand(newId, body);
    if (updatedRecord) {
        generateResponse(res, 200, updatedRecord);
    } else {
        generateResponse(res, 404, { message: "Resource not found" });
    }
};

module.exports = {
    getBrandInfo,
    createBrand,
    removeBrand,
    updateBrand
}