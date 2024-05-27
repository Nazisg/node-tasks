import ApiRequest from "./baseRequest.js";
import { SERVICES_ENDPOINT } from "../url_helper.js";

const _service = new ApiRequest()

export const getServices = async () =>{
    const resp = await _service.get(SERVICES_ENDPOINT)
    return resp.json()
}