// Variables de entorno.
const dotenv = require('dotenv');
dotenv.config({ path: `${ __dirname }/../.env` });

const POST_PORT = process.env.POST_PORT || 3002;

// Componentes.
const post = require('./components/post/network');
const errors = require('../network/errors');

// Middleware.
const bodyParser = require('body-parser');

// Servidor Express.
const express = require('express');
const app = express();

app.use(bodyParser.json());

app.use('/api/post', post);

app.use(errors);

app.listen(POST_PORT, () => console.log('Server levantado en el puerto 3002.'));