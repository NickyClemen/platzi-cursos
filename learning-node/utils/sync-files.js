const fs = require('fs');

try {
    const file = process.argv[2]; // Argumentos de vector. Pasa los parámetros por terminal.
    const content = fs.readFileSync(file).toString();
    const lines = content.split('\n').length;

    console.log(lines);
} catch(err) {
    console.log(err.message);
} // Cuando se hace de manera síncrona.