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

obtenerPersonaje(1) // Se ejecuta en serie.
    .then((personaje) => {

        console.log(`El personaje es ${personaje.name}.`);
        // Encadenar promesas.
        return obtenerPersonaje(2)

    })
    .then((personaje) => {

        console.log(`El personaje es ${personaje.name}.`);
        
    })
    .catch(function(id) {

        console.log(`Sucedió un error al obtener al personaje ${id}.`);

    })

 