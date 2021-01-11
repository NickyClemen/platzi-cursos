/* ¿Qué es React Router?
    npm install react-router-dom

Redux es una librería creada en JS por Dan Abramov basada en la arquitectura Flux propuesta por
Facebook, e inspirada en el paradigma funcional.
Está basado en tres principios fundamentales:
    1) Hay una sola fuente.
    2) Los estados son de solo lectura.
    3) Se pueden usar solamente funciones puras.
Se utiliza para manejar el flujo de la información de la aplicación.
El evento en la UI, se transforma en una action (describe lo que vamos a hacer). Esto pasa por un reducer (obtiene la
información transmitida en el action), y la pasa al state sin tener que eliminar otros que estén almacenados.
Con esto, se puede volver a enviar a la UI.

Redux nos permite tener un contenedor predecible del estado en aplicaciones creadas con JavaScript. Nos ayuda a escribir
aplicaciones que se comportan de una manera consistente; esto significa que podemos utilizar esta lógica en aplicaciones
del lado del cliente, trabajar del lado del servidor o crear aplicaciones para dispositivos móviles.
Uno de los principales uso que tiene Redux es con React; pero puede ser implementado en cualquier librería o proyecto que
este construido con Javascript, lo cual incluye a Angular, Vue o algún otro framework o librería.
Redux nace de la arquitectura Flux, tomando inspiración del lenguaje funcional Elm y es creado por Dan Abramov y Andrew
Clark en el 2015. Hoy en día, es una de las librerías más utilizadas para el manejo del flujo de la información en aplicaciones.
Una de las principales motivaciones para crear Redux, nace en resolver un problema, y era el manejo del estado y el flujo
de nuestras aplicaciones creadas en Javascript. Redux propone una forma de manejar el estado donde podamos controlar
cómo vamos a interactuar con otros elementos (llamadas a un API) o interacciones dentro de nuestra aplicación.
Teniendo en cuenta esto, Redux intenta de predecir las mutaciones que pueda sufrir el estado, creando restricciones de cuándo
y cómo pueden ser ejecutadas las actualizaciones en nuestras aplicaciones.
Redux es una librería muy pequeña que se puede incorporar en cualquier proyecto construido en JavaScript y se basa en
tres principios:
    a) Única fuente de la verdad: Nuestra aplicación solo debe de tener un único Store y es la única fuente de información.
    b) El estado es de solo lectura: La única forma de modificar el estado es emitiendo un acción. Este objeto describe lo
    que va a ocurrir.
    c) Los cambios se realizan con funciones puras: Para realizar cambios al estado es necesario utilizar reducers, los cuáles
    son funciones puras que toman el estado anterior, una acción y devuelve un nuevo estado con las modificaciones necesarias.

En src, se crea una carpeta para los actions, y otra para los reducers. */