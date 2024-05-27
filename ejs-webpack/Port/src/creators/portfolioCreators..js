const portfolioBox = document.querySelector("#portfolio-box")

export const bindPortfolioPart = (data) => {
    portfolioBox.innerHTML = ''
    data.map(port => {
        portfolioBox.innerHTML += `
        <a href="${port.url}" class="card ts-gallery__item popup-image" data-animate="ts-fadeInUp">
        <div class="ts-gallery__item-description">
            <h6 class="ts-opacity__50">${port.brand}</h6>
            <h4>${port.title}</h4>
        </div>
        <img src="${port.url}" class="card-img" alt="">
        <!--end ts-gallery__image-->
    </a>`
    })
}