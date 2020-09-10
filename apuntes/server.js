const express = require('express');
const bodyParser = require('body-parser'); // body-parser: Permite manipular el body de la request.

const response = require('./network/response');

let app = express();
const router = express.Router(); // Permite separar por peticiones.
app.use(bodyParser.json()); // Hay métodos por cada Content-Type.
app.use(router);

router.get('/message', (req, res) => {
    // Leer los headers.
    console.log(req.headers);
    /* Se utiliza mucho:
        1) cache-control.
        2) user-agent: Para saber desde dónde viene la información.
        3) accept-encoding. */
    res.header({
        "custom-header": "Valor personalizado"
    }); // Setear un header.

    // res.send(); // Response vacía.
    // res.send('Lista de mensajes'); // Response plana.
    response.success(req, res, 'Lista de mensajes.');
});

router.post('/message', (req, res) => {
    console.log(req.query);
    console.log(req.body.text);

    if(req.query.error == 'ok') {
        response.error(req, res, 'Error inesperado.', 500, 'Error simulado.');
    } else {
        response.success(req, res, 'Enviado correctamente.', 201);
    }
    /* res.status(201).send({
        error: '',
        body: 'Enviado correctamente.'
    }); // Envía un objetos complejos. */
});

router.delete('/message', (req, res) => {
    console.log(req.query);
    console.log(req.body.text);

    res.status(201).send(); // Envía un estado.
});

// app.use('/', (req, res) => res.send('Hola.'));

// Para archivos estáticos. Están en la carpeta public.
app.use('/app', express.static('public'));


app.listen(3000);
console.log('La aplicación está corriendo en el puerto 3000.');