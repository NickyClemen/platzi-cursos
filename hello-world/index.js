const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
    res.send('Hello world!'); // Se puede mostrar cualquier tipo de dato.
});

const server = app.listen(8000, () => {
    console.log(`Listening http://localhost:${ server.address().port }`);
});