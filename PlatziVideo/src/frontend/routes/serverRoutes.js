import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Player from '../containers/Player';
import NotFound from '../components/NotFound';

// Rutas del lado del servidor.
const routes = [
  {
    exact: true,
    path: '/',
    component: Home,
  },
  {
    exact: true,
    path: '/login',
    component: Login,
  },
  {
    exact: true,
    path: '/register',
    component: Register,
  },
  {
    exact: true,
    path: '/player/:id',
    component: Player,
  },
  {
    name: 'NotFound',
    component: NotFound,
  },
];

export default routes;
/* Es importante mantener la lógica del ruteo del cliente y el server por separado, dado que
reciben distintos objetos (el server recibe un array de rutas, y eso es lo que usa el static router
para poder configurarlo). */
