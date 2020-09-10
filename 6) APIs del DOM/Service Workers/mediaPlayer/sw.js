const VERSION = 'v1';

self.addEventListener('install', event => {

    /* Lo primero que se hace, es crear un pre-caché, es es un conjunto de recursos, assets, que queremos
    que mantenga en caché. */ 
    event.waitUntil(precache());
    // Esperar la respuesta.

});
/* SELF es como el THIS, pero específico para los service workers. */

self.addEventListener('fetch', event => {

    const request = event.request;
    // Hacer algo solamente con los GET.

    if (request.method !== 'GET') {

        return;

    }

    // Buscar en caché.
    event.respondWith(cachedResponse(request));
    // Evento para determinar con qué responder.

    // Actualizar el caché.
    event.waitUntil(updateCache(request));


});

async function preCache() {

    const cache = await caches.open(VERSION);
    // Para trabajar con el caché, se usa una API del DOM que se llama CACHES.
    return cache.addAll([

        '/', // Hay que capturar siempre el root del request.
        '/index.html',
        '/assets/index.js',
        '/assets/MediaPlayer.js',
        '/assets/plugins/AutoPlay.js',
        '/assets/plugins/AutoPause.js',
        '/assets/index.css',
        '/assets/BigBuckBunny.mp4',

    ]);

}

async function cachedResponse(request) {

    const cache = await caches.open(VERSION);

    const response = await cache.match(request);

    return response || fetch(request);

}

async function updateCache(request) {

    const cache = await caches.open(VERSION);

    const response = await fetch(request);

    return cache.put(request, response);

}