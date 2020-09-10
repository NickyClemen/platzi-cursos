/* Streams: Un pase de datos entre un punto a otro.
Hay tres tipos:
    1) De lectura: Se tiene un origen, y va pasando datos, y se los recogiendo en destino.
    2) Doble sentido: Intercambio de streams entre orgien y destino. */
const fs = require('fs');
const stream = require('stream');
const util = require('util'); // Para trabajar con herencia automática.

let data = '';
let readableStream = fs.createReadStream(`${ __dirname }/input.txt`); // Crear un stream de lectura.
readableStream.setEncoding('UTF8'); // Setea la codificación del stream.
readableStream.on('data', (chunk) => {
    // console.log(chunk); // Recibe un buffer.
    data += chunk; // Se va capturando la información si es muy pesada.
});

process.stdout.write('Hola'); // Crear un stream de escritura. Escribe en el buffer de la salida standard del sistema.
process.stdout.write('qué');
process.stdout.write('tal');

const Transform = stream.Transform; // Crear un stream de transformación. Puede leer y escribir.
function Upper() {
    Transform.call(this);
}

util.inherits(Upper, Transform);

Upper.prototype._transform = function(chunk, codif, callback) {
    upperChunk = chunk.toString().toUpperCase();
    this.push(upperChunk);
    callback();
}

let upper = new Upper();

readableStream
    .pipe(upper) // Se utiliza para mandar información de un lugar a otro.
    .pipe(process.stdout);

readableStream.on('end', () => console.log(data)); // Captura el final del stream.