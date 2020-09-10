/* ¿QUÉ ES REACT JS?

Es una biblioteca de JS para construir intEGrfaces de usuario.
React es declarativo (le tenemos que decir qué hacer, no cómo hacerlo).
El HTML en el archibo .js es JSX.
Componentes (bloques de código).
Aprendelo una vez, escribilo dónde sea. Nos permite escribir en varias plataformas.

REACTDOM.RENDER

En Javascript

const element = document.createElement('h1');
Crea un elemento de HTML.

element.innerHTML = 'Hello, Platzi Badges!';
Agrega un texto al elemento creado.

const container = document.getElementById('app');

container.appendChild(element); */

// En React.

import React from 'react'; // Análogo del createElement.
// Es requisito que si se va a escribir JSX, aparezca la importación de react.
import ReactDOM from 'react-dom'; // Análogo del appendChild.
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
import App from './components/App';
// Acá voy a tener React Router.

// Aplicar estilos gloables.

// const jsx = <h1>Hello, Platzi Badges from React!</h1>

// Con JSX.

// const name = 'Cirilla';

// const jsx = <h1>Hola, soy {name}</h1>;
/* Las {} nos permite introducir variables (expresiones de JS).
Expresión: En JS, es algo que se va a interpretar y evaluar. Si esas expresiones terminan siendo un valor FALSE,
no se van a imprimir en pantalla. */

/* const jsx = (<div>

    <h1>Hola, soy {name}.</h1>

    <p>Trabajo de desarrolladora Sharepoint.</p>

</div>); */

/* Lo mismo, pero con React.createElement.

const element = React.createElement('div', {}, 
    Para introducir el <h1> y el <p>:
    React.createElement('h1', {}, 'Hola, soy Cirilla.'),
    React.createElement('p', {}, 'Trabajo de desarrolladora Sharepoint'),

); */

/* Alternativa al JSX.

const element = React.createElement('h1', {}, 'Hola! Soy los children.' ); */

/* Pasarle un atributo.

const element = React.createElement('a', {href: 'https://platzi.com'}, 'Ir a la página de Platzi.' );
Tiene tres elementos: 
    a) Tipo de elemento que se está creando. Se parece al createElement.
    b) Cuáles son los atributos. En React, se llaman PROPS (o properties).
    c) Children. Es parecido al innerText ó al innerHTML. */

/* Pasarle una variable (se usan template literals).

const name = 'Cirilla';

const element = React.createElement('h1', {}, `Hola, soy ${name}.`);*/

const container = document.getElementById('app');

// ReactDOM.render(element, container);
// ReactDOM.render(jsx, container);
/* Toma dos argumentos:
    a) Qué se quiere renderizar.
    b) Dónde se lo va a renderizar. */

ReactDOM.render(<App />, container);
/* <Badge 

    firstName = "Nicole"
    lastName = "Ordoqui"
    jobTitle = "Sharepoint Developer"
    twitter = "@ClemenNicky"

/> */
// Se pueden pasar los props como atributos dentro de la etiqueta del componente.
