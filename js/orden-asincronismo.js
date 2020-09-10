const API_URL = 'https://swapi.co/api/';

const PEOPLE_URL = 'people/:id';

const opts = '{ crossDomain: true }';

function obtenerPersonaje(id, callback) {

    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;

    $.get(url, opts, function(persona) {
    
        console.log(`Hola, soy ${persona.name}`);

        if(callback){

            callback();

        }
    
    });

} // se hace que la función acepte otra como segundo parámetro.

obtenerPersonaje(1, function() {

    obtenerPersonaje(2, function() {

        obtenerPersonaje(3, function() {

            obtenerPersonaje(4, function() {

                obtenerPersonaje(5, function() {

                    obtenerPersonaje(6, function() {

                        obtenerPersonaje(7);
                
                    });
            
                });
        
            });
    
        });

    });

}); /* A ésto se lo conoce como callback hell. */

/* No se puede anidar un llamado a una función dentro de otra, porque se va a estar llamando
inmediatamente. Es importante que sea una función/declaración de una función. */

/* MANEJO DEL ORDEN Y EL ASINCRONISMO EN JAVASCRIPT. 

No hay manera de saber el orden en el cuál el servidor nos va a dar las repuestas. 
Se pueden pedir en cierto orden, pero puede ser que el server nos responda de otra manera. 
La única manera de mantener ese orden, es mantenerlo a lo largo del programa. 
Para garantizar el orden, hay que ir llamando a cada una de las funciones con callback. 
Se pierde el paralelismo de los request (se hacen en serie). */