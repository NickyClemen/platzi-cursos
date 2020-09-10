/* Los componentes se pueden identificar como jsx o js. */
import React from 'react';

const HolaMundo = () => {

    /* Cómo este componente es 'stateless' (no tiene lógica ni estado), se le puede agregar
    lógica, dónde se le puede asignar una variable a un texto, y pasarlo dentro del componente. */
    const hello = 'Hola mundo.';
    const isTrue = true;

    return (

        <div className="holaMundo">

            <h1>{ hello }</h1>
            <h2>Curso de React.</h2>
            <img src="https://arepa.s3.amazonaws.com/react.png" alt="React" />

            { isTrue ? <h4>Esto es verdadero.</h4> : <h4>Esto es falso.</h4> }
            { /* Otra manera de hacer validaciones. */ }
            { isTrue &&  <h4>Esto es verdadero.</h4> }

        </div>
        /* Hay una aclaración importante: React utiliza clases. No se usa 'class', porque es una palabra
        reservada dentro de JS, por lo que se escribe 'className'. */

    );

}

export default HolaMundo;