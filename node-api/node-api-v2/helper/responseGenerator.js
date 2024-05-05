const generateResponse =(res, status, data)=>{
    res.writeHead(status,{'Contant-Type':'application/json'})
    res.end(JSON.stringify(data))
}

module.exports = generateResponse