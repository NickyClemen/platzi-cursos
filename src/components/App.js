import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BadgeEdit from '../pages/BadgeEdit';
import BadgeDetails from '../pages/BadgeDetailsContainer';
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import Home from '../pages/Home';
import Layout from './Layout';
import NotFound from '../pages/NotFound';

function App() {

    return (

        <BrowserRouter>

            <Layout>

                <Switch> 
                {/* Ponerlo los Route en un contenedor, dado que BrowserRouter admite un solo elemento (hijo). 
                Para evitar que se rendericen las dos páginas juntas, y que cargue toda la página, se puede usar Switch
                en lugar de <Switch>.
                Para evitar que decida sobre coincidencias, hay que cambiar el path, por el exact path (ruta exacta). */}

                    <Route exact path="/" component={Home} />

                    <Route exact path="/badges" component={Badges} />

                    <Route exact path="/badges/new" component={BadgeNew} />

                    <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
                    {/* Redirige a la página de edición del formulario (PUT). */}
                    
                    <Route exact path="/badges/:badgeId" component={BadgeDetails} />

                    <Route component={NotFound} />
                    {/* Ruta con path para desviar a una página de error. */}
                    
                </Switch>

            </Layout>

            

        </BrowserRouter>

    );

}
// Se puede usar una función cuando no se esté declarando un método o usando un estado.

export default App;