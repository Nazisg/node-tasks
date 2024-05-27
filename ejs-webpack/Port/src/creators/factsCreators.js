const factsBox = document.querySelector("#facts-box")

export const bindFactsPart = (data) => {
    factsBox.innerHTML = ''
    data.map(fact => {
        factsBox.innerHTML += `
        <div class="col-sm-6 col-md-3">
        <div class="ts-promo-number text-center">
            <figure class="odometer" data-odometer-final="${fact.count}">0</figure>
            <h5>${fact.title}</h5>
        </div>
        <!--end ts-promo-number-->
    </div>
       `
    })
}