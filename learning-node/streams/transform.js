const { Transform } = require('stream');

const transformStream = new Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
    }
}); // Similar al duplex, sólo que la sintaxis es más corta.

process.stdin.pipe(transformStream).pipe(process.stdout);