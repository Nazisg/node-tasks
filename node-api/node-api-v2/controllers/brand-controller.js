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
    const brandId = req.params.id;
    const result = await brandService.deleteBrand(brandId);
    generateResponse(res, 200, result);

};

const updateBrand = async (req, res) => {
    const brandId = req.params.id;
    const newData = req.body;
    const updatedBrand = await brandService.updateBrand(brandId, newData);
    generateResponse(res, 200, updatedBrand);
};

module.exports = {
    getBrandInfo,
    createBrand,
    removeBrand,
    updateBrand
}