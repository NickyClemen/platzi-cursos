import React from 'react';
import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';
import BadgesList from '../components/BadgesList';
import { Link } from 'react-router-dom';
import api from '../api';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import MiniLoader from '../components/MiniLoader';

class Badges extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            loading: true,
            error: null,
            data: undefined
                    
        }
    
    } /* El constructor recibe props, los mismos que tienen que ser utilizados para inicializar la super clase. 
    se sugiere inicializar el estado acá. */

    /* componentDidMount() {

        this.timeoutId = setTimeout(); --> Para enlazar con el clearTimeout en el componentWillMount.
        Actualiza el componente.
        Para evitar que un setTimeout trate de actualizar elementos desmontados, hay que guardar en una variable la función,
        y ejecutar clearTimeout(), el cuál cancela el trabajo pendiente.
        Se tiene que hacer en el componentWill

    } */

    /* componentDidUpdate(prevProps, prevState) {

        Comparar los cambios.

    } */

    /* componentWillMount() {

        Antes de que el componente se vaya.
        clearTimeout(this.timeoutId);


    } */

    /* Polling: En determinado tiempo, busca los datos y los actualiza automáticamente */

    componentDidMount() {

        this.fetchData();

        this.intervalId = setInterval(this.fetchData, 5000);

    }

    componentWillUnmount() {

        clearInterval(this.intervalId);

    }

    fetchData = async () => {

        this.setState({ loading: true, error: null });
        /* Se declara de ésta manera, ya que es posible que en un futuro, se vuelva a llamar a fetchData(). */

        try {

            const data = await api.badges.list();

            this.setState({ loading: false, data: data })

        } catch (error) {

            this.setState({ loading: false, error: error })

        }

    }

    render(){

        // Manejar en caso de que el loading sea cierto.
        
        if (this.state.loading === true && !this.state.data) {

            return <PageLoading />;

        }

        // Manejar en caso de que haya un error.

        if (this.state.error) {

            return <PageError error={this.state.error} />;

        }

        /* El mejor lugar para inicializar una petición a una API, es en el componentDidMount. Nos asegura que el
        código del componente ya está listo. */

        return (

            <React.Fragment>

                <div className="Badges">

                    <div className="Badges__hero">

                        <div className="Badges__container">

                            <img 
                                className="Badges_conf-logo" 
                                src={confLogo} 
                                alt="Conf Logo" 
                            />

                        </div>

                    </div>

                </div>

                <div className="Badge__container">

                    <div className="Badges__buttons">

                        <Link to="/badges/new" className="btn btn-primary">New Badge</Link>

                    </div>

                </div>

                {/* Hacer que por cada uno de los datos, parezca un componente. La clave está en cada uno de los datos. */}

                <div className="Badges__list">

                    <div className="Badges__container">

                        <BadgesList badges={this.state.data} />

                        { this.state.loading && <MiniLoader /> }

                    </div>

                </div>

            </React.Fragment>

        );

    }

}

export default Badges;