var sacha = {

    nombre: 'Sasha',
    apellido: 'Lifszyc',
    altura: 1.72

}

var alan = {

    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86

}

var martin = {

    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85

}

var dario = {

    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71    

}

var vicky = {

    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56

}

var paula = {

    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76

}

// const esAlta = persona => persona.altura > 1.8; 

const esAlta = ({altura}) => altura > 1.8;

var personas = [sacha, alan, martin, dario, vicky, paula]; // Indica que es un ARRAY.

var personasAltas = personas.filter(esAlta);
//filter(condición); Devuelve un ARRAY nuevo.

/* Alternativa.

var personasAltas = personas.filter(function(persona){

    return persona.altura > 1.8;

});*/

console.log(personasAltas);