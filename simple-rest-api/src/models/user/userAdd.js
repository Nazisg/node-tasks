class UserAddDto {
    constructor(requestData) {
        this.username = requestData.username
        this.password = requestData.password
    }
}

module.exports = UserAddDto