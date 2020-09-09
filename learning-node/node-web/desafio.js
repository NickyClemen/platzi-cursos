const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    if(req.method === 'POST' && req.url === '/api') {
        let body = [];

        req
            .on('data', chunk => body.push(chunk))
            .on('end', () => {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                body = Buffer.concat(body).toString().split('-');
                let birthday = findDay(body);
                res.end(birthday);
            });
    } else {
        res.statusCode = 404;
        res.end('Error 404. Página no encontrada');
    }
});

function findDay(bodyRes) {
    const week = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const year = bodyRes[2];
    const month = bodyRes[1] - 1;
    const day = bodyRes[0];

    let birthday = new Date(year, month, day);

    for(let i = 0; i < week.length; i++) {
        if(birthday.getUTCDay() === i) {
            return week[i];
        }
    }
}

server.listen(8002);
console.log('Servidor corriendo en el puerto 8002.');