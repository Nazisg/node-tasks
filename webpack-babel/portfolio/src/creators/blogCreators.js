const blogs = document.querySelector('#blogs')

export const bindBlogPart = (data) => {
    blogs.innerHTML = ""
    data.map(blog => {
        blogs.innerHTML += `
        <div class="co-md-6 col-lg-4">
            <div class="box">
                <div class="image">
                    <img src="${blog.url}" alt="">
                    <a href="#" class="cate">${blog.cate}</a>
                </div>
                <div class="text">
                    <h3><a href="#">${blog.title}</a></h3>
                    <h4>${blog.date}</h4>
                    <p>${blog.description}</p>
                </div>
            </div>
        </div>`
    });
}
