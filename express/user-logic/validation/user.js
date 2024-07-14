const BaseModelValidation = require('./base/base-validation')

class UserValidation extends BaseModelValidation{
    constructor(user){
        super()
        this.addValidation(()=>this.checkLength(user.username,3,50,'Username must be 3 and 50 chars',101))
    }
}
module.exports = UserValidation