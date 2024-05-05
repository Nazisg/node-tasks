import { getMenu } from "./requests/menuService.js"
import { bindMenuPart } from "./creators/menuCreators.js"
import { bindHeroPart } from "./creators/heroCreators.js"
import { getHero } from "./requests/heroRequest.js"
import { bindAboutPart } from "./creators/aboutCreators.js"
import { getAbout } from "./requests/aboutRequest.js"
import { bindServicesPart } from "./creators/servicesCreators.js"
import { getServices } from "./requests/servicesRequest.js"
import { getFacts } from "./requests/factsRequest.js"
import { bindFactsPart } from "./creators/factsCreators.js"
import { getPortfolio } from "./requests/portfolioRequest.js"
import { bindPortfolioPart } from "./creators/portfolioCreators.js"
import { getTestimonials } from "./requests/testimonialsRequest.js"
import { bindTestimonialsPart } from "./creators/testimonialsCreators.js"
import { getBlog } from "./requests/blogRequest.js"
import { bindBlogPart } from "./creators/blogCreators.js"
import { bindInfoPart } from "./creators/infoCreators.js"
import { getInfo } from "./requests/infoRequest.js"

async function LoadMyData() {
    const menuServices = await getMenu()
    const heroServices = await getHero()
    const aboutServices = await getAbout()
    const services = await getServices()
    const factsServices = await getFacts()
    const portfolioServices = await getPortfolio()
    const testimonialsServices = await getTestimonials()
    const blogServices = await getBlog()
    const infoServices = await getInfo()

    bindMenuPart(menuServices)
    bindHeroPart(heroServices[0])
    bindAboutPart(aboutServices[0])
    bindServicesPart(services)
    bindFactsPart(factsServices)
    bindPortfolioPart(portfolioServices)
    bindTestimonialsPart(testimonialsServices)
    bindBlogPart(blogServices)
    bindInfoPart(infoServices[0])
}

document.addEventListener("DOMContentLoaded", LoadMyData)