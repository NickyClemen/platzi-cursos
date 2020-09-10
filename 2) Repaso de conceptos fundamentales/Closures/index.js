// Closures.
/* Closure -> Combinación entre el scope de una función, y la función dónde fue definida. */

let color = 'green';

function printColor() {

    console.log(color);

}

printColor();

/* De ésta manera, la variable está disponible globalmente, por lo que lo mejor es englobarla en una
función que se llame automáticamente. *

// IIFE (Immediately Invoked Function Expressions).

(function() {
    
    let color = 'green';

    function printColor() {

        console.log(color);

    }

    printColor();

})();

// Funciones que regresan funciones.
function makeColorPrinter(color) {

    let colorMessage = `The color is ${ color }.`

    return function() {

        console.log(colorMessage);

    }

}

let greenColorPrinter = makeColorPrinter('green');

console.log(greenColorPrinter());

// Variables privadas.
/*  Los closures permiten emular features que el lenguaje no trae. */
const coun = {

    count: 3,

}

function makeCounter(n) {

    let count = n;

    return {

        increase: function() {

            return count + 1;

        },
        decrease: function() {

            return count - 1;

        },
        getCount: function() {

            return count;

        },

    }

}

let counter = makeCounter(7);

console.log('The count is ', counter.getCount());

counter.increase();
console.log('The count is ', counter.increase());

counter.decrease();
console.log('The count is ', counter.decrease());
