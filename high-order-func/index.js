/* First Class Function.
High Order Function: Reciben otra función como argumento. */
const arrOne = [1, 2, 3];
let arrTwo = [];

for(let i = 0; i < arrOne.length; i++) {
    arrOne.push(arrOne[i] * 2);
}

// Con .map().
arrTwo = arrOne.map(item => item * 2);
console.log(arrTwo);