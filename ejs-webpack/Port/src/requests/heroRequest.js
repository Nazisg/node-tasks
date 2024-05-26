import ApiRequest from "./baseRequest.js";
import { HERO_ENDPOINT } from "../url_helper.js";

const _service = new ApiRequest()

export const getHero = async () =>{
    const resp = await _service.get(HERO_ENDPOINT)
    return resp.json()
}