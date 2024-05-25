const generateResponse = ({res, status, header, data}) => {
    console.log('Response object:', res);
    const headers = {
        'Content-Type': header,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': "GET, HEAD, OPTIONS, POST, PUT",
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Max-Age': 2592000,
    };
    res.writeHead(status, headers);
    res.end(data);
};

module.exports = generateResponse;