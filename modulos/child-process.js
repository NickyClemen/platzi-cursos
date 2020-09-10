const { exec, spawn } = require('child_process');

/* exec('node modulos/console.js', (error, stdout, sterr) => {
    if(error) {
        console.error(err.message);
        return false;
    }

    console.log(stdout);
}); */

let proceso = spawn('ls', ['-la']);
console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', dato => {
    console.log('¿Está muerto?');
    console.log(process.killed);
    console.log(dato.toString())
}); // Captura datos.
proceso.stdout.on('exit', () => console.log('El proceso terminó.'));