const skillsBox = document.querySelector("#skills-box")

export const bindSkillsPart = (data) => {
    skillsBox.innerHTML = ''
    data.map(skill => {
        skillsBox.innerHTML += `
        <div class="progress" data-progress-width=${skill.progress}>
        <h5 class="ts-progress-title">${skill.title}</h5>
        <figure class="ts-progress-value"></figure>
        <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
    </div>`
    })
}