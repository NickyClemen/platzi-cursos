import React from 'react';
import ReactDOM from 'react-dom';
/* Con react-dom, se empuja todo lo que se hace con React, hacía el navegador. */
import App from './containers/App';

ReactDOM.render(<App />, document.getElementById('app'));
/* Se utiliza una función de ReactDOM para pasar el componente.
El método render(), recibe dos parámetros: El componente, y dónde se va a empujar el componente.

json-server se usa para simular una API con un archivo JSON.
Los hooks le dan estado a los componentes de tipo función (stateless).
Una de las motivaciones, era los problemas de entendimiento que traía el uso de clases.
Otro, por lo complicado de enviar props entre componentes.
Estpa disponible desde la versión 16.8. */