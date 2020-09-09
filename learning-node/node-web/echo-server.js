const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    if(req.method === 'POST' && res.url == '/echo') {
        let body = [];

        req
            .on('data', chunk => body.push(chunk))
            .on('end', () => {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                body = Buffer.concat(body).toString();
                res.end(body);
            });
    } else {
        res.statusCode = 404;
        res.end('Error 404. Página no encontrada');
    }
});

server.listen(8000);
console.log('Servidor corriendo en el puerto 8001.');