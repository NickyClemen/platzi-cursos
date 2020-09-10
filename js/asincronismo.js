/* JS solamente puede hacer una cosa a la vez, puede delegar
la ejecución de tareas a otros procesos. Éste evento de concurrencia,
se llama EVENTLOOP. 

JS tiene algo llamado "pila de ejecución" o CALLSTACK, dónde va poniendo
las llamadas a funciones según el orden de ejecución del programa. 
Cuando se llama a una función, se agrega a la pila. Cuando termina ejecutarse,
la borra. 

callback: Función que JS ejecuta cuando regrese la respuesta del
servidor. 

Mientras tanto, continúa ejecutando el programa principal. Cuando llegue la respuesta,
la función a ejecutar va a pasar a la cola de tareas. 

El programa va a ejecutar las funciones en cola cuando ya no tenga funciones qué ejecutar. 

Hay que tener en cuénta que operaciones se realizan de manera asíncrona. */

// Cómo funciona el tiempo en JS.

/* Hay que tener en cuenta que funciones se van a ejecutar de manera asícrona. 

Este setTimeout( () => console.log('B'), 0);, lo que hace, 
es decirle al navegador que ejecute la función en cero segundos, por lo que el navegador la
pone en la cola de tareas, y JS continua ejecutando el programa normalmente. La tarea va a estar lista
para ser ejecutada al momento, pero JS no va a poder hacerlo hasta que el flujo del programa principal no acabe.
Recién en ese momento comienza a darle salida a las funciones que se encuentran en la cola de tareas. */

console.log('A');

// "B" queremos que se ejecute dentro de un segundo.
setTimeout( () => console.log('B'), 0);  
// setTimeout( () => console.log('B'), 2000);   
// setTimeout(functión, delay); --> Para decirle en qué momento queremos que se ejecute.

// console.log('C');

setTimeout(() => console.log('D'), 2000);

for(var i = 0; i <  10000000000; i++){

    /* Emula un flujo de ejecución largo para mostrar lo que pasa con el setTimeout declarado arriba.
    Lo que pasa, es que al ser una ejecución larga, nunca muestra por consola la letra 'D', ya que no 
    llegó al final. */

}

/* Lo que está pasando, es que Js sigue ejecutando el programa principal. La tarea de mostrar la
letra 'D' está lista para mostrarse en pantalla, pero no la va a ejecutar hasta que no termine el programa principal.
Lo que tiene que dar claro, es que cuando se ejecuta una tarea asíncrona, el tiempo que se pasa por parámetro es un tiempo
mínimo, porque nada garantiza que se esté bloqueando el EventLoop (la ejecución del código). */
