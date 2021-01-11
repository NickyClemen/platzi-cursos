const { config } = require('./config');

const express = require('express');
const cors = require('cors');

const jwt = require('jsonwebtoken');
const axios = require('axios');

const encodeBasic = require('./utils/encodeBasic');

// Verificar JWKS.
const expressJwt = require('express-jwt');
const jwks = require('jwks-rsa');

// Verificar JWKS.
const jwtCheck = expressJwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: '<authorization-server-url>/.well-known/jwks.json'
    }),
    audience: '<api-indentifier>',
    issuer: '<authorization-server-url>',
    algorithms: ['RS256']
});

/* Resorce Owner Password Grant
    1) Se obtienen los datos del usuario mediante formulario.
    2) Hace una petición al Authorization Server. Es muy importante que la conexión sea HTTPS.
        const options = {
            method: 'POST',
            url: 'https://<authorization-server>/oauth/token',
            headers: { 'Content-Type': 'application/json' },
            body: {
                grant_type: 'password',
                username: '<username>',
                password: '<password>',
                audience: '<your-audience>',
                scope: '<your-scope>',
                client_id: '<your-client-id>',
                client_secret: '<your-client-secret>'
            },
            json: true,
        }

        axios(options, (error, response, body) => {
            if(error) {
                throw new Error(error);
            }

            console.log(body);
        });

    3) La respuesta tiene un JSON Web Token, generalmente de tipo Bearer, incluyendo el tiempo de expiración.
        {
            'access_token': '<access-token>',
            'token_type': 'Bearer',
            'expires_in': 3600,
        }

    4) La app puede usar el access_token para hacer peticiones a la API.

        const options = {
            method: 'GET',
            url: '<api-url>',
            headers: {
                'Authorization': `Bearer <access-token>`,
                'Content-Type': 'application-json'
            }
        }

        axiosoptions, (error, response, body) => {
            if(error) {
                throw new Error(error);
            }

            console.log(body);
        }); */

/* Authorization Code Grant (PKCE)
    1) Se genera y almacena un code_verifier.

        function base64URLEncode(str) {
            return str
                .toString('base64')
                .replace(/\+/g, '-')
                .replace(/\//g, '_)
                .replace(/=/g, '')
        }

        const verifier = base64URLEncode(crypto.randomBytes(32));

    2) Mediante el code_verifier generamos un code_challenge que será enviado en el llamado al Authorization Server.

        function sha256(buffer) {
            return crypto
                .createHash('sha256')
                .update(buffer)
                .digest();
        }

        const challenge = base64URLEncode(sha256(verifier));

    3) Para comenzar el PKCE, la app nativa debe enviar primero el usuario a la URL de autorización, incluyendo el code_challenge,
    el método utilizado para su creación para poder generar el authorizacion_code.

        https://<authorization-server>/authorize?
            audience=<your-audience>&
            scope=<your-scopes>&
            response_type=code&
            client_id=<your-cient-id>&
            code_challenge=<code-challenge>&
            code_challenge_method=S256&
            redirect_uri=<your-redirect-uri>

    4) Ahora que nuestra aplicación tiene el authorization_code, lo debemos cambiar por un access token.
    Para ello, obtenemos el authorization_code (code) de nuestro paso anterior, y hacemos un llamado tipo POST
    al endpoint de obtención de token enviando también el code_verifier.

        const options = {
            method: 'POST',
            url: 'https://<authorization-server>/oauth/token',
            headers: { 'Content-Type': 'application/json' },
            body:
                "{
                    'grant_type': 'authorization_code',
                    'client_id': '<your-client-id>',
                    'code_verifier': '<your-code-verifier>',
                    'code': '<your-authorization-code>',
                    'redirect_uri': '<your-redirect-uri>'
                }"
        };

        axios(options, function(error, response, body) {
            if (error) throw new Error(error);

            console.log(body);
        });

    5) La respuesta es un JWT de tipo Bearer:

        {
            'access_token': 'eyJz93a...k4laUWw',
            'token_type': 'Bearer'
        }

    6) Ya se pueden hacer llamados a las API.

        const options = {
            method: 'GET',
            url: 'https://<api-url>',
            headers: {
                'Authorization': `Bearer <access-token>`,
                'Content-Type': 'application-json',
            }
        };

        axios(options, function(error, response, body) {
            if (error) throw new Error(error);

            console.log(body);
        });
*/

const app = express();
app.use(express.json());
app.use(cors());
app.use(jwtCheck);

function getUserPlaylists(accessToken, userId) {
    if(!accessToken || !userId) {
        return Promise.resolve(null);
    }

    const options = {
        url: `https://api.spotify.com/v1/users/${ userId }/playlists`,
        headers: { Authorization: `Bearer ${ accessToken }`},
        json: true,
    };

    return new Promise((resolve, reject) => {
        axios.get(options, (error, response, body) => {
            if(error || response.statusCode !== 200) {
            reject(error);
            }

            resolve(body);
        });
    });
}

// Firma simétrica de JWT. Se recomienda hacerlo asimétrico.
app.post('/api/auth/token', (req, res, next) => {
    const { email, username, name } = req.body;
    const token = jwt.sign({ sub: username, email, name }, config.authJwtSecret); // Firma de token: Payload y el secret.

    res.json({ accessToken: token });
});

app.get('/api/auth/verify', async (req, res, next) => {
    const { accessToken } = req.query;

    try {
        const decoded = await jwt.verify(accessToken, config.authJwtSecret);
        res.json({ message: 'the access token is valid', username: decoded.sub });
    } catch(error) {
        next(error);
    }
});

app.get('/playlists', async (req, res, next) => {
    const { userId } = req.query;

    const authOptions = {
        url: `https://accounts.spotify.com/api/token`,
        headers: {
            Authorization: `Basic ${ encodeBasic(config.spotifyClientId, config.spotifyClientSecret) }`
        },
        form: {
            grant_type: 'client_credentials',
        },
        json: true,
    }

    axios.post(authOptions, async  (error, response, body) => {
        if(error || response.statusCode !== 200) {
            next(error);
        }

        const accessToken = body.access_token;
        const userPlaylists = await userPlaylists(accessToken, userId);

        res.json({  playlists: userPlaylists });
    });
});

// Verificar JWKS.
app.get('/authorized', (req, res, next) => {
    res.send('Secured Resource');
});

const server = app.listen(config.portApi, () => console.log(`Listening http://localhost:${ server.address().port }`));