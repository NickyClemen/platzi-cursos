/* Memoización: Nos permite ahorrar procesamiento, ahorrar cómputo, guardando ciertos resultados de algunas
cuentas. */

function factorial(n) {

    if(!this.cache) {

        this.cache = {};

    }

    if(this.cache[n]) {

        return this.cache[n];

    }

    if(n === 1) {

        return 1;

    }

    this.cache[n] = n * factorial(n-1);

    return this.cache[n];

} // Las funciones pueden tener atributos internos.

