const { Transform } = require('stream');

function upperCamelCase(arrStr) {
    for(let i = 0; i < arrStr.length - 1; i++) {
        arrStr[0] = arrStr[0].toUpperCase();

        if(arrStr[i] === ' ') {
            arrStr[i] = '';
            arrStr[i + 1] = arrStr[i + 1].toUpperCase();
        }
    }

    return arrStr;
}

const transformStream = new Transform({
    transform(chunk, encoding, callback) {
        let arrStr = chunk.toString().split('');
        this.push(upperCamelCase(arrStr).join('').toString());
        callback();
    }
});

process.stdin.pipe(transformStream).pipe(process.stdout);