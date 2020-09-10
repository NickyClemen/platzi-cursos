/* Las funciones son objetos de primera clase, por lo que se puede utilizar de cualquier manera.
Pasar una función como parámetro, lo convierte en un callback. */
function hola(nombre, miCallback) {
    console.log(`Hola, ${ nombre }. Soy una función asíncrona.`);
    setTimeout(() => {
        miCallback();
    }, 1000);
}

function adios(nombre, otroCallback) {
    setTimeout(() => {
        console.log(`Adiós, ${ nombre }.`);
        otroCallback();
    }, 1000);
}

console.log('Iniciando proceso.');
hola('Nicole', () => {
    adios('Nicole', () => console.log('Terminando el proceso.'))
});
