/* Una sola instancia de Node.js corre un solo hilo de ejecución.
Para tomar ventaja de los sistemas con multiples core, necesitamos lanzar un cluster de procesos de Node para manejar la carga.
El módulo cluster nos permite la creación fácil de procesos hijos que comparten el mismo puerto del servidor. */
const cluster = require("learning-node/utils-debugging/cluster");
const http = require("http");

// Requerimos la cantidad de CPUs que tiene la máquina actual.
const numCPUs = require("os").cpus().length;

if(cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);
    // Si el cluster es maestro, creamos tantos procesos como númeroa de CPUS.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    // Si por alguna razón el cluster se finaliza, hacemos un log.
    cluster.on("exit", (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });
} else {
    // Los diferentes workers pueden compartir la conexión TCP.
    // En este caso es una servidor HTTP.
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end("hello world.\n");
    }).listen(8000);

    console.log(`Worker ${ process.pid } started`);
}