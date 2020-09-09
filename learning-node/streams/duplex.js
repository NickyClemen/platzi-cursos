const { Duplex } = require('stream');
const { read } = require('fs');
/* Duplex implementa las interfaces de writable y readable streams. */
const duplexStream = new Duplex({
    write(chunk, encoding, callback) {
        console.log(chunk.toString()); // chunk viene de tipo Buffer.
        callback();
    },
    read(size) {
        if(this.currentCharCode > 90) {
            this.push(null);
            return;
        }

        this.push(String.fromCharCode(this.currentCharCode++));
    }
});

duplexStream.currentCharCode = 65;
process.stdin.pipe(duplexStream).pipe(process.stdout);