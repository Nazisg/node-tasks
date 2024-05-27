const testimonialsBox = document.querySelector("#testimonials-box")

export const bindTestimonialsPart = (data) => {
    testimonialsBox.innerHTML = ''
    data.map(testi => {
        testimonialsBox.innerHTML += `
        <div class="slide mb-5">
        <figure class="d-inline-block p-3 ts-bg-primary text-white ts-has-talk-arrow">
            <i class="fa fa-quote-right"></i>
        </figure>
        <p class="ts-h5">${testi.desc}</p>
        <div class="ts-circle__lg mb-3" data-bg-image="${testi.url}"></div>
        <h5>${testi.name}</h5>
        <h6 class="ts-opacity__40">${testi.position}</h6>
    </div>
       `
    })
}