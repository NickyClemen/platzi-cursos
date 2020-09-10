async function hola(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Hola, ${ nombre }.`);
            resolve(nombre);
        }, 1500);
    });
}

async function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Blah, blah, blah.');
            resolve(nombre);
            reject('Hay un error.');
        }, 1000);
    });
}

async function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Adios, ${ nombre }.`);
            resolve();
        }, 1000);
    });
}

async function main() {
    let nombre = await hola('Nicole');
    await hablar();
    await adios(nombre);
}

main();