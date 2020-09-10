/* El prototipo es un objeto más en JS. Si lo modificamos
en cierta altura del código, que así. */

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

var nicole = new Persona('Nicole', 'Ordoqui', 1.72);

var cirilla = new Persona('Cirilla', 'Rusch', 1.65);

var ivan = new Persona('Ivan', 'Rusch', 1.89);

