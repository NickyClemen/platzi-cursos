const API_URL = 'https://swapi.co/api/';

const PEOPLE_URL = 'people/:id';

const opts = '{ crossDomain: true }';

function obtenerPersonaje(id, callback) {

    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;

    $.get(url, opts, callback).fail(() => {

        console.log(`Error. No se pudo obtener al personaje ${id}.`);

    });

    /* Método fail(callback) para cuando un objeto arrastra error. */

/* $.get(url, opts, function(persona) {
    
        console.log(`Hola, soy ${persona.name}`);

        if(callback){

            callback();

        }
    
    }); */

} 

obtenerPersonaje(1, function(personaje) {

    console.log(`Hola, soy ${personaje.name}`);

    obtenerPersonaje(2, function(personaje) {

        console.log(`Hola, soy ${personaje.name}`);

        obtenerPersonaje(3, function(personaje) {

            console.log(`Hola, soy ${personaje.name}`);

            obtenerPersonaje(4, function(personaje) {

                console.log(`Hola, soy ${personaje.name}`);

                obtenerPersonaje(5, function(personaje) {

                    console.log(`Hola, soy ${personaje.name}`);

                    obtenerPersonaje(6, function(personaje) {

                        console.log(`Hola, soy ${personaje.name}`);

                        obtenerPersonaje(7, function(personaje) {

                            console.log(`Hola, soy ${personaje.name}`);
                            
                        });
                
                    });
            
                });
        
            });
    
        });

    });

}); 

/* MANEJO DE ERRORES EN CALLBACKS. */

