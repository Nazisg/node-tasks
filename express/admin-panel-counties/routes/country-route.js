const express = require('express')
const router = express.Router()
const countryController= require('../controllers/country-controller')

router.get('/', countryController.getCountryView)
router.get('/add', countryController.getCountryAddView)
router.post('/add', countryController.addCountry)
router.get('/edit', countryController.getCountryEditView)

module.exports = router