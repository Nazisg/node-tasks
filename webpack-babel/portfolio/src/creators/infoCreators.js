const info = document.querySelector(".info")

export const bindInfoPart = (data) => {
    info.innerHTML = ` 
    <span class="fa fa-map-marker"></span>
        <p>${data.address1}
            <br>
            ${data.address2}</p>

        <span class="fa fa-mobile"></span>
        <p>${data.number1}
            <br>
            ${data.number1}</p>
    <span class="fa fa-at"></span>
    <p>${data.mail1}<br> ${data.mail1}</p>`
}