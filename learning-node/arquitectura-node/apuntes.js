/* Node es un runtime environment para correr Javascript en el servidor, usando el motor V8 de Chrome.
Entorno de ejecución (Runtime System/Environment), es una capa encima del OS que ejecuta una pieza de softeware.
Es la responsable de administrar la memoria, como accede a las variables, pasar los parámetros, y cuando ejecutar el
garbage collector.

V8
Motor open source desarrollado por The Chromium Project para Chrome y Chromium.
Gracias a su tecnología Just in Time Compiler, compila Javascript.
Chromium es la versión open source.
Chrome Canary es una versión de pruebas.
Just in Time Compiler tiene un monitor que se encarga de revisar si se ejecuta mucho un código, y lo compila.

Otros motores
Mozilla: Spider Monkey.
Apple: Javascript Core.
Microsoft: Chakra.

Diferencias entre Javascript y Node
Javascript:
    1) Tenemos el DOM. Interfaz que permite interpretar el código HTML en Javascript.
    2) CSSDOM. Interpetar CSS en Javascript.
    3) Fetch API: Hacer request y que devuelva una promesa.
    4) Capa de web storage: Session y Local Storage.
    5) Canvas API: Permite hacer gráficos en la red.
    6) Otras APIs: Bluetooth API, Web Audio API, Web Authentication API y Bluebeam API.

Node
    1) Módulo de HTTP para crear servidores.
    2) Módulo OS para interactiar con el sistema operativo.
    3) Utilities.
    4) Debugger.
    5) Librerías:
        a) Streams: Permite manejar grandes cantidades de datos.
        b) Events: Definir acciones.
        c) ES6 modules: Se pueden ejecutar en Node con un feature flag. */