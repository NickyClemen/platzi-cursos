/* Qué es el scope.
El scope se define como el alcance que va a tener la variable dentro del programa (decide a qué
bloques de código accede una variable).
    1) Local: Permite acceder a una variable en un bloque de código o una función. Se puede acceder
    solamente en esa estructura.
        a) Función.
        b) Bloque.
    2) Global: Se puede acceder a esas variables durante todo el flujo del programa. */
var hello = 'Hello.'; /* Se puede acceder a ella durante toda la ejecución del programa.
Se puede sobrescribir las variables. */
var hello = 'Hello +';
let world = 'Hello world.';
let world = 'Hello';
const helloWorld = 'Hello world.';
// let y const no se pueden reasignar un valor.

const anotherFunc = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunc();
