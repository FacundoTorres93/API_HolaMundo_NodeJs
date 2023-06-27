const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, resp) => {
    resp.statusCode = 200;
    resp.setHeader('Content-type', 'application/json');
    resp.end('{Mensaje: "Hola Mundo NodeJs!!"}');
})

server.listen(port, hostname, () => {
    console.log(`Server running att http://${hostname}:${port}/`);
});