/* En Javascript las funciones toman argumentos, y retornan un valor.
En Typescript, se puede ser explícitos de cómo deben ser esos argumentos, y también podemos proveer información de
cuál es el valor que debe regresar la función. */

// Funciones.
function add(a: number, b: number) {

    return a + b;

} // De ésta manera, el lenguaje intuye el tipo de dato a retornar.
// Ser más específicos.
function sumNumber(a: number, b: number ): number {

    return a + b;

}

const sum = add(4, 6);

// Tipar el retorno de otra función. 
function createAdder(a: number): (number) => number {

    return function(b: number) {

        return b + a;

    }

} // -> (number) => number, indica que es una función que tiene de parámetro un entero, y retorna un entero.

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

// Funciones con parámetros opcionales.
function fullName(firtName: string, lastName?: string): string {

    return `${ firtName } ${ lastName }.`

} // el '?' permite que el parámetro sea opcional (soporta undefined).

const nicole = fullName('Nicole');

// Funciones con valor por omisión.
function nombreCompleto(firtName: string, lastName: string = 'Rusch'): string {

    return `${ firtName } ${ lastName }.`

}

const cirilla = nombreCompleto('Cirilla');


