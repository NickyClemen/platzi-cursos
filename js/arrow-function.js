// JS permite asignarle a una variable, una función.

var nicole = {

    Nombre: 'Nicole',
    Apellido: 'Ordoqui',
    Edad: 27,
    Ingeniero: true,
    Cocinero: false,
    Cantante: false,
    DJ: false,
    Guitarrista: false,
    Drone: true

}

var cirilla = {

    Nombre: 'Cirilla',
    Apellido: 'Rusch',
    Edad: 3

}

const MAYORIA_DE_EDAD = 18;

/* const mostrarEdad = function (persona){

    return persona.Edad >= MAYORIA_DE_EDAD;

} // Función anónima. No tiene un nombre, pero se la asigna a una variable que sí
tiene nombre. */

// Arrow function.

const mostrarEdad = ({Edad}) => Edad >= MAYORIA_DE_EDAD;
/* Cuando se tiene un sólo parámetrp en la función, se pueden obviar los
paréntesis.
JS permite que si una función lo único que hace es retornar un valor, se puede borrar el RETURN
y borrar las llaves.
Para desestructurar, hay que poner ({objeto})*/ 

function mayorDeEdad(persona){

    if(mostrarEdad(persona)){

        console.log(`${persona.Nombre} es mayor de edad.`);

    } else{

        console.log(`${persona.Nombre} es menor de edad.`);


    }

}

function permitirAcceso(persona){

    if(!mostrarEdad(persona)){

        console.log('Acceso denegado.');

    } else{

        console.log('Permitir acceso.');

    }

}

mayorDeEdad(nicole);

mayorDeEdad(cirilla);

permitirAcceso(nicole);

permitirAcceso(cirilla);