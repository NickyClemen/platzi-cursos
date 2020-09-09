/* Ayuda a mantener código. */
const util = require('util');

const helloPluto = util.deprecate(() => console.log('Hello, Pluto.'), 'Pluto is deprecated. It\'\s not a planet anymore.');
// Avisa a los users que una funcionalidad está obsoleta.

helloPluto();

// Para hacer debuggins, se usa el flag --inspect.