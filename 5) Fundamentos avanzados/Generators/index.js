/* Los generadores son funciones especiales: Se puede empezar su ejecución, y detenerla a la mitad;
el programa continúa por otro lugar, y se puede volver a la función generador, y continuar su ejecución dónde
se la dejó. 
Lo que es interesante, es que cuando se detiene su ejecución, se recuerdan a sí mismos y su contexto. */

/* Los generadores son funciones de las que se puede salir y volver a entrar.
Su contexto (asociación de variables) será conservado entre las reentradas. */

// Cada vez que llamamos next, la ejecución del generador va a continuar hasta el proximo yield.
function* simpleGenerator() {

    console.log('GENERATOR START.');
    yield;
    yield 1;
    yield 2;
    yield 3;
    /* Cuando se usa YIELD, se puede definir un valor a retornar. */
    console.log('GENERATOR END.');

}

// Podemos hacer generadores infinitos.
function* idMaker() {

    let id = 1;

    while (true) {

        yield id;

        id += 1;

    }

}

// Cuando llamamos next también podemos pasar valores que la función recibe.
function* idMakerWithReset() {

    let id = 1;
    let reset;

    while (true) {

        reset = yield id;

        if (reset) {

            id = 1;

        } else {

            id += 1;

        }

    }

}

// Ahora hagamos un ejemplo un poco más complejo: La secuencia Fibonacci.
/* Los generadoresse prestan para crear funciones eficientes en memoria. */ 
function* fibonacci() {

    let a = 1;
    let b = 1;

    while (true) {

        const nextNumber = a + b;

        a = b;
        
        b = nextNumber;

        yield nextNumber;

    }

}

const gen = simpleGenerator();
/* Los generators, se declaran con el keyword FUNCTION, seguido de un "*".
    function* 
No son ejecutables de por sí. Se tienen que llamar, y esto va a crear una nueva función sí se puede ejecutar.
Internamiente, se puede tener todo el código que se quiera. 
Los generadores que se creen, traen una función que se llama NEXT(). Es una manera de decirle al generator, que siga.
Cuando se ejecuta, el valor de retorno devuelve un VALUE y un DONE.
El DONE, corresponde al status del generator. 
El VALUE, devuelve undefined.
¿En qué momento, se puede hacer que el value retorne un valor definido? Usando el keyword YIELD (ceder).
Cuando se usa YIELD, hay que repetir NEXT() varias veces para que continúe el flujo de ejecución del generator.

*/