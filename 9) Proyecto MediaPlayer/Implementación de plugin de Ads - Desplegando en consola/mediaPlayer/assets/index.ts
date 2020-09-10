import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';
import Ads from './plugins/Ads';

const video = document.querySelector("video");
const play: HTMLMediaElement = document.querySelector("#play");
const mute: HTMLMediaElement = document.querySelector("#mute");

const player = new MediaPlayer({ 
    
    el: video, 
    plugins: [new AutoPlay(), new AutoPause(), new Ads()], 

});

play.onclick = () => player.togglePlay();
mute.onclick = () => player.toggleMute();

/* Una de las tendencias en el desarrollo, son las PWA (Progressive Web Apps).
Una de las funcionalidades que ofrece, es que la aplicación funcione offline con el uso de service workers.
Los service workers, son una capa que existe entre el navegador e internet, y lo que hacen, es parecido
a los proxies: Van a interceptar peticiones. En éste caso, se toma la petición, se busca la respuesta, 
pero antes de regresarla al browser, se guarda en caché, por lo que, la próxima vez que ocurra
una request, en lugar de tener que ir a Internet, ya se tiene la respuesta almacenada. 
Los service workers se instalan. El browser lo instala en el equipo del usuario. No son lo mismo que una
app, pero viven dentro del browser. Cada vez que se hagan cambios, hay que volver a instalarlos. 
Sucede cuando el user está usando la app en Producción, pero uno en DEV quiere que los cambios pasen rápido. */
if ('serviceWorker' in navigator) {

    navigator.serviceWorker.register('/sw.js').catch(error => {

        console.log(error.message);

    });
    // Se registra un service worker. Puede ocurrir un error, por lo que es importante capturar el error.

} // Condiconal que ayuda para saber si el browser del user soporta service workers (feature nueva).




