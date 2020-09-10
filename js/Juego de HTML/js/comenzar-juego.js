const celeste = document.getElementById('celeste');

const violeta = document.getElementById('violeta');

const naranja = document.getElementById('naranja');

const verde = document.getElementById('verde');

const btnEmpezar = document.getElementById('btnEmpezar');

const ULTIMO_NIVEL = 10;

class Juego {

    constructor() {

        this.inicializar = this.inicilizar.bind(this);

        this.inicilizar()

        this.generarSecuencia();

        setTimeout(this.siguienteNivel, 500);

    }

    inicilizar() {

        this.siguienteNivel = this.siguienteNivel.bind(this);

        this.elegirColor = this.elegirColor.bind(this);

        this.toggleBtnEmpezar()
        
        this.nivel = 1;

        this.colores = {

            celeste,
            violeta,
            naranja, 
            verde,

        }
        /* Si queremos agregarle a un objeto, un valor asignado a una variable, con nombrarla, alcanza. */

    }

    toggleBtnEmpezar() {

        if(btnEmpezar.classList.contains('hide')){

            // contains() verifica si tiene la clase 'hice'.
            btnEmpezar.classList.remove('hide');

        } else {


            btnEmpezar.classList.add('hide');
            // Agrega una clase.

        }


    }

    generarSecuencia() {

        this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n=> Math.floor(Math.random() * 4));
        /* El método fill() rellena todos los elementos de un arreglo desde
        el índice start hasta el índice end, con el valor estático de value. 
        map() no va a funcionar con elementos que no están definidos. 
        Math.random() nos devuelve un valor entre 0 y 1. 
        Math.floor() redondea para abajo. */

    }

    siguienteNivel() {

        this.subNivel = 0;

        // Siempre que se quieran agregar atributos se hace this.atributo = 'valor';

        this.iluminarSecuencia();

        this.agregarEventosClick();

    }

    transformarColorNumero(color) {
        
        switch(color) {
        
            case 'celeste':
        
                return 0;
        
            case 'violeta': 
        
                return 1;
        
            case 'naranja':
        
                return 2;
        
            case 'verde':
        
                return 3;
        
        }
        
    }

    transformarNumeroColor(numero) {

        switch(numero) {

            case 0:

                return 'celeste';

            case 1: 

                return 'violeta';

            case 2:

                return 'naranja';

            case 3:

                return 'verde';

        }

    } 

    iluminarSecuencia() {

        for(let i = 0; i < this.nivel; i++) {

            const color = this.transformarNumeroColor(this.secuencia[i]);

            setTimeout(() => this.iluminarColor(color), 1000 * i);

        }

    }

    iluminarColor(color) {

        this.colores[color].classList.add('light');

        setTimeout(() => this.apagarColor(color), 350);

    }

    apagarColor(color) {

        this.colores[color].classList.remove('light');
        // Remover una clase.

    }

    agregarEventosClick(ev) {

        this.colores.celeste.addEventListener('click', this.elegirColor); 

        this.colores.violeta.addEventListener('click', this.elegirColor); 
    
        this.colores.naranja.addEventListener('click', this.elegirColor); 

        this.colores.verde.addEventListener('click', this.elegirColor); 
        
    }

    eliminarEventosClick() {

        this.colores.celeste.removeEventListener('click', this.elegirColor); 
        
        this.colores.violeta.removeEventListener('click', this.elegirColor); 
            
        this.colores.naranja.removeEventListener('click', this.elegirColor); 
        
        this.colores.verde.removeEventListener('click', this.elegirColor);

    }

    /* Cuando se agregan manejadores de eventos, los métodos se llaman con un parámetro que se suele
    llamar EV. 
    Algo a tener en cuenta, es que cuando se llama a un evento, JS va a perder el contexto.*/

    elegirColor(ev) {

        const nombreColor = ev.target.dataset.color;

        const numeroColor = this.transformarColorNumero(nombreColor);

        this.iluminarColor(nombreColor);

        if(numeroColor === this.secuencia[this.subNivel]) {

            this.subNivel++;

            if(this.subNivel === this.nivel) {

                this.nivel++;

                this.eliminarEventosClick();

                if(this.nivel === (ULTIMO_NIVEL + 1)) {

                    this.ganoElJuego();

                } else {

                    setTimeout(this.siguienteNivel, 1500);
                    // setTimeout le delega al navegador la ejecución de la acción.

                }

            }

        } else {

            this.perdioElJuego();

        }

    }

    ganoElJuego(){

        swal('Platzi', 'Felicitaciones, ganaste el juego.', 'success')
            .then(this.inicializar)

    }

    perdioElJuego(){

        swal('Platzi', 'Lo lamentamos, perdiste el juego.', 'error')
            .then(() => {

                this.eliminarEventosClick();
                
                this.inicializar();

            })

    }

}

function empezarJuego() {

    window.juego = new Juego();

}