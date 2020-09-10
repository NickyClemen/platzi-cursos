const express = require('express');
let app = express();

const server = require('http').Server(app);

const cors = require('cors');
const bodyParser = require('body-parser');
const socket = require('./socket');

require('dotenv').config();
const URL_MONGO = process.env.DB_MONGO;
const PORT = process.env.PORT || 3000;
const publicRoute = process.env.PUBLIC_ROUTE;

const config = require('./config');
const db = require('./db');
const router = require('./network/routes');

db(URL_MONGO);

app.use(bodyParser.json());
app.use(cors());

socket.connect(server);

router(app);

app.use(`/${ publicRoute }`, express.static('public'));

server.listen(PORT, () => {
    console.log(`La aplicación está corriendo en el puerto ${ PORT }.`);
});