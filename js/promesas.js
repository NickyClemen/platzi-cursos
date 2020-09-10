/* PROMESAS

Pensadas para solucionar el callback hell (anidado de callback).

Pensar las promesas como valores que aún no conocemos. Es la promesa de que ahí va a haber un valor cuando 
una acción asíncrona se resuelva y suceda.

Las promesas tienen tres estados:
    a) El primero de los estados, cuando cualquier promesa se inicializa, es en Pending.
    b) Si la promesa se resuelve exitosamente, pasa a Fulfilled. Si se la promesa se resuelve, se puede llamar a la función
    .then(fn(valor esperado)), en la cuál se le pasa como parámetro otra función, la cual va a tener como parámetro, el valor que esperamos.
    c) Si se resuelve con un error, pasa a Rejected. Si ocurre algún error al resolverla, se puede hacer un .catch(fn(error)),
    a la cuál le pasamos por parámetro otra función, en la cuál vamos a tener por parámetro el error que sucedió. 

Cuando se llega al estado de Fulfilled, se puede retornar otra promesa dentro del .then, logrando encadenarlas en futuras acciones
asíncronas. Cada una de ellas, puede ser rechazada o resuelta en una nueva promesa.

Las promesas pueden resolverse de manera síncrona.

Estructura de una promesa.

    new Promise(function(resolve, reject) {

        Cuando construimos un objeto promesa, le pasamos una función que lleva dos parámetros: Resolve y Reject. Son dos funciones
        que se deben llamar de acuerdo a si la promesa se resuelve o da error.
        Si se resuelve, se le pasa como Resolve, el valor esperado.
        Si hay error, se llama a Reject para validar el error.

    }).then(valor => {

        Ayuda a obtener el valor de la resolución de la promesa en otra función.

    }).cath(error => {

        Ayuda a obtener el error en otra función.

    }) Es un objeto como cualquier otro dentro de JS.
   

*/

const API_URL = 'https://swapi.co/api/';

const PEOPLE_URL = 'people/:id';

const opts = '{ crossDomain: true }';

function obtenerPersonaje(id) {

    return (new Promise((resolve, reject) => {

        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;

        $.get(url, opts, function(data) { 
            
            resolve(data);
            // No se va a llamar hasta que el $.get sea exitoso. 
        
        })
        .fail(() => reject(id))

    }));

} 

obtenerPersonaje(1)
    .then(function(personaje) {

        console.log(`El personaje es ${personaje.name}.`);

    })
    .catch(function(id) {

        console.log(`Sucedió un error al obtener al personaje ${id}.`);

    })
    // Se le pasa solamente un parámetro, ya que la única manera de objeter el valor deseado, es con un .then().

 