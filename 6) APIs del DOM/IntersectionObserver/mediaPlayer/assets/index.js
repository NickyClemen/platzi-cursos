import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';

const video = document.querySelector("video");
const play = document.querySelector("#play");
const mute = document.querySelector("#mute");

const player = new MediaPlayer({ 
    
    el: video, 
    plugins: [new AutoPlay(), new AutoPause()] 

});

play.onclick = () => player.togglePlay();
mute.onclick = () => player.toggleMute();

/* IntersectionObserver, lo que hace es "observar" a un elemento, y va a estar mirando cuál es su posición.
Nosotros, le pasamos un objeto de configuración dónde se dejan unas "marcas". */




