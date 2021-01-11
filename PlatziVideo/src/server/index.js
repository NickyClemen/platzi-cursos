/* @babel-register ayuda a poder usar la configuración de Babel en el SSR.
webpack-dev-middleware webpack-hot-middleware para integrar Express con Webpack. */
require('@babel/register')({
    presets: ['@babel/preset-env', '@babel/preset-react'],
});

require('./server');
