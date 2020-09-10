import React from 'react';

const HolaMundo = () => {

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
        
    );

}

export default HolaMundo;