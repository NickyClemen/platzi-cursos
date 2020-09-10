// Boolean.
let muted = true; // De ésta manera, a Typescript le alcanza para entender que es un boolean.
// Cuando se quiere ser explícito.
let mute: boolean = true;

// Números.
let numerador = 42;
let denominador = 6;
let resultado = numerador / denominador; // Typescript lo entiende como entero.
// Cuando se quiere ser explícito.
let num: number = 42;
let deno: number = 6;
let result: number = numerador / denominador;

// String
let nombre: string = 'Nicole';
let saludo = `Me llamo ${ nombre }.`;

// Arrays.
/* Si se trabajó con C, se sabe que los arrays son de un solo tipo de dato, mientras que en Javascript 
se pueden mezclar.
En Typescript, se puede decidir si son de un tipo específico, que sean diversos, o que sean una combinación 
decidida y explícita. */

// Un array de un sólo tipo de dato.
let people: string[] = [];
people = ['Isabel', 'Nicole', 'Raúl'];
// people.push(9000);

// Array combinado.
let peopleAndNumbers: Array< string | number > = [];
peopleAndNumbers.push('Nicole');
peopleAndNumbers.push(9001);

/* En Typescript, existe ENUM, que es un conjunto de valores. */
enum Color {

    /* Rojo,
    Verde, 
    Azul,
    Si se deja así se imprime la referencia. */
    // Ser explícito.
    Rojo = 'Rojo',
    Verde = 'Verde',
    Azul = 'Azul',
    Amarillo = 'Amarillo'

}

let colorFavorito: Color = Color.Verde;
console.log(`Mi color favorito es ${ colorFavorito }.`);

// Cuando no tenemos la certeza del tipo de dato, existe ANY.
let comodin: any = 'Joker';
comodin = { type: 'Wildcard' };

// Object
let someObject = { type: 'Wildcard' }; // Lo intuye.
let someObjecto: object = { type: 'Wildcard' }; // Explícito.



