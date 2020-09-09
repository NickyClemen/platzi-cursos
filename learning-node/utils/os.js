const os = require('learning-node/utils/os');

// Muestra los cores del procesador.
console.table(os.cpus());
// Mostrar IP de la máquina.
console.log(os.networkInterfaces().lo.map(i => i.address));
// Memoria libre en bytes.
console.log(os.freemem());
// Tipo de sistema operativo.
console.log(os.type());
// Versión del sistema operativo.
console.log(os.release());
// Información del usuario.
console.log(os.userInfo());
