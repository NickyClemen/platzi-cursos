// Módulo nativo en Node.
const path = require('path');
// Instanciar el plugin de HTML.
const HtmlWebpackPlugin = require('html-webpack-plugin');
// Instanciar el plugin de CSS.
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                },
            },
            {
                test: /\.(s*)css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader',
                    'sass-loader'
                ]
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].css', // Cómo se va a llamar el archivo resultante.
        }),
    ],
}

/* entry: Hace referencia al archivo de entrada.
output: Dónde se van a guardar los archivos resultantes cuando ocurra la compilación.
    path.resolve(__dirname) -> Permite detectar el directorio en el que nos encontramos. El segundo
    parámetro, es la carpeta en la que se van a guardar los archivos.
    filename: Nombra el archivo principal.
resolve: Resolver las extensiones del proyecto.
module: Reglas para el proyecto.
    rules -> text -> Expresión regular para reconocer los archivos .js y .jsx.
        -> exclude -> Excluye la carpeta de node_module.
        -> loader -> Babel.
    rules -> test -> Expreisón regular para trabajar con los archivos HTML.
plugins: Se agregan los plugins necesarios. Se instancia HtmlWebPackPlugin, y se le pasa como
argumento un objeto de configuración. Lo primero se que se le pasa, es un template (dónde está ubicado
el que tenemos), y luego, el filename.

webpack-dev-server: Ayuda a creer un entorno de desarrollo local.
mini-css-extract-plugin: Extrae el CSS del bundle resultante de la compilación, y crea un archivo
aparte. */