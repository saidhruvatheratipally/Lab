const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/html') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>This is home page</h1>');
    } else if (req.url === '/text') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is another page');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Resource not found');
    }
});

server.listen(3000, () => {
    console.log('Server started succesfully');
});