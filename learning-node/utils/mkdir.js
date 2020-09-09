const fs = require('fs');

fs.mkdir('platzi/escuela-js/node', { recursive: true }, err => {
    if(err) {
        return console.log(err.message);
    }
}); // Para indicarle que cree más de una carpeta, hay que avisarle que sea recursivo.