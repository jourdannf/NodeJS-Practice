const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    switch (req.url) {
        case "/":
            res.statusCode = 200;
            res.write("HELLO!");
            res.end();
        
        case "/date":
            res.statusCode = 200;
            res.statusMessage = "Date Found!";
            res.sendDate;
            res.write("Date Found!")
            res.end();
        default:
            res.statusCode = 404;
            res.statusMessage = "Error: Not Found";
            break;
    }

    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});