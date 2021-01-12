import express from 'express';
import helmet from 'helmet';

import cookieParser from 'cookie-parser';
import boom from '@hapi/boom';
import passport from 'passport';
import axios from 'axios';

import webpack from 'webpack';

import React from 'react';
import { renderToString } from 'react-dom/server';

import { renderRoutes } from 'react-router-config'; // Routea las rutas definidas en el array.
import { StaticRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from '../frontend/reducers';

import { config } from './config';

import serverRoutes from '../frontend/routes/serverRoutes';

import { getManifest } from './getManifest';

const app = express();

const PORT = config.env === 'development' ? config.portDev : config.portProd;

app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

require('./utils/auth/strategies/basic');

if(config.env === 'development') {
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig); // Compila la configuración de Webpack.
  const { publicPath } = webpackConfig.output;
  const serverConfig = {
    serverSideRender: true,
    publicPath,
  };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
} else {
  app.use((req, res, next) => {
    if(!req.hashManifest) {
      req.hashManifest = getManifest();
    }

    next();
  });

  app.use(express.static(`${ __dirname }/public`)); // Se le indica a Express el uso de una carpeta pública.
  app.use(helmet());
  app.use(helmet.permittedCrossDomainPolicies()); // Deshabilita Adobe Acrobat y Flash.
  app.disabled('x-powered-by'); // Bloquear cabeceras. Evita que el browser sepa desde dónde te estás conectado.
}

const setResponse = (html, preloadedState, manifest) => {
  const mainStyles = manifest ? manifest['vendors.css'] : 'assets/vendors.app.css';
  const mainBuild = manifest ? manifest['main.js'] : 'assets/vendor.js';

  return (`
        <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <meta http-equiv="Content-Security-Policy" content="default-src *;
                    img-src * 'self' data: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' *;
                    style-src  'self' 'unsafe-inline' *">

                    <link rel="stylesheet" href="${ mainStyles }" type="text/css">

                    <title>Platzi Video</title>
                </head>

                <body>
                    <div id="app">${ html }</div>

                    <script>
                        window.__PRELOADED_STATE__ = ${ JSON.stringify(preloadedState).replace(/</g, '\\u003c') }
                    </script>

                    <script src="${ mainBuild }" type="text/javascript"></script>
                </body>
            </html>
    `);
};

const renderApp = async (req, res, next) => {
    let initialState;
    const { token, email, name, id } = req.cookies;

    try {
        let movieList = await axios({
        url: `${ process.env.API_URL }/api/movies`,
        headers: { Authorization: `Bearer ${ token }`, },
        method: 'GET',
        });

        movieList = movieList.data.data;

        initialState = {
        user: {
            id, email, name,
        },
        myList: [],
        trends: movieList.filter(movie => movie.contentRating === 'PG' && movie._id),
        originals: movieList.filter(movie => movie.contentRating === 'G' && movie._id),
        };
    } catch(err) {
        initialState = {
        user: {},
        myList: [],
        trends: [],
        originals: [],
        };
    }

    const store = createStore(reducer, initialState);
    const preloadedState = store.getState();
    const isLogged = (initialState.user.id);

    const html = renderToString(
        <Provider store={ store }>
        <StaticRouter location={ req.url } context={ {} }>
            { renderRoutes(serverRoutes(isLogged)) } [intranet c$]
        </StaticRouter>
        </Provider>,
    );

    res.send(setResponse(html, preloadedState, req.hashManifest));
};

app.post('/auth/sign-in', async (req, res, next) => {
  const { rememberMe } = req.body;

  passport.authenticate('basic', (error, data) => {
    try {
      if(error || !data) {
        next(boom.unauthorized());
      }

      req.login(data, { session: false }, async (err) => {
        if(err) {
          next(err);
        }

        const { token, user } = data;

        res.cookie('token', token, {
          httpOnly: !(config.env === 'development'),
          secure: !(config.env === 'development'),
          maxAge: rememberMe ? THIRTY_DAYS_IN_SEC : TWO_HOURS_IN_SEC,
        });

        res.status(200).json(user);
      });
    } catch(err) {
      next(err);
    }
  })(res, res, next);
});

app.post('/auth/sign-up', async (req, res, next) => {
  const { body: user } = req;

  try {
    const userData = await axios({
      url: `${ config.apiUrl }/api/auth/sign-up`,
      method: 'POST',
      data: {
        'email': user.email,
        'name': user.name,
        'password': user.password,
      },
    });

    res.status(201).json({
      name: req.body.name,
      email: req.body.email,
      id: userData.data.id,
    });
  } catch(error) {
    next(error);
  }
});

app.get('*', renderApp);

const server = app.listen(PORT, (error, next) => {
  return (error) ? next(error) : console.log(`Server running on port ${ server.address().port }.`);
});
