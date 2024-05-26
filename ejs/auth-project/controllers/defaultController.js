const getDefaultPage = (req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Welcome to the Dashboard</h1>");
};

module.exports = { getDefaultPage };