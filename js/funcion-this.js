/* Un this en una arrow function remite al objeto global WINDOW. 
Que this no es lo que uno espera, es uno de los errores más comunes
de JS. */

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

/* Persona.prototype.soyAlto = () => {

    debugger;

    return this.altura > 1.8;
} Lo que sucede con las arrow function, es que cambían el this dentro de 
la función. this va a puntar al objeto que está afuera de la función. En el espacio global,
this es WINDOW. */ 

var nicole = new Persona('Nicole', 'Ordoqui', 1.72);

var cirilla = new Persona('Cirilla', 'Rusch', 1.65);

var ivan = new Persona('Ivan', 'Rusch', 1.89);

