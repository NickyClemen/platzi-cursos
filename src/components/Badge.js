import React from 'react';
import "./styles/Badge.css"; // Importar el CSS.
import confLogo from '../images/badge-image.svg';
import Gravatar from './Gravatar';

class Badge extends React.Component {

    render(){

        // this.props;
        // Variable de la que salen los props.

       /*  const firstName = "Nicole";

        const lastName = "Ordoqui" */

        return(

            <div className="badge">
            {/* Pide que se pase className, y no class, para no confundir con la palabra
            reservada de JS. */}
            
                <div className="badge_header">

                    <img src={confLogo} alt="Logo" />
                    {/* En React, se puede pasar una dirección por la imagen, o se puede dar una referencia directa. */}

                </div>

                <div className="badge_section-name">

                    <Gravatar className="badge_avatar" email={this.props.email} alt="Avatar" />

                    <h1>{this.props.firstName} <br /> {this.props.lastName}</h1>

                </div>

                <div className="badge_section-info">

                    <h3>    

                        {this.props.jobTitle}

                    </h3>

                    <div>

                        {this.props.email}

                    </div>

                    <div>

                        @{this.props.twitter}

                    </div>

                </div>

                <div className="badge_footer">

                    <p>#PlatziConf</p>

                </div>

            </div>

        );

    } // Método obligatorio. Define el resultado que se va a ver en pantalla.

}

/* Todos los componentes requieren de, al menos, un método: Render. */


export default Badge;