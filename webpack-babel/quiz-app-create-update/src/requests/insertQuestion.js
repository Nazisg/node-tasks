import ApiRequest from "./baseRequest.js";
import { QUESTION_ENDPOINT } from "../helpers/urlHelper.js";

const _service = new ApiRequest();

export const getAllQuestions = async () => {
    const result = await _service.get(QUESTION_ENDPOINT)
    return await result.json()
}

export const insertQuestion = async data => {
    const result = await _service.insert(QUESTION_ENDPOINT, data)
    return await result.json()
}

export const deleteQuestion = async id => {
    const result = await _service.delete(QUESTION_ENDPOINT, id)
    return await result.json()
}

export const updateQuestion = async (id, data) => {
    const result = await _service.update(QUESTION_ENDPOINT, id, data);
    return await result.json();
};