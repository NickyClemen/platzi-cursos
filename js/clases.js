/* Cuando hablamos de objetos en JS, estamos hablando 
PROTOTIPOS y no de CLASES. No existe la herencia como tal.
Las clases terminan siendo prototipos. */

/* Para definir un prototipo, lo único que hay que hacer es
definir uan función. */

function Persona(nombre, apellido){

    // console.log('Me ejecutaron.');

    this.nombre = nombre;
    /* Para guardar el objeto dentro de la función, se puede hacer referencia al 
    objeto con this. */
    this.apellido = apellido;
    /* Implícitamente, JS retorna this cuando llamamos a la función con la palabra
    new. */
    
}

Persona.prototype.saludar = function(){

    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}.`);

} // Crear una acción para el objeto.

var nicole = new Persona('Nicole', 'Ordoqui'); // Se le puede pasar parámetros.
/* new --> Palabra reservada del lenguaje. Se utiliza para crear nuevos
objetos dado un prototipo. new seguida del prototipo, lo que hace es crear un
nuevo objeto. A ese objeto, se le asigna un protitipo, luego se ejecuta el constructor,
e implícitamente lo que se hace es retornar el objeto que se acaba de construir. */

var cirilla = new Persona('Cirilla', 'Rusch');

var ivan = new Persona('Ivan', 'Rusch');

// nicole.saludar();