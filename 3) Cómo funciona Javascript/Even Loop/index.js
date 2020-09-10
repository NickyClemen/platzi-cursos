/* Event Loop -> Es lo que hace que Javascript parezca multihilo, cuando no lo es.

Javascript se organiza utilizando dos estructuras de datos:
    1) Stack: Estructura de datos que lleva rastro de dónde está el programa (lo primero que entra, es lo último que sale). 
        main (llama) -> renderList (que a su vez llama a) -> getMovies (uan pila).
    El stack, va a comenzar vacío. Se realiza una operación (push), y se le agrega una función (main). Si se vuelve a hacer
    push, se agrega otro proceso encima (renderList), y así sucesivamente. No hay manera los elementos que están por "debajo"; sí
    o sí hay que ir removiendo una a una las capas (sacar = pop).
    Ahí es dónde están nuestras funciones (una especie de registro del programa). Apuntan a variables como el Scope.
    Cuando empieza el programa, se inicializa con un registro ANÓNIMO.
    Cuando se ejecuta un programa síncrono, las funciones se van ejecutando una detrás de la otra (van entrando y saliendo
    del stack a medida que se ejecutan, hasta que el stack queda vacío).
    En un programa asíncrono, las funciones quedan "pendientes", por lo que se van ejecutando a medida que les toca (van
    entrando y saliendo según estén programadas).
    2) Memory Heap: Estructura "desorganizada". Si en el stack hay una organización (una función dentro de otra), el Memory
    Heap, es aleatoria. Ahí es dónde se guarda información sobre las variable, el scope, etc.

Queue: Es una estructura de datos, en que lo primero que entra, es lo primero que sale. 
Task queue
    1) Scheduled tasks: Tareas agendadas (procesos asíncronos).
    2) Task queue: Tareas a ejecutarse.
    3) Microtask Queue: Promesas. Se ejecutan luego de las tareas programadas. Le da preferencias por sobre las que hay para
    ejecutar.

El Event Loop, está entre medio del stack, y la task queue.
Va recorriendo la queue: Si tiene tareas programadas, la agrega al Task Queue. Si está vacío, la deja en el Slack.

Promesas (algo que eventualemente va a pasar).
Las promises van en otra cosa que se llama Microtask Queue.
*/