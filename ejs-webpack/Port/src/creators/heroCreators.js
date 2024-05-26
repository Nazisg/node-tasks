import Typed from "typed.js";
const hello = document.querySelector(".hello")
const paragraph = document.querySelector(".paragraph")
const btn = document.querySelector(".btn")

export const bindHeroPart = (data) => {
    hello.innerHTML = data.hello
    paragraph.innerHTML = data.description
    btn.innerHTML = data.btnTxt

    const typed = new Typed(".cd-words-wrapper", {
        strings: data.typedWords,
        loop: true,
        typeSpeed: 50
    });
}