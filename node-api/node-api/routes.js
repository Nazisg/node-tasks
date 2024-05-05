const aboutActions = require("./controllers/aboutController")
const faqActions = require("./controllers/faqController")


const routes ={
    "/about":{
        "GET":aboutActions.getAllAbout
    },
    "/faq":{
        "GET":faqActions.getAllFaq
    }
}

module.exports = routes