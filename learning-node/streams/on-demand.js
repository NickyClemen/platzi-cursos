const { Readable } = require('stream');
const readableStream = new Readable({
    read(size) {
        setTimeout(() => {
            if(this.currentCharCode > 90) {
                this.push(null);
                return;
            }

            this.push(String.fromCharCode(this.currentCharCode++));
        }, 100);
    } /* Recibe el método read, que recibe por parámetro el tamaño. */
});

readableStream.currentCharCode = 65; // Código de la letra en ASCII.
readableStream.pipe(process.stdout);