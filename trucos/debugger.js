/* Con --inspect se cre aun hilo de nuevo con debugger.
En Chrome: chrome://inspect (primero hay que activar el inspect). */

// Crea un servidor, o conecta a otros servidores.
const http = require('http');
/* Los puertos que se suelen utilizar, son el 3000, 8080. El 80 es por default, pero está
reservado. */

const router = (request, response) => {
    console.log('Nueva petición.');
    console.log(request.url);

    switch(request.url) {
        case '/hola': {
            response.write('Hola, ¿qué tal?');
            response.end();
            break;
        }
        default:
            response.write('Error 404. No sé lo que querés.');
    }

    // Headers.
    response.writeHead(201, {
        'Content-Type': 'text/plain'
    });
    // Escribe en la página.
    response.write('Hola, ya sé usar HTTP de Node.js');

    response.end();
}

http.createServer(router).listen(3000);
console.log('Escuchando el servidor desde el puerto 3000.');