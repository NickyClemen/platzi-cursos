/* Node tiene dos capas:
    1) Node Core API.
    2) C/C++:
        a) V8 (Javascript Engine)
        b) libuv: Maneja el event loop. Se encarga de las operaciones de red, y del flujo del stdin y el stdout (I/O).
        c) i) Open SSL: Comunicación segura.
            ii) zlib: Encripción.
            iii) http_parser: Parseo de HTTP. Se está incluyendo HTTP/2.

Características de Node
    1) Un cuarto del core está dedicado al networking (trabajo de red).
    2) Está diseñado para operaciones I/O, para alta concurrencia y cargas de trabajo muy altas.
    3) Es modular. Tiene npm para la gestión de paquetes. Esto evita el "dependency-hell", es decir, conflictos entre
    versiones. Utiliza un archivo que lleva los registros de las dependencias del proyecto (package.json). Las dependencias
    son locales.
    4) Es anti-monilith development (intentar resolver todo en una misma aplicación).
    5) Continuation Passing Style: Ejecución continúa de código a través de callbacks. Se trabaja utilizando callbacks,
    eventos y streams.
    6) Node trabaja en monohilo. Se van encolando eventos.
    7) Se puede trabajar de manera asíncrona, y orientada a eventos (Event-driven Programming).

Un módulo tiene:
    1) package.json: Tiene la metadata del archivo.    */