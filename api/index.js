// Variables de entorno.
const dotenv = require('dotenv');
dotenv.config({ path: `${ __dirname }/../.env` });

const PORT = process.env.PORT || 3000;

// Componentes.
const user = require('./components/user/network');
const auth = require('./components/auth/network');
const errors = require('../network/errors');

// Middleware.
const bodyParser = require('body-parser');

// Servidor Express.
const express = require('express');
const app = express();

app.use(bodyParser.json());

app.use('/api/user', user);
app.use('/api/auth', auth);

app.use(errors);

app.listen(PORT, () => console.log('Server levantado en el puerto 3000.'));