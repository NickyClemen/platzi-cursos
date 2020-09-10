/* map();, a diferencia de filter();, devuelve un nuevo ARRAY en el cuál
va a modificar cada uno de los elementos que le vayamos pasando del ARRAY original. */

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

var personas = [sacha, alan, martin, dario, vicky, paula];

/* const pasarAltura = persona => {
    
    return {

        ...persona,
        altura: persona.altura * 100
     
    }

}  */ 

// Función que devuelve un objeto.

const pasarAltura = persona => ({

    ...persona,
    altura: persona.altura * 100
    
}); 

var personasCms = personas.map(pasarAltura); 

console.log(personasCms);

console.log(personas);

