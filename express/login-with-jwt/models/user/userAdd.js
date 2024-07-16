class UserAddDto {
    constructor(requestData) {
        this.username = requestData.username
        this.password = requestData.password
        this.isActive = requestData.isActive
    }
}

module.exports = UserAddDto