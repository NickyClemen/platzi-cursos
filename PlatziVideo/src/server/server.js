import express from 'express';
import webpack from 'webpack';

import { config } from './config';

const app = express();

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
}

app.get('*', (req, res, next) => {
    res.send({ hello: 'express' });
});

const server = app.listen(config.port, (error, next) => {
    return (error) ? next(error) : console.log(`Server running on port ${ server.address().port }.`);
});
