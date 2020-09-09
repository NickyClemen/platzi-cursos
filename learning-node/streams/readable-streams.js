const { Readable } = require('stream'); // Módulo nativo.
const readableStream = new Readable();

readableStream.push(`${ 0/0 } `.repeat(10).concat(' Batman, Batman!'));
readableStream.push(null); // Se le avisa que deja de recibir datos y los muestra.

readableStream.pipe(process.stdout);
// process.stdout imprime en la consola.