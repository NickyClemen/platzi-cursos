/* Historia de Javascript

    HTTP - 19991
    HTML 1 - 1992
    MOSAIC - 1993
    NETSCAPE - 1994
    JAVASCRIPT - 1995 
    
Brendan Eich - Creador de Javascript.
Primero generó Mocha en 1995 para el navegador Netscape. Trataba de darle interactividad a las páginas.
En 1995 nace Livescript, que le agrega funcionalidades.
A finales del 1995, nace Javascript. El nombre es una decisión comercial. 
JScript (Microsoft) - 1995. Al tener Internet Explorer, tratan de generar un propio lenguaje.
ECMA - 1997. Nace para ponerle orden a los lenguajes de programación. Pone un paradigma/standard.
V8 - 2008. Engine de JS que corre en el browser.
Node.js - 2009 . Trabajar JS en backend.
Framework - 2010. Ayudan a trabajar de forma más modular.
ES6 - 2015. Nuevo paradigma de JS. 

ECMAScript
Es una especificación standarizada por ECMA Internacional. 
Fue creada para standarizar Javascript, y paara ayudar a fomentar múltiples implementaciones independientes. 

Javascript Engine 
El motor de JS corre en el navegador.
La PC maneja Machine code. El JS Engine funciona como un interprete intermedio (traduce el código a machine code). Éste proceso
se llama Just in time compiler (compilació en tiempo real). 

V8, el Javascript Engine de Chrome
Motor de JS que corre en Chrome. Motor open source. Corre en Opera y Edge también.
No es el único motor que existe; cada navegador tiene el propio.
Nace para optimizar la performace de Google Maps. 

Profundizando en el Engine
Una vez que corre el archivo de JS en el engine, antes de interpretarlo, genera un entorno global ->
Global Environment
    1) Global Object: Objeto principal (window). Viene con algunas API. Sirven para que se pueda trabajar para interactuar con el
    browser.
    2) this: Depende del contexto al que lo estés llamando. Es window.
    3) Outer Environment
Execution Context (contexto de ejecución): Una vez que se genera el contexto global, comienza a correr el código en un stack de tareas, que las apila
una por una.
    1) Corre el código. 
        Genera un parseo (Parser): Ayuda a encontrar las claves (keyword) que son importantes en JS.
        AST (Abstract syntax tree): Árbol sintáctico para parsear en el browser. 
        *Interpreter: Si se da cuenta que hay mucho código que se puede optimizar (como tener variables repetidas).   
            *Profiler (Monitor): Ayuda a optimizar el código, lo compila, y lo devuelve como bytecode.
            Compiler
            Optimized Code - ESte paso es muy importante, porque es dónde sucede el hoisting. Sucede solamente con variables y
            funciones.
        Bytecode: Lenguaje para que interprete la máquina. No es tan bajo como el binario o el machine code.
    
    Bytecode: 
        1) Código parecido a assembly.
        2) Portátil.
        3) Ejecutado por una virtual machine.
    
    Machine code:
        1) Binario.
        2) Instrucciones específicas a una arquitectura o procesador.

Cuando de habla del código de ejecución, se esta hablando de lo que es Javascript.
    Single thead (Synchronous): Puede hacer sólo una tarea a la vez.        
        
Memory Heap: Dónde se almacenan los valores de las variables y las funciones. No se guarda de forma numérica ni lineal.
Call stack: Se mandan a llamar primero con el objeto global. Dice como se comporta el código (cómo lo empieza a llamar Javascript).
Las tareas se empienzan a apilar de abajo hacía arriba. Se van sacando la última que se llama. A ésto se le llama sincronía, porque
hace una llamada a la vez. Depende mucho de cómo se van llamando las tareas.

Los objetos en JS (objetos, arrays, funciones - todo lo que no sea un valor primitivo), se almacenan en la Memory Heap.
Los valores primitivos son almacenados en el Call Stack, dentro del Scope (Contexto de Ejecución de la función que tenga acceso a esa variable).
Acceder al Call Stack es mucho más rápido que al Heap.
Además, en el Call Stack también se guardan las referencias, "como si fueran valores primitivos". Cuando se asigna una variable a
otra y esta apunta a un objeto, se copia la referencia, como si fuera un valor primitivo. Si el objeto tiene atributos como un
número por ejemplo, este se guarda en la posición de memoria reservada para ese objeto. Los objetos también pueden tener
más objetos dentro. En ese caso, dentro de la posición de memoria de ese objeto se va a guardar una referencia a otra posición
de memoria. 

Garbage collection
Hay lenguajes de programación en los que hay que gestional la memoria, por lo que hay que decidir cuando se limpia.
JS ayuda mucho con el proceso. Mark and sweep: Marca las cosas que ya no se necesitan/utilizan, y las limpia.

Stack overflow
Tiene que ver con el call stack.
El call stack se inicializa con la el global object. Se van agregando tareas a medida que el código se ejecuta.
Cuando hay alguna función que va enviando muchas tareas, desborda la call stack, y a eso se llama stack overflow. Esto
crashea el navegador. Chrome tiene una función que evita el stack overflow (corta las llamadas de la función).

Javascript Runtime
Las Web API's ayudan a interacturar con el browser y que haya un poco más de funcionalidad.
    -DOM (document)
    -AJAX (XMLHttpRequest)
    -Timeout (setTimeout)

Event Loop: Gestiona los eventos -> Callback queue: Fila de tareas. Funciones que trabaja el browser, y coloca en fila de
espera para que lo ejecute JS.

El call stack y el callback queue se comunican por medio del Event Loop (watcher, observable).

Asincronía (Asynchronous)
JS por default, corre una tarea a la vez (sincronismo).
Se pueden ver todas las WebAPI ejecutando Window en la consola del browser. */