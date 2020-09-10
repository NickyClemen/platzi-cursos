/* Template engine
Implementación de software para mezclar datos y un template. Se puede generar un HTML.
Express trae para hacer su propio template engine. Permite tener diferentes templete engine.
    app.engine(ext, (filepath, options, callback) => {})
        a) ext -> Extensión del archivo.
        b) Callback del template engine.
            I) Ruta del archivo.
            II) Datos que se le van a pasar al template.
            III) Callback en el que se retorna el template.

    app.set('views', './views') -> Especifica el directorio de las vistas.
    app.set('view engine', 'ext') -> Registra el template engine. */
const express = require('express');
const app = express();
const expressEngine = require('./express');

app.engine('jsx', expressEngine);
app.set('views', './views');
app.set('view engine', 'jsx');

app.get('/', (req, res, next) => {
    res.render('index', { hello: 'hola', world: 'world' }); // Renderiza una vista.
});

const server = app.listen(8000, () => {
    console.log(`Listening http://localhost:${ server.address().port }`);
});