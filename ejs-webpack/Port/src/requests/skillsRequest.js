import ApiRequest from "./baseRequest.js";
import { SKILLS_ENDPOINT } from "../url_helper.js";

const _service = new ApiRequest()

export const getSkills = async () =>{
    const resp = await _service.get(SKILLS_ENDPOINT)
    return resp.json()
}