const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
    fs.readFile('./big', (err, data) => {
        if(err) {
            console.log('error', error.message);
        }

        res.end(data);
    });
});

server.listen(3000);
console.log('Server levantado en el puerto 3000.');