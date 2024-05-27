const servicesBox = document.querySelector("#services-box")

export const bindServicesPart = (data) => {
    servicesBox.innerHTML = ''
    data.map(service => {
        servicesBox.innerHTML += `
        <div class="col-sm-6 col-md-4 col-xl-4">
        <div class="ts-item" data-animate="ts-fadeInUp">
            <div class="ts-item-content">
                <div class="ts-item-header">
                    <figure class="icon">
                        <img src="${service.url}" alt="${service.title}">
                    </figure>
                    <!--end icon-->
                </div>
                <!--end ts-item-header-->
                <div class="ts-item-body">
                    <h4>${service.title}</h4>
                    <p class="mb-0">
                       ${service.desc}
                    </p>
                </div>
                <!--end ts-item-body-->
                <div class="ts-item-footer">
                    <a href="#" data-toggle="modal" data-target="#modal" class="ts-link-arrow-effect">
                        <span>Read More</span>
                    </a>
                </div>
                <!--end ts-item-footer-->
            </div>
            <!--end ts-item-content-->
        </div>
        <!--end ts-item-->
    </div>`

    })
}