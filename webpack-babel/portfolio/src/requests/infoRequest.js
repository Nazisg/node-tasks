import ApiRequest from "./baseRequest.js";
import { INFO_ENDPOINT } from "../url_helper.js";

const _service = new ApiRequest()

export const getInfo = async () => {
    const resp = await _service.get(INFO_ENDPOINT)
    return resp.json()
}