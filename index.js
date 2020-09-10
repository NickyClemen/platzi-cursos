/* 1) Cargar ruta: Identificar en dónde nos encontramos en el sitio. Se hace con la carga inicial de la ruta.
2) Comparar URL con ruta: La URL a la que nos queremos mover, se debe comparar con las rutas que tenemos. Ayuda a tener
un buen nivel de seguridad, y evitar poder movernos a secciones que no están autorizadas. Las rutas tienen que estar declaradas.
3) Actualizar la URL en la barra en la barra de navegación: Para eso, utilizamos el método de HTML push.state. Forma parte del objeto
window.history.pushState. Permite agregar un estado al History. Al hacerlo, se ve reflejada en la barra de navegación.
4) Actualizar el DOM con el nuevo contenido: Para eso vamos a usar innerHTML.

El router del lado del cliente, funciona para ayudar a la navegación, y evitar el full reload (se vuelve cargar el sitio).
Las SPA permiten usar las flechas del browser para ir de atrás hacía adelante en la navegación. 

Web API -> History. Son características que no pertenecen a JS, sino al browser. Facilitan la interacción entre el lenguaje y el
browser.
pushState: Toma del stack del History (pertenece al objeto window), y lo que hace es traer direcciones visitadas.

window.history.pushState({ data: 'Movimiento' }, 'Title', '/');
Se le pasa lso siguientes parámetros:
    1) data: URL que se quiere almacenar.
    2) Título.
    3) EL path al que se quiere redireccionar. */
const router = new Router(routes);