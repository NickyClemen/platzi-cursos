/* ¿Qué es Node?
Es un runtime environment de Javascript fuera del navegador. Se crea en 2009, orientado
a servidores.

Características
1) Concurrencia: Monohilo, con entradas y salidas asíncronas.
2) V8: Entorno de ejecución de JS creado por Google, libre desde 2008. Escrito en C++.
Convierte JS en código máquina en lugar de interpretarlo en tiempo real.
3) Módulos: Todo lo que no sea sintaxis, son módulos. Muchos módulos vienen por defecto en el
paquete de Node. Se pueden crear módulos.
4) Orientado a eventos: Hay un bucle de eventos que ejecuta constantemente. Orientado a programación
reactiva.

EventLoop: Un proceso con un bucle que gestiona, de forma asíncrona, todos los eventos de tu aplicación.
Los eventos llegan del Event Queue (funcion, request, event. Tiene todo lo que se genera en el código). El EventLoop
los procesa: Si se pueden resolver rápido, los ejecuta, sino, los manda al Thread Pool (DB Ops, Files, Slow Ops. Acá se empieza
a gestionar todo asíncrona. Para cada petición, levanta un hilo en el procesador. Dependiendo de los eventos, se gestiona
a dónde va el hilo). Genera problemas de seguridad y gestión de errores.

Datos almacenados vs. en memoria
Todo funcionan por tiempos: Cuando se guarda en memoria es muy rápido.
Cuando se tiene que escribir en disco, la memoria es más lento (mucha más información y duradera). */