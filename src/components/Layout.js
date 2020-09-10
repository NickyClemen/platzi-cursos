import React from 'react';
import Navbar from './Navbar';


function Layout(props) {

    // const children = props.children;
    // Lee los children de los props.

    return (
        
        <React.Fragment> 
        {/* Para evitar div innecesarios.
        Es un componente especial con el cuál React entiende que podemos regresar más de un elemento, pero como
        uno. */}

            <Navbar />

            {props.children}
            {/* Las llaves permiten que React tome en cuenta los parámetros. */}

        </React.Fragment>
        /* Motivo de encerrar todo en un div: Siempre que regresamos el elemento en el render, ya sea el componente base
        o funcional, tenemos que regresar un sólo elemento (aunque tenga más internamente).
        Con React.Fragment se evitan div innecesarios. */

    );

}

/* Props especial paea hacer que Switch esté dentro de Layout: Children. */

export default Layout;