/* WebSockets (wss://)
Conexiones en tiempo real. Protocolo de comunicación masivo.
Se crea un túnel de información que se comparte entre clientes hasta que uno cierre la conexión (cliente/servidor).
Red de comunicación abierta para recibir y mandar eventos.
Las actualizaciones le llegan a todos los clientes. */
const express = require('express');
const app = express();

const server = require('http').Server(app); // Servidor de Node con Express para gestionar rutas.

app.use(express.static('public'));

const io = require('socket.io')(server);

io.on('connection', socket => {
    console.log('Nuevo usuario conectado.');
    socket.emit('message', 'Bienvenido al canal.'); // Se envía un mensaje cada vez que se conecte un user.
});

setInterval(() => io.emit('message', 'Hola desde setInterval.'), 1000);

server.listen(8080, () => console.log('Servidor corriendo en el puerto 8080.'))