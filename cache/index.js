const dotenv = require('dotenv');
dotenv.config({ path: `${ __dirname }/../.env` });
const CACHE_PORT = process.env.CACHE_PORT;

const bodyParser = require('body-parser');

const express = require('express');
const router = require('./network');
const app = express();

app.use(bodyParser.json());

app.use('/', router);

app.listen(CACHE_PORT, () => console.log('Server caché levantado en el puerto 3003.'));