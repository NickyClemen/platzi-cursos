import React from 'react';

class BadgeForm extends React.Component {

    // Inicializar el estado (se ouede hacer en cualquier línea del componente).

    // state = {};

    // Eventos.

    /* handleChange = (e) => {

       /*  console.log({

            name: e.target.name,
            // Si se quiere ver el nombre del evento.
            value: e.target.value
            // Si se quiere ver el valor que estamos pasando.
        
        }); 

        this.setState({

            [e.target.name]: e.target.value,

        }); 
    
    }*/
        /* setState --> Función de la clase COMPONENT. Se le pasa un objeto con la información que 
        se quiera guardar. */


    
    // La "e" es el evento.

    handleClick = (e) => {

        console.log("Button was clicked");

    }

    /* handleSubmit = e => {

        e.preventDefault();
        // Si no se quiere que se envíe el formulario, hay que hacer un preventDefault (evitar comportamiento por defecto).
        // La información se almacena en dos espacios. Cada input almacena su propio valor, y le indica a setState que lo almacene (no es lo ideal).
        Lo ideal es tener una sola fuente de información.
        Para lograrlo, hay que pasar los input de "no controlados", a "controlados". //
        console.log(this.state);

    } */
    render() {

        return (

            <div>

                <form action="" onSubmit={this.props.onSubmit}>

                    <div className="form-group">

                        <label htmlFor="">First Name:</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text"
                            name="firstName" 
                            value={this.props.formValues.firstName}
                            // Para crear el estado, se usa setState. Para leerlo, state.
                        />
                        {/* Para poder pasar un input de "no controlado", a "controlado", hay que pasarle un prop adicional: VALUE (va a contener y desplegar cada uno de los input). */}
                    
                    </div>

                    <div className="form-group">

                        <label htmlFor="">Last Name:</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="lastName" 
                            value={this.props.formValues.lastName}
                        />

                    </div>

                    <div className="form-group">

                        <label htmlFor="">Email:</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="email" 
                            name="email" 
                            value={this.props.formValues.email}
                        />

                    </div>

                    <div className="form-group">

                        <label htmlFor="">Job Title:</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="jobTitle"
                            value={this.props.formValues.jobTitle} 
                        />

                    </div>

                    <div className="form-group">

                        <label htmlFor="">Twitter:</label>
                        <input 
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="twitter"
                            value={this.props.formValues.twitter} 
                        />

                    </div>

                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                    {/* Cuando hay un botón dentro de un formulario, automaticamente es del tipo
                    submit. Es su valor por omisión.
                    Si no queremos que pase, podemos hacer dos cosas:
                        a) Agregarle el type="button"  
                        b) Manejando cuando ocurra un evento. */}

                    { this.props.error && <p className="text-danger">{ this.props.error.message }</p> }

                </form>

            </div>

        );

    }

}

export default BadgeForm;