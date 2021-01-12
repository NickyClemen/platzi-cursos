import express from 'express';
import helmet from 'helmet';

import webpack from 'webpack';

import React from 'react';
import { renderToString } from 'react-dom/server';

import { renderRoutes } from 'react-router-config'; // Routea las rutas definidas en el array.
import { StaticRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from '../frontend/reducers';

import { config } from './config';

import initialState from '../frontend/initialState';

import serverRoutes from '../frontend/routes/serverRoutes';

import { getManifest } from './getManifest';

const app = express();

const PORT = config.env === 'development' ? config.portDev : config.portProd;

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
    const mainStyles = manifest ? manifest['vendors.css'] : 'assets/app.css';
    const mainBuild = manifest ? manifest['main.js'] : 'assets/app.js';

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

const renderApp = (req, res, next) => {
    const store = createStore(reducer, initialState);
    const preloadedState = store.getState();
    const html = renderToString(
        <Provider store={ store }>
            <StaticRouter location={ req.url } context={ {} }>
                { renderRoutes(serverRoutes) }
            </StaticRouter>
        </Provider>,
    );

    res.send(setResponse(html, preloadedState, req.hashManifest));
};

app.get('*', renderApp);

const server = app.listen(PORT, (error, next) => {
    return (error) ? next(error) : console.log(`Server running on port ${ server.address().port }.`);
});
