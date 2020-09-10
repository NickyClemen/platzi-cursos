/* Includes. Trabaja en strings y arrays. Permite saber si hay un elemento dentro del valor.
Retorna un boolean. */
let numbers = [1, 2, 3, 7, 8];

if(numbers.includes(9)) {
    console.log('Está el valor en el array.');
} else {
    console.log('No está.');
}

/* Exponenciales. Se especifica con el '**'. */
let base = 4;
let exponent = 3;
let result = base ** exponent;

console.log(result);