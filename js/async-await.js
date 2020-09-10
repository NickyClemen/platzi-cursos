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

async function obtenerPersonajes() {

    var id = [1, 2, 3, 4, 5, 6, 7];

    var promesas = id.map((id) => obtenerPersonaje(id));

    try {

        var personajes = await Promise.all(promesas);

        console.log(personajes);

    } catch {

        console.log('No se ha podido encontrar un personaje.');

    }

}

obtenerPersonajes();



