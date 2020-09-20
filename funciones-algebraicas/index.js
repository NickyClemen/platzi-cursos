/* Las funciones son utilizadas para realizar una secuencia de pasos o procemientos para realizar alguna
operación con los datos que recibe, e incluso podría llegar a comunicarse con alguna otra parte del 
programa, como el almacenamiento, red, registros, etc. */

// Normal function.
function double(x){
    return (x * 2);
}

// Arrow function.
const double = (x) => {
    return (x * 2);
}

// Short arrow function.
const double = x => (x * 2);