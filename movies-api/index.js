const { config } = require('./config');
const debug = require('debug')('app:server');

const express = require('express');
const cors = require('cors');
const app = express();

const moviesApi = require('./routes/movies');

const { logErrors, wrapErrors, errorHandler } = require('./utils/middleware/errorHandlers');
const notFoundHandler = require('./utils/middleware/notFoundHandler');

app.use(express.json());
app.use(cors());

moviesApi(app);

app.use(notFoundHandler);

app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, () => {
    debug(`Listening http://localhost:${ config.port }`);
});

/* Controllers: Capa de middlewares y de router. Se comunican con la API, y reciben u envían JSON.
Los controllers no llaman a otros controllers, solamente llaman servicios. Son independientes entre sí.
Services: Es el core del programa. Está toda la lógica de negocio (business logic). Los servicios pueden llamar a otros
servicios o librerías.
Libraries (Model): Están sujetas a librerías externas. DDBB, Cloud DDBB y otras APIs.

Middleware: Es una pieza de software que está entre otras dos (software glue).
Ayuda a conectar a otras piezas.
    function(req, res, next) {
        req: Request body.
        res: Response body.
        next(); Callback: Llamado 'next' por convención.
        Se puede hacer cualquier ejecución de código: Modificar response/request object, y se ejecuta next para llamar
        el próximo middleware. Si se le pasa un argumento, se ejecutan los middlewares de error.
    }

Middleware de error.
    function errorHandler(err, req, res, next) {
        res.status(err.status || 500);
        res.json({ error: err }); err: Ayuda a manipular el error.
    }

Capa validación de datos
Es necesaria porque los endpoints no sabe qué clase de datos se le está pasando.
Se utilizan para pasarle schemas.
Schema determina el formato que debe tener la información.
El check es el parámetro que se quiere chequear. Por default, es req.body.

    function validationHandler(schema, check = 'body) {
        return function(req, res, next) {
            const error = validate(req[check], schema);
            error ? next(new Error(error)) : next();
        }
    }

Joi y Boom
Del ecosistema de Hapi.
    1) Joi: Object Schema Validation: Para verificación de schemas.
    2) boom: HTTP-friendly error objects. Validador de errores.

Testing
Mocha: Ayuda a correr los test.
Supertest: Levanta los servers temporal.
Sinon: Mocks para tests.
Proxyquire: Inyecta los mocks.

TDD (Test Driven Development): Se crean primero los test, y luego la funcionalidad.
Coverage: Identifica dónde se está fallando, y cómo se puede solucionar.
    npm i -D nyc*/