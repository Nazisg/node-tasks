import ApiRequest from "./baseRequest.js";
import { CONTACT_ENDPOINT } from "../url_helper.js";

const _service = new ApiRequest()

export const getContact = async () =>{
    const resp = await _service.get(CONTACT_ENDPOINT)
    return resp.json()
}