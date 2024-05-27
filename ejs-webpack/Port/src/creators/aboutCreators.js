const desc = document.querySelector("#desc")
const contact = document.querySelector("#contact")

export const bindAboutPart = (data) => {
    desc.innerHTML = data.desc
    contact.innerHTML =`
    <dt>Name:</dt>
    <dd>${data.name}</dd>
    <dt>Phone:</dt>
    <dd>${data.phone}</dd>
    <dt>Email:</dt>
    <dd>${data.email}</dd>
    <dt>Twitter:</dt>
    <dd>${data.twitter}</dd>`
}