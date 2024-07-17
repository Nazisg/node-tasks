const CountryAddDTO = require('../models/countryAdd')
const countryService = require('../services/country-service')

const getCountryView = async (req, res) => {
    const result = await countryService.getAllCountries()
    if (result.success) {
        res.render('country/index', { data: result.data })
    } else {
        res.render('country/index')
    }
}

const getCountryAddView = async (req, res) => {
    res.render('country/add')
}

const addCountry = async (req, res) => {
    const countryAddDto = new CountryAddDTO(req.body)
    const result = await countryService.addCountry(countryAddDto)
    if (result.success) {
        res.redirect('/countries')
    }
}

const getCountryById = async (req, res) => {
    const data = await countryService.getCountryById(req.params.id)
    res.json(data)
}

const getCountryEditView = async (req, res) => {
    const id = req.params.id;
    console.log(id)
    const result = await countryService.getCountryById(id);
    console.log(result.success)
    if (result.success) {
        res.render('country/edit', { data: result.data });
    } else {
        res.redirect('/countries');
    }
}

const editCountry = async (req, res) => {
    const id = req.params.id;
    const countryEditDto = new CountryAddDTO(req.body);
    const result = await countryService.updateCountry(id, countryEditDto);
    if (result.success) {
        res.redirect('/countries');
    } else {
        res.redirect(`/countries/edit/${id}`);
    }
};
const deleteCountry = async(req,res)=>{
    const result = await countryService.deleteCountry(req.params.id)
    res.json(result)
}

module.exports = {
    getCountryView,
    getCountryAddView,
    addCountry,
    getCountryEditView,
    getCountryById,
    editCountry,
    deleteCountry
}