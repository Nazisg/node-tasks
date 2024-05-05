const ul = document.querySelector('.navbar-nav')

export const bindMenuPart = (data) => {
    ul.innerHTML = ""
    data.map(menu => {
        ul.innerHTML += `
        <li class="nav-item">
          <a class="nav-link" href="#slider">${menu.title}</a>
        </li>`
    });
}
