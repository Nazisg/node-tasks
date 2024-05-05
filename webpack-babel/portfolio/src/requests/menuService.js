import ApiRequest from "./baseRequest.js";
import { MENU_ENDPOINT } from "../url_helper.js";

const _service = new ApiRequest()

export const getMenu = async () =>{
    const resp = await _service.get(MENU_ENDPOINT)
    return resp.json()
}