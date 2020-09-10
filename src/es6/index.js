// ES5.
function newFunc(name, age, country) {
    var name = name || 'Nicole';
    var age = age || 29;
    var country = country || 'ARG';

    console.log(name, age, country);
}

// ES6. Se pueden asignar desde la declaración de los parámetros de la función.
function newFunction(name = 'Nicole', age = 29, country = 'ARG') {
    console.log(name, age, country);
} /* Default params: Pasar parámetros por defecto.
 Si no se le pasa parámetros, se ejecutan los parámetros por defecto. */

newFunction();
newFunction('Cirilla', 1, 'ARG');

// Concatenación.
let hello = 'Hello';
let world = 'world';

// ES5.
let epicPhrase = hello + ' ' + world + '!';
console.log(epicPhrase);
// ES6.
let helloWorld = `${ hello } ${ world }!`;
console.log(helloWorld);

// Multilínea.
// ES5.
let lorem = 'Lorem ipmsum \n' +
'lorem ipsum';
// ES6.
let ipsum = `Lorem ipmsum
lorem ipsum`; // Alcanza con hacer Enter (no hay que usar más el \n).

// Desestructuración. Extrae elementos.
let person = {
    name: 'Nicole',
    age: 29,
    country: 'ARG'
}

// ES5. Acceder.
console.log(person.name, person.age, person.country);
// ES5. Acceder.
const { name, age, country } = person;
console.log(name, age, country);

// Spread. Expande elementos.
let teamUno = ['Nicole', 'Cirilla', 'Ivan'];
let teamDos = ['Alan', 'Susana', 'Gastón'];
let education = ['Daira', ...teamUno, ...teamDos]; /* Los anida como elementos individuales,
a diferencia del operador REST, que anida un array. */ 

// let, var, const.
{ 
    var globalVar = 'Global Var.'; 
}

{ 
    let globalLet = 'Global Let.';
    console.log(globalLet); 
}

console.log(globalVar);

const a = 'b';
/* var: Variable disponible de forma global.
let: Disponible solamente en el scope en la que va a ser llamada.
const: Variable que no muta. No permite reescribirla. */

// Crear nuevos objetos.
let name = 'Nicole';
let age = 29;
// ES5.
let obj = {
    name: name,
    age: age,
}
// ES6.
let nicole = {
    name,
    age
} // Toma el key-value de manera más intuitiva.

// Arrow function. Sintaxis reducida t his no asignable. Son funciones anónimas.
const names = [
    { name: 'Nicole', age: 29 },
    { name: 'Cirilla', age: 1 }
];
// ES5.
let listOfNames = names.map(function(item) {
    console.log(item.name);
});
// ES6.
let listOfName = names.map(item => console.log(item.name));
const listOfPersons = (name, age, country) => {} // Anidar la función.
const listOfPersons = name => {} // No hace falta usar paréntesis cuando es un solo parámetro.
const square = num => num * num; // No hace falta usar los '{}' cuando se retorna una sola línea.

/* Promises. Asincronismo. 
Existen para suplir un problema con los callbacks hell, ya que no son escalables (anidamiento excesivo de funciones).
La promesa de que algo va a pasar. */
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        /* resolve y reject permiten establecer una validación. La promise está a la espera de una lógica. */
        if(true) {
            resolve('Hey!');
        } else {
            reject('Ups.');
        }
    });
}

// Ejecutar promise.
helloPromise()
    .then(response => console.log(response)) // Permite capturar la respuesta. Se pueden anidar varios then.
    .catch(error => console.log(error)) // Captura el error.

// Class
class Calculator {

    constructor() {
        this.a = 0;
        this.b = 0;
    } // Inicializa el objeto.

    sum(valueA, valueB) {
        return valueA + valueB;
    }
}

const calc = new Calculator();
console.log(calc.sum(2, 2));

// import, export. Trabajar con modules (tener lógica separada de la app principal).
import hello from './module';
hello();

// Generators. Función que retorna una serie de valores según un algoritmo definido.
function* helloWorld() {
    if(true) {
        yield 'Hello, ';
        /* Permite retornar un valor. Guarda el estado de forma interna. */
    }

    if(true) {
        yield 'World';
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value); /* Permite ejecutar el primer bloque de sentencias. El próximo next va a recordar en qué punto
se quedó el otro, y ejecutar el siguiente bloque. */
console.log(generatorHello.next().value);
console.log(generatorHello.next().value); // Retorna undefined.