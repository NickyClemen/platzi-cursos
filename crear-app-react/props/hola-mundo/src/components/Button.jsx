import React from 'react';

const Button = (props) => {

    const { text } = props;

    return ( 

        <div>

            <button type="button">{ props.text }</button>
            { /* El componente sólo va a a hacer render el elemento que se le pasa por parámetro
            (dónde se inicializa el componente). 
            Hay otra manera de pasar props, y desestructurando el valor desde las props. */ }
            <button type="button">{ text }</button>

        </div>

    );

}

export default Button;