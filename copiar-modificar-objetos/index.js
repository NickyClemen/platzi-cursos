// Primer ejemplo.
let a = 1;
let b = a;

console.log(a, b);
b += 1;
console.loh(a, b);

// Segundo ejemplo.
let car = {
    color: 'red',
    year: 2019,
    km: 0,
};

let newCar = car;
console.log(car, newCar);
newCar.year = 2000;
console.log(car, newCar);
/* Con las variables car y newCar, estamos creando dos maneras de acceder al mismo objeto,
ya que lo que estamos copiando, no es el objeto en sí, sino la referencia. */

// Copiar un objeto.
/* Object.assign(); -> Permite copiar los valores del objeto, no la referencia.
Recibe dos parámetros.
    1) Tipo de dato en el que se va a hacer la copia.
    2) Fuente de la que se van a copiar los valores. */

let car = {
    color: 'red',
    year: 2019,
    km: 0,
}

let newCar = Object.assign({}, car);
newCar.year = 2000;
console.log(car, newCar);

// Hay un detalle con éste método.

let car = {
    color: 'red',
    year: 2019,
    km: 0,
    owner: {
        name: 'David',
        age: 25,
    },
};

let newCar = Object.assign({}, car);
console.log(car, newCar);
newCar.owner.age = 26;
console.log(car, newCar);
/* Object.assing copia todos los objetos, pero solamente del primer nivel. Todo objeto que
esté anidado, se van a copiar las referencias.

Copiar objetos más complejos.
JSON.parse() -> Convierte todos los objetos en JSON.
JSON.stringify -> Convierte los string en objetos, no importa su nivel de complejidad. */

let car = {
    color: 'red',
    year: 2019,
    km: 0,
    owner: {
        name: 'David',
        age: 25,
    },
};

let newCar = JSON.parse(JSON.stringify(car)); // La primera parte convierte el objeto en un string, y la segunda, el string, en un objeto.

newCar.year = 2000;
console.log(car, newCar);
newCar.owner.age = 26;
console.log(car, newCar);







