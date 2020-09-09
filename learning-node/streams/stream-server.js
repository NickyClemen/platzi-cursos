const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
    const src = fs.createReadStream('./big'); // Lee el archivo como un stream.
    src.pipe(res);
});

server.listen(3000);
console.log('Server levantado en el puerto 3000.');