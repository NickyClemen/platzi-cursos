/* Introducción al asincronismo.
JS es asíncrono-no bloqueante.
Event loop: Manejador de eventos implementado en un único hilo para acciones de input y output. 
Memory Heap: Espacio en memoria para compartido para toda la aplicación.
Call stack (Pila de ejecución): Las funciones son puestas en ejecución.
Cola de tareas: La función en la call stack, tiene un llamado a un setTimeout o un callback, el cuál
es puesto acá mientras otras funciones se ejecutan (entran y salen).
El evento loop es el encargado de monitorear la call stack para ir mandando las llamadas a funciones
a ejecución. 
Tener en cuenta no hacer funciones que puedan ser muy pesadas (hacer varios llamados o procesamientos,
que saturen el call stack). 

Call back: Función que al crearla, se le pasa como parámetro, otra función que se ejecuta con el
llamado a la primera. */
function sum(a, b) {
    return a + b;
}

function calc(a, b, callback) {
    return callback(a, b);
} // Por standard, se le pone callback.

function date(callback) {
    console.log(new Date);
    setTimeout(() => {
        let date = new Date;
        callback(date);
    }, 3000);
}

function printDate(dateNow) {
    console.log(dateNow);
}

console.log(calc(6, 2, sum));
date(printDate);