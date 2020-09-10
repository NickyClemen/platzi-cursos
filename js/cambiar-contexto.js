/* Cuando se habla de contexto en JS, nos estamos refiriendo a quién es el objeto THIS cuando 
se ejecuta un código.  */

const nicole = {

    nombre: 'Nicole',
    apellido: 'Ordoqui',

}

const cirilla = {

    nombre: 'Cirilla',
    apellido: 'Rusch',

}

function saludar(saludo = 'Hola') {

    console.log(`${saludo}, mi nombre es ${this.nombre}`);
    // THIS, por defecto, apunta a WINDOW.           

}

/* El método BIND() se utiliza para ambiar el contexto de una función. 
    a) El primer parámetro es el contexto (quién va a ser THIS).
    B) Parámetro opcional.
Devuelve la referencia a una función. No modifica a la original. 
No ejeucta la función.

const saludarNicole = saludar.bind(nicole);

const saludarCiri = saludar.bind(cirilla); */

/* call() ejecuta la función. 
Lo parámetros van separados por coma. 
    a) Contexto (quién va a ser THIS).
    b) Parámetros opcionales. */
saludar.call(nicole);

/* apply() ejecuta la función. 
Muy parecida a call().
El primer parámetro va a ser el contexto al THIS. El segundo parámetro, es un array, el cuál contiene los
parámetros de la función. */
saludar.apply(nicole, ['Hola, ¿cómo estás?']);

// Siempre que queramos ejecutar una función asíncrona, el THIS cambia.