const path = require('path');

const dotenv = require('dotenv');
dotenv.config({ path: '.env' });
const PORT = process.env.PORT;

const express = require('express');
const boom = require('boom');
const debug = require('debug')('app:server');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');

const productsRouter = require('./routes/views/products');
const productsApiRouter = require('./routes/api/products');
const authApiRouter = require('./routes/api/auth');

const { logErrors, wrapErrors, clientErrorHandler, errorHandler } = require('./utils/middlewares/errorsHandlers');
const isReqAjaxOrAPI = require('./utils/isReqAjaxOrAPI');

const app = express();

app.use(helmet());
app.use(cors()); // No recomendado habilitar * en producción.
app.use(bodyParser.json());

app.use('/static', express.static(path.join(__dirname, 'public'))); // Agrega archivos estáticos.

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/products', productsRouter);
productsApiRouter(app);
app.use('/api/auth', authApiRouter);

app.get('/', (req, res) => {
    res.redirect('/products');
});

app.use((req, res, next) => {
    if(isReqAjaxOrAPI(req)) {
        const { output: { statusCode, payload } } = boom.notFound();

        res.status(statusCode).json(payload);
    }

    res.status(404).render('404');
});

app.use(logErrors);
app.use(wrapErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

const server = app.listen(PORT, () => {
    // console.log(`Listening http://localhost:${ server.address().port }`);
    debug(`Listening http://localhost:${ server.address().port }`);
});

/* REST - Representational State Transfer. Arquitectura para web services.
Tiene una especificación escrita por Roy Fielding.
Envío y recibo de JSON/XML. Utiliza HTTP verbs. Patrón de URIs y usa en directorios.

Middleware es una función con tres argumentos. Capaz de request. Sirven para hacer modificaciones.
    1) HTTP request (req por convención).
    1) HTTP response (res por convención).
    1) Callback (next por convención). Llama al siguiente middleare.

Tipos
    1) 3rd party: Interceptan la request, y formatean el body.
    2) Router level: Routing.
    3) Application level
    4) Built-in
    5) Error-handling: Si no se incluyen los cuatro parámeros, Express no lo toma como middleware.
    Pueden ir uno dentro de otro.

        function errorHandler(err, req, res, next) {
            res.status(err.status || 500);
            res.render('error', { error_ err });
        }

Middleware de validación
    function validationHandler(schema, check = 'body') {
        return function(req, res, next) {
            const error = validate(req[check], schema);
            error ? next(new Error(error)) : next();
        }
    } schema: Reglas de validasción.
    check: Dónde se verifica. Por default, es el body.

Joi y Boom que vienen de Hapijs (competencia de Express).
Joi: Validador de schemas de objetos.
Boom: Enviar errores de manera más friendly.

Middleware más usados
    1) body-parser: Sirve para manipular el request body. Recibe jsob, xml, url encode, raw (buffer o binario), text.
    2) cors: Verificar CORS.
    3) morgan: Logger de request.
    4) helmet: Establecer headers para manejo de seguridad.
    5) express-debug: Debugger por defecto.
    6) express-slash: Devuelve una respuesta ante falta de slash.
    7) passport: AutentiCación.

JWT (JSON Web Token)
Standard para representar claims (peticiones/permisos).
Estructura
    1) Header: Tipo de algoritmo para encriptar a firma.
    2) Payload: Información para compartir (claims). No incluir información sensible.
    3) Signature: La firma es el header y el payload codificado con un secret.
Está codificado, no encriptado (es reversible).

Autenticación
npm i passport-http passport-jwt jsonwebtoken bcrypt
chalk - Colores en la consola.

Inversión de roles
Permitirle a la app qué usar.

Testing
    npm install --save-de mocha nyc proxyquire sinon supertest

Debbuger Express
    npm install --save-dev debug (viene con Express por defecto).

npm script
    npm install --save-dev clean-css-cli

Headers de seguridad
    npm install --save-dev helmet

CORS
    npm install cors */