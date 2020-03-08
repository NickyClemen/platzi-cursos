/* Se instala una dependencia para hacer peticiones: npm install xmlhttprequest */
let XMLHpptRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://rickandmortyapi.com/api/character/'; 

function fetchData(url_api, callback) {
    let xhttp = new XMLHpptRequest(); /* Creado por Microsoft y adapatado al standard. */
    xhttp.open('GET', url_api, true);
    /* Llamado a una URL. Se el pasa por parámetro:
        1) Método.
        2) URL.
        3) Si se hace de forma asíncrona o no. Por default, está en true. */
        xhttp.onreadystatechange = (event) => {
            /* Se genera una validación del estado de la petición. Tiene que ser success.
            Tiene cinco estadoa: 
                1) 0: Todavía no está open.
                2) 1: Cuando se está cargando. 
                3) 2: Dónde ya se cargó.
                4) 3: Si hay alguna descarga/información.
                5) 4: Completada. Success. */
                if(xhttp.readyState === 4) {
                    // readyState devuelve el estado de la petición.
                    if(xhttp.status === 200){
                        /* Callback utiliza un standard denteo de Node, que permite
                        decir que el primer parámetro que se le pasa es el error, y el segundo es el resultado
                        del callback. */
                        callback(null, JSON.parse(xhttp.responseText))

                    } else {
                        const error = new Error(`Error ${ url_api }`);
                        return callback(error, null);
                    } /* Un if para saber el estado de la petición:
                        200: Todo está bien.
                        500: Error de servidor:
                        400: No encontró algo. */
                }
        } /* Se genera una escucha a lo que va a hacer esa conexión. Si un cambio sucede, se ejecuta
        una función. */

        xhttp.send(); // Se envía la solicitud.
}

fetchData(API, (errorUno, dataUno) => {
    if (errorUno) return console.log(errorUno);
    fetchData(API + dataUno.results[0].id, (errorDos, dataDos) => {
        if (errorDos) return console.log(errorDos);
        fetchData(dataDos.origin.url, (errorTres, dataTres) => {
            if (errorTres) return console.log(errorTres);
            console.log(dataUno.info.count);
            console.log(dataDos.name);
            console.log(dataTres.dimension)
        });
    })     
}) // Se recomienda no tener más de tres callbacks.