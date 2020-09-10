/* El scope, o ámbito, de una variable, representa el tiempo de vida en el que ésta existe.
Puede ser una variable que hayamos definido, o el argumento a una función.
Ésto es importante, porque evita que reescribamos el valor de una variable que ya hayamos definido.
Poe desgracia, JS no siempre tuvo el mejor scope de variables. */

// Global scope.
var message = 'Hello, word!';
/* Desde la consola, se puede acceder a MESSAGE desde window.message. WINDOW es el objeto global.
Toda variable que se declare por fuera de un bloque o una función, queda en el scopoe global.
También sucede cuando se traen scripts a través de un CDN.
Tener variables globales es peligroso, porque pueden ser sobreescritas a lo largo del flujo del programa. */

// Function scope.

function printNumbers() {

    var i;

    for (i = 0; i < 10; i++) {

      function eventuallyPrintNumber(n) {

        setTimeout(function() {

            console.log(n);

        }, 100);

      }

      eventuallyPrintNumber(i);

    }

}

/* function printNumbers() {

    for (var i = 0; i < 10; i++) {

        setTimeout(function() {

            console.log(i);

        }, 100);

    }

} */

// printNumbers();

/* Al declarar VAR dentro de un ciclo FOR, ocurre un problema de scope en las variables.
Al ejecutrase el FOR, JS inicializa el índice como una variable global (

    function printNumbers() {

    var i;

    for (i = 0; i < 10; i++) {

        setTimeout(function() {

            console.log(i);

        }, 100);

    }

}), por lo que se va sobreescribiendo a medida que ciclo corre, y queda almacenado el último resultado. 
LET y CONST operan sobre el block scope. */

// Block scope.

function printNumbers() {

    for (let i = 0; i < 10; i++) {

        setTimeout(function() {

            console.log(i);

        }, 100);

    }

}

printNumbers();

/* LET opera sobre el block scope. El bloque en ésta función, es lo que sucede dentro del FOR 
(las iteraciones del ciclo FOR). Cada vez que ejecuta una iteración, se crea un bloque nuevo, y 
guarda en la memoria el resultado de la iteración anterior. */

// Module scope.
/* Se limita al archivo al que está definido.
En la etiqueta SCRIPT, se le agrega, se le agrega TYPE="MODULE", lo que declara
que ese archivo es un módulo. 

    <script type="module" src="index.js"></script>*/