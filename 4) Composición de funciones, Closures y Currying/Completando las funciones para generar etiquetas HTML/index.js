const a = {

    value: 2

}

const addOne =  a => Object.assign({}, a, { value: a.value + 1 });
const timesTwo =  a => Object.assign({}, a, { value: a.value * 2 });

console.log(addOne(timesTwo(a)));

/* Function composition -> Combinar dos o más funciones para crear una nueva. */
