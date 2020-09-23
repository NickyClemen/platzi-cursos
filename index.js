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
        2) Recursos limitados. */