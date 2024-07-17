class CountryAddDTO {
    constructor(requestData) {
        this.sort_code = requestData.sort_code
        this.name = requestData.name
    }
}

module.exports = CountryAddDTO