import React from 'react';
/* React.Component es otra manera de referencias Component.
Sino, se tiene que referenciar:
    import React, { Component } from 'react'; 
    class Button extends Component 
    
State en React: Es un objeto, al cuál se le pueden definir variables (string, enteros, booleanos o 
funciones). Se va a poder acceder al componente en el momento en el que se inicializa. Nos permite
tener a disposición elementos para utilizar. */

// Componente stateful.
class Button extends React.Component {

    state = {

        count: 0,

    }

    handleClick = () => {

        this.setState({

            count: this.state.count + 1,

        });
        // Permite actualizar el estado.

    }

    render(){

        const { count } = this.state;

        return (

            <div>

                <h1>Manzanas { count }</h1>
                {/* Hay dos maneras de tarer los estados: 
                    a) this.state.[index].
                    b) Desestructurar de this.state. */}
                {/* <button type="button">{ props.text }</button> */}
                <button type="button" onClick={ this.handleClick }>Agregar.</button>

            </div>

        );

    }

}

/* Componente stateless.
const Button = (props) => {

    const { text } = props;

    return ( 

        <div>

            <button type="button">{ props.text }</button> 
            <button type="button">{ text }</button>

        </div>

    );

} */

export default Button;