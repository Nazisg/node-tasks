const parseRequestBody = require('../helper/parser')
const generateResponse = require('../helper/responseGenerator')
const brandService = require('../services/brand-service')


const getBrandInfo = async (req, res) => {
    const result = await brandService.getBrand()
    generateResponse(res, 200, result)
}

const createBrand = async(req,res)=>{
    const body = await parseRequestBody(req)
    const addNewRecord = await brandService.createBrand(body)
    generateResponse(res,201,addNewRecord)
}

const deleteBrand = async (req, res) => {
    const id = req.params.id; 
    const result = await brandService.deleteBrand(id);
    if (result.success) {
        generateResponse(res, 200, { message: result.message });
    } else {
        generateResponse(res, 404, { message: result.message });
    }
}

module.exports = {
    getBrandInfo,
    createBrand,
    deleteBrand
}