/* Prototype. Se pueden definir algunas propiedades de [objeto].prototype, y todas las instancias de éste objeto,
van a recibir esos métodos, pero no lo reciben indirectamente.
Cuando se inspecciona el objeto, se ve que está vacío, sin embargo, hay una propiedad (__proto__) que aparece, en la
cuál están las propiedades. 
Herencia prototipal -> Conectar [objeto].[método] a [objeto].prototype. 
Todo en Javascript acaba en el objeto Object. */

function Hero(name) {

    this.name = name;

}

Hero.prototype.saludar = function() {

    console.log(`Hola, soy ${ this.name }.`);

}

const zelda = new Hero('Zelda');

// Propiedades de la instancia.
console.log('Mi nombre es', zelda.name);

// Propiedades de la "clase".
console.log('Saludo', zelda.saludar);

// Propiedades heredadas. Ejemplo: toString.
/* Hay propiedades heredadas de Object. */
console.log('toString', zelda.toString);

// hasOwnProperty (¿dónde sale toString o esto?)
/* ¿Cómo pasamos de una instancia, a Object? Se emplea hasOwnProperty (método que viene de Object), que se
utiliza inspeccionar si algo le pertenece directamente a un objeto o lo hereda. */
console.log('hasOwnProperty(name)', zelda.hasOwnProperty('name'));

// Inspeccionemos el prototipo de Zelda.
/* __proto__ es el objeto en el que cayeron todas las propiedades que estavban en Hero.prototype. 
Es algo que puede variar, no está especificado, no está en el lenguaje. Es un detalle de implementación que ponen los browser, Node, o
cualquier otro entorno. 
La forma sugerida, es:

    Object.getPrototypeOf(); */

const prototypeOfZelda = Object.getPrototypeOf(zelda);

console.log(prototypeOfZelda === Hero.prototype);
/* zelda (objeto), es idéntico al prototipo. No sólo tienen el mismo contenido, sino que son el mismo objeto. 
Con el ""===" estamos comparando la referencia (mismo lugar en memoria, mismo objeto. No una copia). */

// Agregar un método nuevo.
Hero.prototype.fight = function() {

    console.log('FIGHT!');

} 

console.log(zelda.fight());
/* Es uan referencia del objeto, hasta prototype. El lengujae los está encadenando. */

// toString.
console.log(zelda.toString()); // sale [object Object] porque es la implementación nativa.

console.log(prototypeOfZelda.hasOwnProperty('toString')); // Da false. Para llegar a toString, hay que buscar en el prototype del prototype.

const prototypeOfPrototypeOfZelda = Object.getPrototypeOf(Hero.prototype);
console.log(prototypeOfPrototypeOfZelda);
console.log(prototypeOfPrototypeOfZelda.hasOwnProperty('toString'));

// Inspeccionemos el prototipo de Hero.

// Inspeccionemos el prototipo de Object.
/* En éste caso, el prototype del prototype, es Object, que es el punto de partida en todos los objetos en Javascript, incluso las funciones (también son obbjetos). 
Cuando llegarmos a Object, y no se encuentra un método, se busca en el prototype de Object. */
const prototypeOfObject = Object.getPrototypeOf(Object.prototype);
console.log(prototypeOfObject);
/* Object no tiene prototipo.
Se busca hasta que sale undefined. */

