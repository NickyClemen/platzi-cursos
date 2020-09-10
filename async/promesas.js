/* A difencia de los callbacks, las promesas pueden tener un estado. Son una clase global.
Las promesas se pueden anidar. */
function hola(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Hola, ${ nombre }.`);
            resolve(nombre);
        }, 1500);
    });
}

function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Blah, blah, blah.');
            resolve(nombre);
            reject('Hay un error.');
        }, 1000);
    });
}

function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Adios, ${ nombre }.`);
            resolve();
        }, 1000);
    });
}

console.log('Iniciando el proceso.');

hola('Nicole')
    .then(hablar)
    .then(nombre => adios(nombre))
    .then(nombre => console.log('Terminado el proceso.'))
    .catch(reject => console.error(reject.message));