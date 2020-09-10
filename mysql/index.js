const dotenv = require('dotenv');
dotenv.config({ path: `${ __dirname }/../.env` });
const MYSQL_PORT = process.env.MYSQL_PORT;

const bodyParser = require('body-parser');

const express = require('express');
const router = require('./network');
const app = express();

app.use(bodyParser.json());

app.use('/', router);

app.listen(MYSQL_PORT, () => console.log('Server levantado en el puerto 3001.'));

