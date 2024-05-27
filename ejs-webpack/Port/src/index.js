import { bindHeroPart } from "./creators/heroCreators.js"
import { getHero } from "./requests/heroRequest.js"
import { bindServicesPart } from "./creators/servicesCreators.js"
import { getServices } from "./requests/servicesRequest.js"
import { bindAboutPart } from "./creators/aboutCreators.js"
import { getAbout } from "./requests/aboutRequest.js"
import { bindSkillsPart } from "./creators/skillsCreators.js"
import { getSkills } from "./requests/skillsRequest.js"
import { bindPortfolioPart } from "./creators/portfolioCreators..js"
import { getPortfolio } from "./requests/portfolioRequest.js"
import { bindFactsPart } from "./creators/factsCreators.js"
import { getFacts } from "./requests/factsRequest.js"
import { bindTestimonialsPart } from "./creators/testimonialsCreators.js"
import { getTestimonials } from "./requests/testimonialsRequest.js"
import { bindContactPart } from "./creators/contactCreator.js"
import { getContact } from "./requests/contactRequest.js"

async function LoadMyData() {
    const heroServices = await getHero()
    const servicesServices = await getServices()
    const aboutServices = await getAbout()
    const skillsServices = await getSkills()
    const portfolioServices = await getPortfolio()
    const factsServices = await getFacts()
    const TestimonialsServices = await getTestimonials()
    const ContactServices = await getContact()

    bindHeroPart(heroServices[0])
    bindServicesPart(servicesServices)
    bindAboutPart(aboutServices[0])
    bindSkillsPart(skillsServices)
    bindPortfolioPart(portfolioServices)
    bindFactsPart(factsServices)
    bindTestimonialsPart(TestimonialsServices)
    bindContactPart(ContactServices[0])
}

document.addEventListener("DOMContentLoaded", LoadMyData)