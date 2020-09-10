// Objetos.
var nicole = {

    // KEY: Puede ser un valor numérico, un STRING.
    // VALUE: Pueden ser STRING, valores numéricos, booleanos, funciones.
    nombre: 'Nicole',
    apellido: 'Ordoqui',
    edad: 27

}; // Las llaves delimitan un OBJETO. Los objetos son CLAVE (KEY) y VALOR (VALUE).
// Crear un objeto que reuna características en común de la vida real. 

var cirilla = {

    nombre: 'Cirilla',
    apellido: 'Rusch',
    edad: 3

}

/* function imprimirNombre(persona){

    // Acceder al objeto.

    var nombre  = persona.nombre.toUpperCase();

    console.log(nombre); 

    // Alternativa.

    console.log(persona.nombre.toUpperCase());

} */

/* Otra alternativa par aacceder a un atributo del objeto, es desglosarlo en la función. 
En lugar de escribir el parámetro, se ponen {atributo que nos interesa} */ 

/* function imprimirNombre({nombre}){

    console.log(nombre.toUpperCase());

} */

// imprimirNombre(nicole.nombre);
// nicole.nombre es para acceder al NOMBRE dentro del objeto.
// imprimirNombre(cirilla.nombre);

// Invocando al objeto en la función.

// imprimirNombre(nicole);

// imprimirNombre(cirilla);

/* Tener en cuenta si al llamar a la función y no se quiere hacer referncia a una variable,
se puede crear un objeto. */

// imprimirNombre({nombre: 'Ivan'});

/* Cuando se invoca la función vacía, devuelve NULL, ya que JS trata de
acceder a la variable de algo que termina siendo undefined. */

// Desestructurar objetos.

function imprimirNombre(persona){

    var { nombre } = persona;

    console.log(nombre.toUpperCase());

}

imprimirNombre(nicole);

imprimirNombre(cirilla);