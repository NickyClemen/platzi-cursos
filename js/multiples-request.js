const API_URL = 'https://swapi.co/api/';

const PEOPLE_URL = 'people/:id';

function obtenerPersonaje(id) {

    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;

    $.get(url, { crossDomain: true }, function(data) {
    
        console.log(`Hola, soy ${data.name}`);
    
    });

}

obtenerPersonaje(1);

obtenerPersonaje(2);

obtenerPersonaje(3);

/* Por el asincronismo de JS, es imposible saber en qué orden se van a recibir las respuestas.
Depende del servidor y de cuánto va a tardar de responder cada uno de los request. */
