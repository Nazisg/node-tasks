const address = document.querySelector("#address")
const phone = document.querySelector("#phone")
const email = document.querySelector("#email")
const facebook = document.querySelector("#facebook")

export const bindContactPart = (data) => {
    address.innerHTML = `
    <figure class="mb-0" >${data.address}</figure>
    <figure>${data.address2}</figure>`

    phone.innerHTML =`
    <figure class="mb-0">${data.phone}</figure>
    <figure>${data.phone2}</figure>`

    email.innerHTML = `
    <figure class="mb-0">${data.email}</figure>
    <figure>${data.email2}</figure>`

    facebook.innerHTML = data.facebook
}