const CountryAddDTO = require('../models/countryAdd')
const countryService = require('../services/country-service')

const getCountryView = async (req, res) => {
    const result = await countryService.getAllCountries()
        console.log(result)
    if (result.success) {
        res.render('country/index',{data: result.data})
    } else {
        res.render('country/index')
    }
}

const getCountryAddView = async(req,res)=>{
    res.render('country/add')
}

const addCountry = async(req,res)=>{
    const countryAddDto = new CountryAddDTO(req.body)
    const result = await countryService.addCountry(countryAddDto)
    if(result.success){
        res.redirect('/countries')
    }
}

const getCountryEditView = async(req,res)=>{
    res.render('country/edit')
}

module.exports = {
    getCountryView,
    getCountryAddView,
    addCountry,
    getCountryEditView
}