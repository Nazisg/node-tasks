const pool = require('../config/db')
const Country = require('../models/country')
const { DATA_ADDED_SUCCESSFULLY, DATA_GET_SUCCESSFULLY } = require('../utils/constants/messages')
const { SuccessResult } = require('../utils/results/result')

const getAllCountries = async () => {
    const result = await pool.query('select * from countries c where c.deleted = 0')
    return new SuccessResult(DATA_GET_SUCCESSFULLY, Country.mapAll(result.rows))
}
const addCountry = async country => {
    const result = await pool.query('insert into countries(sort_code, name) values($1, $2)', [country.sort_code, country.name])
    return new SuccessResult(DATA_ADDED_SUCCESSFULLY, result.rows[0])
}

module.exports = {
    getAllCountries,
    addCountry
}