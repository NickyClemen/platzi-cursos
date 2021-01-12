import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
/* Browser Route encapsula todos los elementos para trabajar con la navegación.
Route añade el elemento a rutear.
    exact: Se le indica que la ruta sea exacta.
Switch
    Presenta el componente según el path al que se está llamando.
Layout
    Mantiene la persistencia de elementos fijos. */

import Home from '../containers/Home';
import Layout from '../components/Layout';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Player from '../containers/Player';
import NotFound from '../components/NotFound';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/player/:id' component={Player} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
