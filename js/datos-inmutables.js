/* Las estructuras de datos inmutables, nos sirve para sacarnos de encima el efecto de lado (cuando se llama
a una función, ésta modifica cosas por fuera de ella), el cuál conlleva un montón de bugs en el programa. */

const nicole = {

    nombre: 'Nicole',
    apellido: 'Ordoqui',
    edad: 28,

}

// const cumpleaños = persona => persona.edad++;

const cumpleaños = (persona) => ({

    ...persona,
    edad: persona.edad + 1,
    /* Con ésto, se crea un nuevo objeto en memoria, no modificando el objeto anterior.
    La contra, es que el resultado tiene que ser alamacenada en una nueva variable. */

}); // Función inmutable.