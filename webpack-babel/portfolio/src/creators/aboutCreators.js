const aboutImg = document.querySelector("#about-img")
const aboutMe = document.querySelector("#about-me")

export const bindAboutPart = (data) => {
    aboutImg.src = data.url
    aboutMe.innerHTML = ""
    aboutMe.innerHTML = `
    <div id="about-me" class="col-lg-8 col-md-12 p-0">
        <h2>${data.title}</h2>
        <p>
        ${data.text1}
            <br><br>
            ${data.text2}
        </p>
        <a href="#0" class="btn-1">${data.btnCV}</a>
        <a href="#0" class="btn-2">${data.btnPortfolio}</a>
    </div>`
}