function hola(nombre, miCallback) {
    console.log(`Hola, ${ nombre }. Soy una función asíncrona.`);
    setTimeout(() => {
        miCallback();
    }, 1000);
}

function hablar(callbackHablar) {
    setTimeout(() => {
        console.log('Blah, blah, blah.');
        callbackHablar();
    }, 1000);
}

function adios(nombre, otroCallback) {
    setTimeout(() => {
        console.log(`Adiós, ${ nombre }.`);
        otroCallback();
    }, 1000);
}

function conversacion(nombre, veces, callback) {
    if(veces > 0) {
        hablar(() => {
            conversacion(nombre, --veces, callback);
        });
    } else {
        adios(nombre, callback);
    }
}

console.log('Iniciando proceso.');
hola('Nicole', () => {
    conversacion('Nicole', 3, () => console.log('Terminando el proceso.'));
});
/* hola('Nicole', () => {
    adios('Nicole', () => console.log('Terminando el proceso.'));
}); // Callback hell: Varios callback anidados. Ayuda a solucionarlo creando funciones. */