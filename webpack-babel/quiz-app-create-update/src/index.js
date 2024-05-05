import { initalizeQuestions } from "./view/question.js";
import { initStepper } from "./view/stepper.js";
import { initalizeSubjects } from "./view/subject.js";

const onLoad = () => {
    initStepper();
    initalizeSubjects()
    initalizeQuestions()
}

document.addEventListener('DOMContentLoaded', onLoad)