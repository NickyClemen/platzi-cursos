/* @babel-register ayuda a poder usar la configuración de Babel en el SSR.
webpack-dev-middleware webpack-hot-middleware para integrar Express con Webpack. */
require('ignore-styles'); // Hace que el server ignore las llamadas a las clases de CSS.

require('@babel/register')({
    presets: ['@babel/preset-env', '@babel/preset-react'],
});

require('asset-require-hook')({
    extensions: ['jpg', 'png', 'gif'],
    name: '/assets/[hash].[ext]',
});
/* assetRequireHook permite hacer binding en tiempo real de los archivos requeridos en Express.
Se le pasa por parámetro la extemsión y el archivo que se va a requerir. */

require('./server');
