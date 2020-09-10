/* this no se puede asignar directamente, pero existen unos métodos que forman parte del prototipo de 
function, que se llaman call, apply y bind. Ayudan a determinar cuál es el this que va a ser el contexto a la 
llamada de una function. */

// Establecer this usando call.
function saludar() {

    console.log(`Hola! Soy ${ this.name } ${ this.lastName }.`);

}

const nicole = {

    name: 'Nicole',
    lastName: 'Ordoqui Morales'

}

saludar.call(nicole); /* -> El primer argumento que recibe, es el this. */

// Establecer this usando call y pasando argumentos a la función.
function walk(metros, direccion) {

    console.log(`${ this.name } camina ${ metros } metros hacía el ${ direccion }.`);

}

walk.call(nicole, 400, 'norte'); /* -> Los argumentos opcionales, son los parámetros que se le pasan a la función. */

// Establecer this usando apply y pasando argumentos a la función.
/* Tiene la misma funcionalidad que call, pero sus argumentos se pasan diferentes. 
La utilización de call y apply, depende de la cantidad de parámetros a pasar. 
Formas de diferencias call de apply:
    Call - Comma. Separar los valores por coma. 
    Apply - Array. */
const valores = [800, 'noreste'];
/* walk.apply(nicole, [800, 'noreste']); -> Los argumentos opcionales, se pasan en un array. */
walk.apply(nicole, valores);

// Establecer this en una nueva función usando bind.
/* A diferencia de call y apply, bind no llama la función automáticamente, sino que construye una nueva función.
Ésta nueva función, va a tener el this ya integrado. */
const cirilla = {

    name: 'Cirilla',
    lastName: 'Rusch'

}

const ciriHello = saludar.bind(cirilla);
const ciriWalk = walk.bind(cirilla, 1000); /* -> El primer argumento, es el this. El segundo, parámetros
opcionales que permiten grabar los parámetros opcionales. También se pueden guardar argumentos parciales.
Ésta técnica, se llama Currying, dónde se guardan parcialmente algunos argumentos, y luego, se pasan los 
demás. */

ciriHello();
ciriWalk('sur'); 

// Cuándo es útil usar uno de éstos métodos.
const buttons = document.getElementsByClassName('call-to-action');
const list = document.getElementsByClassName('list');

/* buttons.forEach(button => {
    
    button.onclick = () => alert('Nunca padres de aprender!');

}); */

// Button es una NodeList, no un array.
Array.prototype.forEach.call(buttons, button => {
    
    button.onclick = () => alert('Nunca pares de aprender!');
    
});

Array.prototype.forEach.call(list, item => {

    item.style.listStyle = 'none';
    
});
