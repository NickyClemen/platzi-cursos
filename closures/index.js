/* Closure: Función que retorna otra función. Además, recuerdan el scope en el que fueron creadas. */
function buildSum(a) {
    return function(b) {
        return a + b;
    }
}

const addFive = buildSum(5);
console.log(addFive(5));

// Con arrow function.
const buildSumArr = a => b => a + b;