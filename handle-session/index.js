// npm i express express-session
const express = require('express');
const session = require('express-session'); // Middleware para manejo de sesión.

const app = express();
app.use(session({
    resave: false, // No guardar la cookie cada vez que se haga un cambio.
    saveUninitialized: false,
    /* Es necesaria para cuando haya cambios de sesión siempre se guarde con este mecanismo.
    Si no se inicializa la cookie, no guardarla por defecto. */
    secret: "keyboard cat",
    /* Define un string de 256 bit para cookies seguras (la cifra con este secret). */
}));

app.get('/', (req, res) => {
    // Verificar si hay una sesión. Por default, es 1.
    req.session.count = req.session.count ? req.session.count + 1 : 1;
    res.status(200).json({ hello: 'world', counter: req.session.count });
    // counter permite guardar los atributos en la sesión.
});

app.listen(3000, () => console.log('Listening http://localhost:3000'));