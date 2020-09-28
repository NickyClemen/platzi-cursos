const axios = require('axios');

const data = {
    username: 'admin',
    password: 'admin',
};

axios.get('https://xkcd.com/info.0.json')
    .then(response => console.log(response.data))
    .catch(err => console.log(err.message));

axios.post('https:/api.example.com/api/1.0/user/login', data, {
    headers: {
        'Content-Type': 'application/json',
    },
})
    .then(response => console.log(response))
    .catch(err => console.log(err.message));
/* API (Aplication Programming Interface)
Conjunto de reglas que definen como van a interactuar dos apps.
En OOP, la API es el conjunto de todos los miembros públicos que ofrece una clase.

Qué es HTTP (Hypertext Transfer Protocol)
Protocolo: Conjunto de reglas que establecen como se comunican dos entidades.
Hypertext: Texto que contiene referencia a otros textos.
    1) Protocolo de comunicación entre aplicaciones.
    2) Basado en intercambio de texto.

Cómo funciona HTTP
Petición HTTP - Por debajo, funciona con TCP/IP.
    1) Headers - curl -v [dirección] - El > es lo que se envía, y el < la respuesta.

Qué es REST (Representational State Transfer)
Estilo de arquitectura de software enfocado en el intercambio de recursos. Basado en HTTP.
Capa de complejidad que se le agrega a HTTP. HTTP es intercambio de archivos, mientras que REST en recursos.

Qué es una API RESTful
API diseñada alrededor de los conceptos de REST.
    Conceptos
        1) Recurso: Recurso sobre el que se quiere realizar una acción.
        2) URI (Uniform Resource Identifier): Identificar el recurso sobre el que se va a actuar.
        3) Acción: Acción que se quiere realizar.

    Petición REST
        1) URL: A diferencia de la URI, incluye el dominio, protocolo, etc.
        2) Verbo HTTP: GET, PUT, POST y DELETE (CRUD).

    Cuándo conviene utilizar REST
        1) Interacciones simples.
        2) Recursos limitados.

Consumo vía REST
    Responsabilidad del cliente
        1) Realizar peticiones HTTP. No necesariamente lo dispara una acción humana.
        2) Analizar las respuestas del servidor.

Verbos HTTP
    1) GET: Consultar.
    2) POST: Crear.
    3) PUT: Actualizar.
    4) PATCH: Actualización parcial.
    5) DELETE: Eliminar.

Autenticación HTTP
    1) Poco segura: Las credenciales se envían en cada request.
    2) Ineficiente: La autenticación se realiza en cada request.

Autenticación HMAC (Hash Message Authentication Code)
    Hash es una función que transforma un texto en un código difícil de entender para humanos.

    1) Función HASH conocida por el cliente y el servidor.
    2) Secret compartida por el cliente y el servidor.
    3) Datos que viajan de forma pública.

    El cliente concatena la información pública con el HASH y el secret. Al ser recibido el mensaje por el servidor,
    genera un nuevo HASH y los compara.
Se utilizacuando la información que se envía no es muy sensible.

Access Token (Accesos temporales)
    Se complejiza: Hay un servidor que se encarga de la autenticación y otro con los recursos.
    El cliente se registra en el server de autencicación, con el cuál obtiene un ID y una secret key.
    El mismo envía un pedido de acceso temporal (GET TOKEN) al servidor de auth informando las credenciales. Si las
    credenciales son válidas, retorna un access token para poder acceder a los recursos del servidor.
    Por otro lado, el servidor de recursos hace una petición al auth server para verificar el token antes de compartir
    los recursos.
Extremadamente segura.
Utilizada en casos de información muy sensible.

Manejo de errores
    Código de error
        Los códigos de estado en HTTP se clasifican en varios tipos:
            1xx: Respuestas informativas
            2xx: Peticiones correctas
            3xx: Redirecciones
            4xx: Errores del cliente
            5xx: Errores del servidor
                Los más comunes:
                400 Bad Request: Error en la petición.
                401 Unauthorized: Falta iniciar sesión.
                403 Forbidden: No se poseeen los permisos necesarios.
                404 Not Found: No se ha podido encontrar el recurso.
                500 Internal Server error: Usualmente fallo en la aplicación web.
                502 Bad Gateway: Error entre la comunicación del servidor web y alguno de los servidores que actúan de proxy.
                503 Service Unavailable: Servidor está caido por mantenimiento o está sobrecargado.
                504 Gateway Timeout: El servidor actúa como puerta de enlace y no puede obtener una respuesta a tiempo.

AJAX (Asynchronous Javascript XML)
    El cliente no queda bloqueado esperano la respuesta del servidor.


Buenas prácticas REST
    1) Recursos = Sustantivos. Nunca verbos.
    2) La URL siempre es en plurales.
    3) Modificaciones con POST, PUT y DELETE.

    4) Relaciones: Subrecursos.
    5) Navegabilidad vía vínculos.
    6) Colecciones filtrables, ordenables, paginables y elegir los parámetros.
    7) APIs versionadas. */