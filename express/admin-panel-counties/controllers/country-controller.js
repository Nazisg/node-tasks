const CountryAddDTO = require('../models/countryAdd')
const countryService = require('../services/country-service')

const getCountriesView = async (req, res) => {
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
    const result = await countryService.getCountryById(id);
    if (result.success) {
        res.render('country/edit', { data: result.data });
    } else {
        res.redirect('/countries');
    }
}

const editCountry = async (req, res) => {
    const id = req.params.id;
    const result = await countryService.updateCountry(id, req.body);
    if (result.success) {
        res.redirect('/countries');
    } else {
        res.redirect(`/countries/edit/${id}`);
    }
};

const deleteCountry = async (req, res) => {
    const result = await countryService.deleteCountry(req.params.id)
    if (result.success) {
        res.redirect('/countries')
    }
}

const getCountryView = async (req, res) => {
    const id = req.params.id;
    const result = await countryService.getCountryById(id);
    if (result.success) {
        res.render('country/view', { data: result.data });
    } else {
        res.redirect('/countries');
    }
}

module.exports = {
    getCountriesView,
    getCountryView,
    getCountryAddView,
    addCountry,
    getCountryEditView,
    getCountryById,
    editCountry,
    deleteCountry
}