import React from 'react';
import ReactDOM from 'react-dom';
/* Con react-dom, se empuja todo lo que se hace con React, hacía el navegador. */
import App from './containers/App';

ReactDOM.render(<App />, document.getElementById('app'));
/* Se utiliza una función de ReactDOM para pasar el componente.
El método render(), recibe dos parámetros: El componente, y dónde se va a empujar el componente. */