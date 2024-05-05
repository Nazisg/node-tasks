import ApiRequest from "./baseRequest.js";
import { BLOG_ENDPOINT } from "../url_helper.js";

const _service = new ApiRequest()

export const getBlog = async () => {
    const resp = await _service.get(BLOG_ENDPOINT)
    return resp.json()
}