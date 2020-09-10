/* Cuando una variable o un objeto tiene el scope compartido de manera global o local. */

const a = {

    value: 2

}
// a tiene el scope compartido para las dos funciones.

const addOne =  () => a.value += 1;
const timesTwo = () => a.value *= 2;

addOne();
timesTwo();

console.log(a.value);

timesTwo();
addOne();

console.log(a.value);

const b = {

    value: 2

}

const addOne =  b => Object.assign({}, b, { value: b.value + 1 });

const timesTwo =  b => Object.assign({}, b, { value: b.value * 2 });

console.log(addOne(timesTwo()));


