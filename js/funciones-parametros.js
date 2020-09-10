/* Pasar funciones como parámetros. 

Valores false:
    a) null.
    b) 0.
    c) ''.
    d) undefined.
    e) NaN.

Valores true:
    a) {} (aunque esté vacío).
    b) [] (aunque esté vacío).
    c) string.

*/

class Persona {

    constructor(nombre, apellido, altura){
    
        this.nombre = nombre;

        this.apellido = apellido;

        this.altura = altura;

    }

    saludar(fn){

        var {nombre, apellido} = this;

        console.log(`Hola, me llamo ${nombre} ${apellido}.`);
        
        if(fn){

             fn(nombre, apellido); // Llamar a la función.

        }

    }

    soyAlto(){

        return this.altura > 1.8;

    }

}

// Herencia = Extensión.

class Desarrollador extends Persona{

    constructor(nombre, apellido, altura){

        super(nombre, apellido, altura) // Llamar al constructor de la clase padre.
            
    }

    saludar(fn){

        var {nombre, apellido} = this;

        /* var nombre = this.nombre;

        var apellido = this.apellido;
        Es equivalente a var {nombre, apellido} = this; */

        console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador.`); 

        if(fn){

            fn(nombre, apellido, true); // Llamar a la función.

       }

    }

}

function responderSaludo(nombre, apellido, esDev){

    console.log(`Buen día ${nombre} ${apellido}.`);

    if(esDev){

        console.log("Ah, no sabía que eras desarrollador.");

    }

}

var nicole = new Persona('Nicole', 'Ordoqui', 1.72);

var cirilla = new Persona('Cirilla', 'Rusch', 1.65);

var ivan = new Desarrollador('Ivan', 'Rusch', 1.89); 

nicole.saludar();

cirilla.saludar(responderSaludo);

ivan.saludar(responderSaludo);