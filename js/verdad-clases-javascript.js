/* Herencia prototipal. 
Cuando se aplica la herencia, el prototipo hijo comienza a buscar en los
diferentes bloques las propiedades que necesita hasta llegar al prototipo raíz,
que es OBJECT. 
PROTOTYPE es un atributo que tienen todas las funciones, y es un objeto. */ 

// Manera vieja de hacer herencia prototipal.

function heredaDe(prototipoHijo, prototipoPadre){

    /* Primero se le dice al prototipo hijo, cuál va a ser su padre.
    Se le asigna un prototipo a la clase hija. */

    var fn = function(){}

    fn.prototype = prototipoPadre.prototype;

    prototipoHijo.prototype = new fn;

    prototipoHijo.prototype.constructor = prototipoHijo;

} /* (prototipoHijo, prototipoPadre) son funciones. Todas las funciones tienen el 
atributo prototype. */

function Persona(nombre, apellido, altura){

    this.nombre = nombre;

    this.apellido = apellido;

    this.altura = altura;

}

Persona.prototype.saludar = function(){

    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}.`);

}

Persona.prototype.soyAlto = function(){

    return this.altura > 1.8;
} 

function Desarrollador(nombre, apellido){

    this.nombre = nombre;

    this.apellido = apellido;

}

heredaDe(Desarrollador, Persona);

Desarrollador.prototype.saludar = function(){

    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador.`); 

}


var nicole = new Persona('Nicole', 'Ordoqui', 1.72);

// var cirilla = new Persona('Cirilla', 'Rusch', 1.65);

// var ivan = new Persona('Ivan', 'Rusch', 1.89); 

var ivan = new Desarrollador('Ivan', 'Rusch', 1.89); 

