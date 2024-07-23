const UserLoginDTO = require('../models/user/userAdd')
const authService = require('../services/authService')

const loginUser = async (req, res) => {
    const userLoginDto = new UserLoginDTO(req.body)
    const result = await authService.loginUser(userLoginDto)

    if (!result.success) {
        res.status(400).json(result)

    } else
        res.status(200).json(result)
}

module.exports= {
    loginUser
}