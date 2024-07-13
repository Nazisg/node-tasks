class CategoryAddDto{
    constructor(requestData){
        this.code = requestData.code
        this.name = requestData.name
        this.parent_id = requestData.parent_id
    }
}

module.exports = CategoryAddDto