/* Acceder archivos del sistema. */
const fs = require('fs');

function leer(ruta, callback) {
    fs.readFile(ruta, (error, data) => {
        console.log(data.toString()); /* Muestra un buffer, por lo que hay que convertirlo en un
        stringify. */
    });
}

function escribir(ruta, contenido, callback) {
    fs.writeFile(ruta, contenido, (error)  => {
        if(error) {
            console.log(error);
        } else {
            console.log('Se ha escrito exitosamente.');
        }
    });
}

function borrar(ruta, callback) {
    fs.unlink(ruta, callback);
}

// leer(`${ __dirname }/archivo.txt`);
// escribir(`${ __dirname }/archivoDos.txt`, 'Soy un archivo nuevo.', console.log);
// borrar(`${ __dirname }/archivoDos.txt`, console.log);