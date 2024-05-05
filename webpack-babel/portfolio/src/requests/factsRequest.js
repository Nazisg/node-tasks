import ApiRequest from "./baseRequest.js";
import { FACTS_ENDPOINT } from "../url_helper.js";

const _service = new ApiRequest()

export const getFacts = async () =>{
    const resp = await _service.get(FACTS_ENDPOINT)
    return resp.json()
}