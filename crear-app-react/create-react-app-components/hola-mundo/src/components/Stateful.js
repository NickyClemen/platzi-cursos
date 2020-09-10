import React, { Component } from 'react';

class Stateful extends Component {

    // Lógica.
    constructor(props) {

        super(props);
        /* En ésta sección, se puede hacer binding de las funciones que se van a trabajar,
        o asignar el estado. */
        this.state = {

            hello: 'Hola Mundo'

        }

    }

    render() {

        return (

            <h1>{ this.state.hello }</h1>

        );

    }
    // Permite retornar el HTML.

}

/* Dentro de ésta clase, va a estar parte de la lógica, dónde va a estar el ciclo de vida de la aplicación,
los estados y los eventos que se van a manejar, y dentro del render, el HTML que se va a manejar. */

export default Stateful;
