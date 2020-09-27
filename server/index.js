const router = require('./routes');

const express = require('express');
const app = express();

app.use(express.json());
app.use('/api', router);

app.listen(3000, () => console.log('Servidor corriendo en el puerto 3000.'));