/* Redux: Librería para manejar estados. Muy común utlizarla con React.
    1) Una librería de manejo de estado.
    2) Inicializas un store con un estado y un reducer.
    3) Despachas acciones que modifican el estado.
    4) El store notifica qwue el estado cambió. 
    
Con Redux, se inicializa un store con un estado inicial, y se definen unos reducers, los cuáles. van a estar
recibiendo acciones que van a modificar el estado, y cuando éste cambia, el store le va a notificar a todos
los suscriptores (que pueden ser componentes de React). 

    Redux - API
    import { createStore } from 'redux';

    const store = createStore(...);
    Se inicializa el estado, y se definen los reducers. 
    Ya que se tiene el store, se pueden suscribir componentes, funciones, que vana  notificar cada vez que
    haya un cambio de estado.
    Reducers es otra palabra para Observers.

    store.subscribe(function() {...});
    store.dispatch({ type: 'INCREMENT' });
    store.getState();

EventEmitter (Node.js)
Librería que viene en le standard library. 
Tiene tres métodos:
    emitter.on = subscribe;
    emitter.off = unsubscribe;
    emitter.emit = notify;

ECMAScript Observable
    Hay una propuesta para añadir Observables al standard library de ECMAScript.
    Aún está en Stage 1.

*/