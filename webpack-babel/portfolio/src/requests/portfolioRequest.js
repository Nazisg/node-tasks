import ApiRequest from "./baseRequest.js";
import { PORTFOLIO_ENDPOINT } from "../url_helper.js";

const _service = new ApiRequest()

export const getPortfolio = async () => {
    const resp = await _service.get(PORTFOLIO_ENDPOINT)
    return resp.json()
}