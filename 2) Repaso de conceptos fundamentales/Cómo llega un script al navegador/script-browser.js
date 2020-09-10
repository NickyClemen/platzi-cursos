/* Cómo llega un script al navegador.

<h1>DOM</h1>
Es una representación de un elemento de HTML.

<p>Cuando llega el HTML al browser, éste lo empieza a parsear: Va leyendo etiqueta por etiqueta,
y va creando el DOM.
Cuando éste proceso termina, es cuando obtenemos el evento <code>DOMContentLoaded</code>.</p>

DOMContentLoaded da al garantía de que está disponible para manipular. 

Script externo o embebido.
El script embebido, cuando el DOM se esté cargando, a va a detener el procesamiento hasta que no se
termine de ejecutar el script.
Al embeber el script, se recomienda ponerlo al final de flujo de ejecución para evitar errores
(TypeError, por ejemplo). 

Scripts externos.
Una etiqueta SCRIPT con el atributo SRC con una dirección a un script almanecado en otro punto.
Es distinto al embebido, porque se le agrega una petición. El procesamiento del HTML se detiende hasta
que la petición recibe una respuesta, y se sigue procesando.

Script externos con a0tributo ASYNC
    <script async src=""></script>
Permite continuar el procesamiento del HTML mientras ocurre el script fetching. No detiene el 
flujo de ejecución (ocurre asíncronamente).
El fujo se detiene cuando esté procesando el script.

Orden de ejecución (async)
Si hay dos scripts asíncronos, las peticiones se lanzan a la vez. 
El de menor extensión retorna la respuesta primero, por lo que la ejecución del HTML se tiene para
procesarla, mientras que la otra petición continúa.

Script externo (defer)
    <script defer src=""></script>
Va a deferir el procesamiento del script hasta el final del parseo del HTML.
Es similar al async en el sentido en que ocurre asíncronamente y sin detener el procesamiento del HTML,
pero la ejecución ocurre al final. 

*/