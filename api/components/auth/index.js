/* Autenticación: Reconoce quién es. Es general para toda la aplicación.
Gestión de permisos: Qué podés hacer. Depende del componente.

JWT (JSON WEb Token)
Información de usuario cifrada.
Tiene tres partes:
    1) Header: Define el algoritmo de cifrado y el tipo de token.
    2) Payload: Datos.
        Básicos:
            a) sub: Subscriber. Usuario.
            b) name: Nombre.
            c) iat: Vencimiento del token.
    3) Verificación de firma: Hay una clave secreta para cifrar los tokens. */
const store = require('../../../store/mysql');
const controller = require('./controller');

module.exports = controller(store);