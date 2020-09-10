// Acceder a elementos del sistema operativo.
const os = require('os');

// Retorna la arquitectura del sistema operativo. Es importante para trabajar con módulos nativos en C.
console.log(os.arch());

// Retorna la plataforma (Linux, Windows, macOS, etc).
console.log(os.platform());

// Retorna la información del CPU.
console.log(os.cpus().length);

// Errores del sistema.
console.log(os.constants);

// Memoria en bytes.
console.log(os.freemem());
const SIZE = 1024;

function kb(bytes) {
    return bytes / SIZE;
}

function mb(bytes) {
    return kb(bytes) / SIZE;
}

function gb(bytes) {
    return mb(bytes) / SIZE;
}

console.log(kb(os.freemem()));
console.log(mb(os.freemem()));

// Memoria total.
console.log(gb(os.totalmem())); 

// Root.
console.log(os.homedir());
// Archivos temporales.
console.log(os.tmpdir());

// El hostname de la máquina.
console.log(os.hostname());

// Interface de red.
console.log(os.networkInterfaces());