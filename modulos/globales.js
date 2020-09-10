/* Los módulos del core están en global (es el objeto global en Node).
this es un alias de global.
    1) setTimeout.
    2) setIterval.
    3) SetImmediate.
    4) clearTimeout.
    5) clearInterval. */
let i = 0;

let intervalo = setInterval(() => {
    console.log('Hola.');
    if(i === 3) {
        clearInterval(intervalo);
    }

    i++;
}, 1000);

setImmediate(() => {
    console.log('Intermedio.');
});

console.log(__dirname);
console.log(__filename);
console.log(__dirname);

// Crear variables globales. Mala práctica.
global.miVariable = 'elValor';
console.log(miVariable);