class AutoPause {

    constructor() {

        this.threshold = 0.25;
        this.handlerIntersection = this.handlerIntersection.bind(this);
        this.handlerVisibilityChange = this.handlerVisibilityChange.bind(this);

    }

    run(player) {

        this.player = player;

        const observer = new IntersectionObserver(this.handlerIntersection, {

            threshold: this.threshold,
        
        });
        
        observer.observe(this.player.media);

        document.addEventListener('visibilitychange', this.handlerVisibilityChange);

    }
    
    handlerIntersection(entries) {

        const entry = entries[0];

        const isVisible = entry.intersectionRatio >= this.threshold;

        if (isVisible) {

            this.player.play();
            
        } else {

            this.player.pause();
            
        }

    }

    handlerVisibilityChange() {

        const isVisible = document.visibilityState === 'visible'

        if (isVisible) {

            this.player.play();

        } else {

            this.player.pause();

        }

    }
   
}

/* Nuevo evento que forma parte del VisibilityChange API del DOM. 
DOCUMENT ahora tiene un evento que se llama VISIBILITYCHANGE

document.addEventListener('visibilitychange', () => {

    console.log(document.visibilityState);
    // Estado de la visibilidad del documento. Tiene dos parámetros: VISIBLE Y HIDDEN.

}); 

Nos indica en qué TAB está el user. Si no está sobre el que corresponde, nos permite tomar acciones. */

export default AutoPause;