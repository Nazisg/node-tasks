const title = document.querySelector(".title")

export const bindHeroPart = (data) => {
    title.innerHTML = data.title
}