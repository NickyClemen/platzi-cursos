import React from 'react';
import ReactDOM from 'react-dom'; // Con react-dom, se empuja todo lo que se hace con React, hacía el navegador.

import { Router } from 'react-router';

import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
/* react-redux provee de un provider que permite encaptular los componentes por medio de un conect, el cuál va a tener toda
la información del store transmitida a los componentes.
compose permite conectar Redux con la dev tool. */

import { createBrowserHistory } from 'history';
// Se define como se va a crear el historial del browser.

import reducer from './reducers';

import App from './routes/App';

const history = createBrowserHistory();
const preloadState = window.__PRELOADED_STATE__;

// Para conectar al Redux DevTools.
const composeEnhansers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, preloadState, composeEnhansers()); // Recibe dos parámetros: a) reducer y b) estado inicial.

delete window.__PRELOADED_STATE__;

ReactDOM.hydrate(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app'),
); /* Cuando se hace un hydrate, carga todos los eventos para ser ejecutados del lado del servidor. */
