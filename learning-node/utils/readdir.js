const fs = require('fs');

const files = fs.readdir(__dirname, (err, files) => {
    if(err) {
        return console.log(err.message);
    }

    console.log(files);
}); /* Leer los archivos que están el directorio.
__dirname muestra el directorio actual. */