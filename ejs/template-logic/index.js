const http = require("http")
const { handleRoutes } = require("./routers/router")
const { useAllStaticFiles } = require("./middlewares/static-file-middleware")

const PORT = 4556

const server = http.createServer((req, res) => {
    useAllStaticFiles(req, res, () => {
        handleRoutes(req, res)
    })
})

server.listen(PORT, () => {
    console.log(`Server listen port ${PORT}`)
})