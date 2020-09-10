class AutoPause {

    constructor() {

        this.threshold = 0.25;
        this.handlerIntersection = this.handlerIntersection.bind(this);

    }

    run(player) {

        this.player = player;

        const observer = new IntersectionObserver(this.handlerIntersection, {

            threshold: this.threshold,
            /* Umbral de configuración. Determina el porcentaje del elemento tiene que tener intersección
            con el contenedor. */

        });
        /* Recibe dos parámetros:
            a) Handler: Una función que va a recibir un anuncio de una "marca" en el elemento.
            b) Config: Objeto de configuración.
                const observer = new IntersectionObserver(handler, config); */

        observer.observe(this.player.media);

    }
    
    handlerIntersection(entries) {

        const entry = entries[0];

        const isVisible = entry.intersectionRatio >= this.threshold;

        if (isVisible) {

            this.player.play();
            
        } else {

            this.player.pause();
            
        }

        // console.log(entry);

    }
    /* Recibe como parámetro las ENTRIES, que son todos los objetos que se etsán observando
    (observer.observe(player.media)). 
    Lo que nos devuelve intersectionRatio, es lo que vamos a utilizar para determinar si el elemento está saliendo,
    o está entrando. */

}

export default AutoPause;