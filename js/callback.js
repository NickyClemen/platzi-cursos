/* CDN: Content Delivery Network.
Un servidor que nos va a servir el archivo desde la locación del planeta más
cercana a nosotros. Nos dice cuál es la IP más cercana a nosotros del 
archivo que estamos buscando. */

// Para poder hacer un request a la API, hay que saber la url.

const API_URL = 'https://swapi.co/api/';

const PEOPLE_URL = 'people/:id';

// Método para hacer una request con jQuery.
$.get(`${API_URL}${PEOPLE_URL.replace(':id', 1)}`, { crossDomain: true }, function(data) {

    console.log(`Hola, soy ${data.name}`);
    /* arguments: Es una variable (no definida por nosotros) que
    tienen todas las funciones que nos va a dar un array con los parámetros que
    recibe la función. */

})
/* get(url, * {objeto}, callback);
Acepta varios parámetros. El primero es la url completa. 
replace(string a reemplazar, reemplazo); --> Método que tienen todos los strings. Reemplaza
un texto por otro. 
* Indicarle a jQuery que el request se va a hacer hacía otra página, no la actual. 
Callback: Es una función que se va a ejecutar en algún futuro. Puede o no llamarse.
$get va a ser el encargado de llamar.
La función solamente se va a ejecutar si el request es exitoso. */