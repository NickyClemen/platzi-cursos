/* Es un concepto que tienen muchos lenguajes de programación, sobre todo lo que están orientados a objetos.
Por ejemplo, en Java, si se escribe THIS en una clase, this se va a referir a la instancia de esa clase (this.método,
this.propiedad). 
En Javascript es parecido, pero hay que tener en cuenta en qué otros contextos this se comporta de ésta manera, 
o tiene valores diferentes. */

// this en el Global Scope.
    console.log(`this es ${ this }.`);
// Siempre que se está usando this en el contexto global, el browser lo va a asignar a window.

// this en el Function Scope.
    function whoIsThis() {

        return this;

    }

    console.log(`this es ${ whoIsThis() }.`);
/* Siempre que se está usando this en el contexto global, el browser lo va a asignar a window.
Lo que pasa, es que se está ejecutando una función directamente, por lo que el motor de Javascript asigna
al this windows, que es el valor por default, excepto que se esté utilizando en strict mode. */

// this en el Function Scope en strict mode.
function whoIsThisStrict() {

    "use strict";

    return this;

}

console.log(`this es ${ whoIsThisStrict() }.`);
/* strict mode:  Se puede ejecutar manualmente escribiendo "use strict". Sirve para evitar errores.
El this sale undefined. */

// this en el contexto de un objeto.
const person = {

    name: 'Gabriel',
    saludar: function() {

        console.log(`Hola, soy ${ this.name }.`);

    }

}

person.saludar();
/* A ésta función la está ejecutando un objeto (person), por lo que this, se va a referir al objeto que actualmente
está ejecutándose. */

// this cuando sacamos a una función de contexto.
const action = person.saludar;
action();
/* No se imprime nada. Por qué? Porque action no se está llamando dentro del objeto de un objeto, por lo que 
se está llamando directamente. Pierde contexto. */

// this en el contexto de una "clase".
function Person(name) {

    this.name = name;
    // this.name es igual al name que se va a pasar como argumento.

} // -> Funciona como un constructor.
/* Las clases en Javascript no existen como tal (al menos no de la manera que en lenguajes orientados a objetos). 
Todas las funciones tienen un this vacío por default (this = {}). 
No se puede asignar this directamente, pero sí una propiedad de this. */

Person.prototype.saludar = function() {

    console.log(`Hola, me llamo ${ this.name }.`);

} // -> Si se quiere dar un método.

const angela = new Person('Angela');

angela.saludar();

/* En una clase, se va a referir a la instancia, no al objeto. */
