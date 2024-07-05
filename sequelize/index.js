const sequelize = require("./config/db");
const Brand = require('./models/brand')

async function init() {
    try {
        await sequelize.authenticate()

        await Brand.create({
            name: "Apple",
            code: 1
        })
        await Brand.create({
            name: "Asus",
            code: 2
        })
        await Brand.create({
            name: "HP",
            code: 3
        })

        // const res = await Brand.findAll({
        //     attributes:[['code', 'kod'], ['name','ad']],
        //     where:{
        //         code:4
        //     }
        // })

        const res = await Brand.findOne({
            attributes: [['code', 'kod'], ['name', 'ad']],
            where: {
                code: 4
            }
        })
        console.log(JSON.stringify(res, null, 2))
    } catch (error) {
        console.log(error)
    }
    finally {
        await sequelize.close()
    }
}
init()