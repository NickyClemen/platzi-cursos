const jwt = require('jsonwebtoken');

const dotenv = require('dotenv');
dotenv.config({ path: `${ __dirname }/../.env` });

const SECRET = process.env.SECRET || 'notasecret!';

const error = require('../utils/error');

function sign(data) {
    return jwt.sign(data, SECRET);
}

function verify(token) {
    return jwt.verify(token, SECRET);
}

const check = {
    own: (req, owner) => {
        const decoded = decodeHeader(req);

        if(decoded.id !== owner) {
            throw error('No podés ejecutar ésta acción.', 401);
        }
    },
    logged: (req, owner) => {
        const decoded = decodeHeader(req);
    },
}

function getToken(auth) {
    if(!auth) {
        throw new Error('No hay datos.');
    }

    if(auth.indexOf('Bearer ') === -1) {
        throw new Error('Formato inválido.');
    }

    let token = auth.replace('Bearer ', '');
    return token;
}

function decodeHeader(req) {
    const authorization = req.headers.authorization || '';
    const token = getToken(authorization);
    const decoded = verify(token);

    req.user = decoded;

    return decoded;
}

module.exports = {
    sign,
    check,
}