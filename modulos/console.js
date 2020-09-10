console.log('Muestra contenido.');
console.info('Lo mismo que console.log. Si tenemos módulos para configurar la consola, lo hace.');
console.error('Muestra errores.');
console.warn('Warnings.');

let tabla = [
    {
        a: 1,
        b: 'Z'
    },
    {
        a: 2,
        b: 'Otra letra'
    }
]

// Muestra en tablas.
console.table(tabla);

// Agrupa logs.
console.group('Conversación');
console.log('Hola');
console.log('Cómo estás');
console.log('Adiós');
console.groupEnd('Conversación');

// Contador.
console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces'); // Limpia el contador.
console.count('veces');

function functionUno() {
    console.group('Función uno.');
    console.log('Estamos en la función uno.');
    functionDos();
    console.log('Volvimos a la función uno.');
    console.groupEnd('Función uno.');
}

function functionDos() {
    console.group('Función dos.');
    console.log('Estamos en la función dos.');
    console.groupEnd('Función dos.');
}

functionUno();

// Temporizador.
console.time('timer');
console.timeEnd('timer'); // Cierra el temportizador.

// Limpia la consola.
console.clear();

