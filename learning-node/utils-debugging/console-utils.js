const util = require('util');
const debulog = util.debuglog('foo'); // foo es el namespace.

debulog('Hello from Foo.'); // Funciona solamente si le pasamos la variable de entorno a la variable de entorno NODE_DEBUG.

console.log("Un %s y un %s.", "perro", "gato");
console.info("Un %s y un %s.", "perro", "gato"); // Alias de console.log. Cambia del lado del cliente.
console.warn('Esto es un error.'); // Alias de console.error.
console.assert(42 === "42"); // Si hay un error, nos lo muestra en un boolean.
console.trace('Hello.'); // Indica dónde está el error.
/* Trabaja por debajo con utils format.
%s = String.
%d = Número
%j = JSON: */