const portfolioImg = document.querySelector('#portfolio-img')

export const bindPortfolioPart = (data) => {
    portfolioImg.innerHTML = ""
    data.map(portfolio => {
        portfolioImg.innerHTML += `
        <div class="col-lg-4 col-md-6 grid-item marketing">
        <div class="single-portfolio-item ">
            <img src="${portfolio.url}" alt="" class="img-fluid">
            <div class="overlay text-center">
                <div class="content">
                    <h3>${portfolio.logo}</h3>
                    <p>${portfolio.brand}</p>
                    <a href="${portfolio.url}" class="image-link">
                        <span class="fa fa-eye"></span></a>
                </div>
            </div>
        </div>
    </div>`
    });
}
