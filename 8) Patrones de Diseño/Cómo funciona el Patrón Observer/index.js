/* Cómo funciona el patrón de diseño Observer.

El patrón observer se compone de un sujeto que ofrece mecanismos de suscripción y desuscripción a
múltiples observadores que quieren ser notificados de los cambios en dicho sujeto.
Cada observador expone un método de update que es usado por el sujeto para notificar cualquier
cambio a todos los suscritos. 
Se compone de dos cosas:
    1) Un sujeto: Ofrece un mecanismo de suscripción.
    Cuando hay nuevo contenido, se notifica a los observadores.
    2) Observadores. 
    
Es importante en el caso de diseño de software, porque nos ayuda a construir código desacoplado, es decir,
reduce los casos de implementación (lo que un objeto debe conocer de los otros).
El observador tiene que primeter algo. Tener un método update. 
Cuando el sujeto quiere notificar a toda la lista de sus suscriptores, va a llamar al método upgrade de cada
uno de ellos. Además, como argumento a la función, se le pasa la información que se quiera notificar. 
Es uno de los más usados.
Lo podemos apreciar en: 
    1) Newsletter.
    2) Sockets. */