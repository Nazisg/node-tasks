const pool = require('../config/db')
const Country = require('../models/country')
const { DATA_ADDED_SUCCESSFULLY, DATA_GET_SUCCESSFULLY, DATA_UPDATED_SUCCESSFULLY, DATA_DELETED_SUCCESSFULLY } = require('../utils/constants/messages')
const { SuccessResult } = require('../utils/results/result')

const getAllCountries = async () => {
    const result = await pool.query('select * from countries c where c.deleted = 0')
    return new SuccessResult(DATA_GET_SUCCESSFULLY, Country.mapAll(result.rows))
}
const addCountry = async country => {
    const result = await pool.query('insert into countries(sort_code, name) values($1, $2)', [country.sort_code, country.name])
    return new SuccessResult(DATA_ADDED_SUCCESSFULLY, result.rows[0])
}
const getCountryById = async id => {
    const result = await pool.query('select * from countries c where c.id = $1 and c.deleted = 0', [id])
    return new SuccessResult(DATA_GET_SUCCESSFULLY, Country.mapOne(result.rows[0]))
}

const updateCountry = async (country) => {
    const { id, sort_code, name } = country;
    const result = await pool.query('update countries set sort_code = $2, name = $3 where id = $1 and deleted = 0 returning *', [id, sort_code, name]);
    return new SuccessResult(DATA_UPDATED_SUCCESSFULLY, result.rows[0])
};

const deleteCountry = async id => {
    await pool.query('update countries set deleted = 1 where id = $1 returning *', [id])
    return new SuccessResult(DATA_DELETED_SUCCESSFULLY, result.rows[p])
}

module.exports = {
    getAllCountries,
    addCountry,
    getCountryById,
    updateCountry,
    deleteCountry
}