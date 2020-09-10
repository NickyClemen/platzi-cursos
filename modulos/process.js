// process: Acceder al proceso de Node.

// Detectar antes de que termine.
process.on('beforeExit', () => console.log('El proceso está por acabar.'));

// Detectar cuando el programa termine. Te desconectás del eventloop. Todo tiene que ser síncrono.
process.on('exit', () => console.log('El proceso se acabó.'));

// Capturar excepciones.
process.on('uncaughtException', (error, origen) => {
    console.error('Se nos olvidó este error.'); // Que no se capturaron.
    console.error(error.message);
});
// process.on('uncaughtRejection'); // Para promesas sin catch.

funcionNoExiste();