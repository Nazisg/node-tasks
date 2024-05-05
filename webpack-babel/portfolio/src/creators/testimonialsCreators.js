const carousel = document.querySelector('.carousel-inner')

export const bindTestimonialsPart = (data) => {
    carousel.innerHTML = ""
    data.forEach((item, index) => {
        const activeClass = index === 0 ? 'active' : '';
        carousel.innerHTML += `
            <div class="carousel-item ${activeClass} text-center">
                <img src="img/testimonials.png" alt="" class="colon">
                <p>${item.description}<br>
                    Fusce faucibus ligula scelerisque, eleifend turpis in</p>
                <img src="${item.url}" alt="" class="center-block team">
                <h3>${item.fullName}</h3>
                <h4>${item.profession}</h4>
            </div>`;
    });
}