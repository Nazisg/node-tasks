import { bindHeroPart } from "./creators/heroCreators.js"
import { getHero } from "./requests/heroRequest.js"

async function LoadMyData() {
    const heroServices = await getHero()

    bindHeroPart(heroServices[0])
}

document.addEventListener("DOMContentLoaded", LoadMyData)