const baseService = require("../services/base-service");
const bcyrpt = require('bcrypt');

async function signUp(model) {
    console.log(`signUp auth service model: ${model}`);
    const saltRounds = 10;
    const saltKey = await bcyrpt.genSalt(saltRounds);
    model.password = await bcyrpt.hash(model.password, saltKey);

    const data = await baseService.signUp("users", model);
    return data;
};

async function verifyUser(user) {
    const myAllUsers = await baseService.getAllJsonData()
    const existingUser = myAllUsers.users.find(x => x.username === user.username);
    if (existingUser === undefined)
        return new Error("user is not found");

    const passwordVerifyResult = await bcyrpt.compare(user.password, existingUser.password)

    if (!passwordVerifyResult)
        return new Error("password is inccorrect");

    if (!existingUser.isActive)
        return new Error("user is blocked");

    return existingUser;
};

module.exports = { signUp, verifyUser };