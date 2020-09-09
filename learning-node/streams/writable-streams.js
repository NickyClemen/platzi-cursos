const { Writable } = require('stream'); // Módulo nativo.

const writableStream = new Writable({
    /* En el constructor, se implementa el método write, que tiene tres parámetros:
        1) chunk: Partes que datos que van llegando.
        2) encoding (opcional): Codificación.
        3) callback. */
    write(chunk, encoding, callback) {
        console.log(chunk.toString());
        callback(); // Se lo llama para terminar la función.
    }
}); // Tiene que estar vinculado a un readable stream.

process.stdin.pipe(writableStream);
// Funcionalidad nativa para leer datos.