/* Dentro del event emitter, se puede usar todo tipo de asincronía. */
const EventEmitter = require('events');

class Logger extends EventEmitter {
    execute(cb) {
        console.log('Before');
        this.emit('start');
        cb();
        this.emit('finish');
        console.log('After');
    }
}

const logger = new Logger();

logger.on('start', () => console.log('Starting')); // Captura los eventos.
logger.on('finish', () => console.log('Finishing'));

logger.execute(() => console.log('Hello world!'));