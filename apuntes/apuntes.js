/* HTTP: Protocolo de comunicación que permite las transferencias de información en la Web.
Es un lenguaje común para todas las comunicaciones.

Métodos: El verbo que indica que queremos hacer en el servidor.
    1) GET: Recoger información del servidor.
    2) POST: Añadir información al servidor.
    3) PUT: Actualiza información en el servidor.
    4) PATCH: Actualiza parte de la información en el servidor.
    5) DELETE: Elimina información del servidor.
    6) OPTIONS: Pedir información sobre los métodos.

Cabeceras: Información contextual de la petición (no es lo que quiero hacer, sino como quiero hacer).
    1) En la request (POST, PUT, PATCH):
        a) Autenticación: Asegurarse de que se pueda pedir cosas al servidor.
            I) Authorization.
        b) Caché (almacenamiento temporal): Gestionar durante cuánto tiempo la respuesta será la misma.
            I) Cache-Control.
            II) Expires.
        c) Indicaciones.
        d) Condiciones.
        e) CORS: Cross Origin Resource Sharing. Manejar información desde fuera de nuestro servicio.
            I) Access-Control-Allow-Origin: Indica desde qué URL se puede acceder.
        f) Cookies: Compartir información entre peticiones.
        g) Accept: Define el contenudo que acepta.
            I) Accept.
            II) Accept-Charset.
            III) Accept-Encoding.

Estado: Cómo ha sido la operación. Número que indica qué pasó con la petición.
    a) 2XX: Fue bien.
        I) 200. OK.
        II) 201. Created.
    b) 3XX: Petición redirigida.
        I) 301: Moved permanenly.
        II) 304: Not modificated.
    c) Los errores se dividen en dos: Cliente y Servidor.
        I) 4XX: Errores del cliente.
            A) 400: Bad request.
            B) 401: Unauthorized.
            C) 403: Forbidden. Prohibido.
            D) 404: Not found.
        II) 5XX: Errores del servidor. Error al procesar la petición.
            A) 500: Internal Server Error.

Cuerpo (Body): Lo que el servidor devuelve. Información de la petición. Los datos del usuario que se quiere añadir.
El tipo de respuesta, depende de las cabeceras:
    1) Content-Type: Tipo de contenido.
        a) text/html
        b) text/css
        c) application/javascript: Un archivo que se ejecuta.
        d) image/[extensión]
        e) application/json: Un archivo que se puede ejecutar.
        f) application/xml
    2) Content-Length: largo del contenido.

Query: Información extra que se quiere pedir.
Se pueden usar para compatir datos con el frontend. El usuario lo puede ver.
    1) utm-source: Se usa para saber de dónde viene el tráfico.
Estructura
url?key=value&key=value

Las peticiones vienen de Internet.
El que las recibe, es server.js (las acepta o las rechaza. Configura toda la información importante. Capa de configuración).
Archivo de red (capa de red): routes.js y response.js (responde al cliente final). Gestiona las peticiones para llamar los componentes. Hay una carpeta de components
(capa de componente), con carpetas con cada componente.
    1) component:
        a) network: Endpoint y la información del protocolo HTTP.
        b) controller: Lógica del componente (lógica de negocio).
        c) storage: Gestiona la base de dstos. Dónde se guarda la información. */