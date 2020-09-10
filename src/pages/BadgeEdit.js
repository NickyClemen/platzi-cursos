import React from 'react';
import header from '../images/platziconf-logo.svg';
import './styles/BadgeEdit.css';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import api from '../api';
import PageLoading from './../components/PageLoading';

class BadgeEdit extends React.Component {

    // Manera de limpiar el Warning de que el input pasó de no controlado a controlado.

    state = {

        loading: true,
        // Representa la carga de los datos cuando son enviados.
        error: null,

        form: {

            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: '',

        }

    };

    componentDidMount() {

        this.fetchData();

    }

    fetchData = async e => {

        this.setState({ loading: true, error: null });

        try {

            const data = await api.badges.read(this.props.match.params.badgeId)

            this.setState({ loading: false, form: data });

        } catch (error){

            this.setState({ loading: false, error: error });

        }

    }

    handleChange =  e  => {

     /*Primera manera de solucionarlo: Haciendo una copia de estado de form.

        const nextForm = this.state.form;

        nextForm[e.target.name] = e.target.value; */

        this.setState({

            // Segunda manera.

            form:  {

                // Se dejacaer todos los valores que tenía el form, y se le agrega uno nuevo.

                ...this.state.form,
                [e.target.name]: e.target.value,

            },
                
             /*   
                Primera manera: nextForm,

                {

                    [e.target.name]: e.target.value,
                    // Si se queda de ésta manera, sobreescribe los resultados.

                } */

        } );

    }

    handleSubmit = async e => {

        e.preventDefault()
        this.setState({loading: true, error: null});

        try {

            await api.badges.update(this.props.match.params.badgeId, this.state.form);
            this.setState({loading: false});
            this.props.history.push('/badges');
            /* Las páginas reciben tres props: Location, History y Match. */

        } catch (error) {

            this.setState({loading: false, error: error});

        }   

    }

    render(){

        if (this.state.loading) {

            return <PageLoading />

        }

        return (

            <React.Fragment>

                <div>

                    <div className="BadgeEdit__hero">

                        <img className="BadgeEdit__hero-image img-fluid" src={header} alt="" />

                    </div>

                </div>

                <div className="container">

                    <div className="row">

                        <div className="col-6">

                            <Badge 

                                firstName={this.state.form.firstName || 'FIRST_NAME'}
                                lastName={this.state.form.lastName || 'LAST_NAME'}
                                twitter={this.state.form.twitter || 'TWITTER'}
                                jobTitle={this.state.form.jobTitle || 'JOB-TITLE'}
                                email= {this.state.form.email || 'EMAIL'}
                                // Dar un valor por omisión.
                                
                            />

                        </div>

                        <div className="col-6">

                            <h1>Edit Attendant</h1>

                            <BadgeForm  
                                onChange={this.handleChange} 
                                onSubmit={this.handleSubmit} 
                                formValues={this.state.form} 
                                error={this.state.error}
                            />

                        </div>

                    </div>

                </div>

            </React.Fragment>

        );

    }

}

export default BadgeEdit;