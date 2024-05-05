const servicesBox = document.querySelector("#services-box")

export const bindServicesPart = (data) => {
    servicesBox.innerHTML = ''
    data.map(service => {
        servicesBox.innerHTML += `
    <div class="col-md-6 col-lg-4">
        <div class="box">
            <span class="fa fa-cog"></span>
            <h3>${service.title}</h3>
            <p>${service.description} </p>
        </div>
    </div>`
    })
}