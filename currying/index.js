/* Currying: Descomponer functions en functions más chicas para que reciban cada una un único argumento. */
const buildSum = a => b => a + b;

/* function sumThreeNumber(a, b, c) {
    return a + b + c;
} */

function sumThreeNumber(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}

// console.log(sumThreeNumber(1, 2, 3));
console.log(sumThreeNumber(1)(2)(3)); // Currying.