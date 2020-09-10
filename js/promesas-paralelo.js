const API_URL = 'https://swapi.co/api/';

const PEOPLE_URL = 'people/:id';

const opts = '{ crossDomain: true }';

function obtenerPersonaje(id) {

    return (new Promise((resolve, reject) => {

        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;

        $.get(url, opts, function(data) { 
            
            resolve(data);
        
        })
        .fail(() => reject(id))

    }));

} 

var id = [1, 2, 3, 4, 5, 6, 7];

// Manera de encadenar promesas

/* var promesas = id.map(function(id) {

    return obtenerPersonaje(id);

}); */

// Otra manera de encadenar promesas con arrow function.

var promesas = id.map((id) => obtenerPersonaje(id));

// Método para obtener los resultados de las promesas.

Promise
    .all(promesas)
    .then((personajes) => console.log(personajes))
    .catch(`Ha ocurrido un error con el personaje ${id}.`);

/* obtenerPersonaje(1) 
    .then((personaje) => {

        console.log(`El personaje es ${personaje.name}.`);

        return obtenerPersonaje(2)

    })
    .then((personaje) => {

        console.log(`El personaje es ${personaje.name}.`);
        
    })
    .catch(function(id) {

        console.log(`Sucedió un error al obtener al personaje ${id}.`);

    })

  */