const express = require('express')
const router = express.Router()
const countryController = require('../controllers/country-controller')

router.get('/', countryController.getCountriesView)
router.get('/add', countryController.getCountryAddView)
router.post('/add', countryController.addCountry)
router.get('/edit/:id', countryController.getCountryEditView)
router.post('/edit/:id', countryController.editCountry)
router.post('/:id', countryController.deleteCountry)
router.get('/view/:id', countryController.getCountryView)

module.exports = router