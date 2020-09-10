/* Peticiones Ajax -> Evitaban que se tuviera que recargarla página cada vez que se enviaba
una request. Llegó como mmétodo llamado XMLHTTPResquest ó XHR. 
Cómo era muy complicado programarlas, se creó Fetch, el cúal aprovechaba las promesas. 
Sin embargo, una vez que una petición salía, no había forma de pararla. Son muy importantes SPA. 

AbortController -> Nuevo feature que permite enviarle una señal a una señal a una petición fetch
para que se detenga. */
const url =
'https://images.pexels.com/photos/974470/nature-stars-milky-way-galaxy-974470.jpeg?q=100';

const img = document.getElementById('huge-image');

const loadButton = document.getElementById('load');

const stopButton = document.getElementById('stop');

let controller;

function startLoading() {

    loadButton.disabled = true;

    loadButton.innerText = 'Loading...';

    stopButton.disabled = false;

}

function stopLoading() {

    loadButton.disabled = false;

    loadButton.innerText = 'Load HUGE Image';

    stopButton.disabled = true;

}

loadButton.onclick = async function() {
   
    startLoading();

    controller = new AbortController();
    // Brinda los controles para poder detener una ejecución. Es una clase que hay que instanciar.

    try {

        const response = await fetch(url, { signal: controller.signal });

        const blob = await response.blob();
        // Blob es el binario de la petición.

        const imgUrl = URL.createObjectURL(blob)
        // Utilitario de los navegadores, que recibe un blob como parámetro, y le asigna una URL.

        img.src = imgUrl; 

    } catch (error) {

        console.log(error.message);

    }

    stopLoading();
  
}

stopButton.onclick = function() {

    controller.abort();
    // Para la ejecución.

    stopLoading();

};
