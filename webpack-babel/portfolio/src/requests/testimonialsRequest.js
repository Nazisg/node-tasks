import ApiRequest from "./baseRequest.js";
import { TESTIMONIALS_ENDPOINT } from "../url_helper.js";

const _service = new ApiRequest()

export const getTestimonials = async () => {
    const resp = await _service.get(TESTIMONIALS_ENDPOINT)
    return resp.json()
}