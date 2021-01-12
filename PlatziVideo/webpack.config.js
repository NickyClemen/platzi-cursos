// Módulo nativo en Node.
const path = require('path');

const webpack = require('webpack');

// Instanciar el plugin de CSS.
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const { config } = require('./src/server/config');

const isDev = (config.env === 'development');
const entry = ['./src/frontend/index.js'];

if(isDev) {
    entry.push('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload');
}

module.exports = {
    entry,
    mode: config.env,
    output: {
        path: isDev ? '/' : path.resolve(__dirname, 'src/server/public'),
        filename: isDev ? 'assets/app.js' : 'assets/app-[hash].js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
        splitChunks: {
            chunks: 'async',
            cacheGroups: {
                vendors: {
                    name: 'vendors',
                    chunks: 'all',
                    reuseExistingChunk: true,
                    priority: 1,
                    filename: isDev ? 'assets/vendor.js' : 'assets/vendor-[contenthash].js',
                    enforce: true,
                    test(module, chunks) {
                        const name = module.nameForCondition && module.nameForCondition();
                        return (chunk) => chunk.name !== 'vendors' && /[\\/]node_modules[\\/]/.test(name);
                    },
                },
            },
        },
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
                test: /\.(s*)css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|gif|jpg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/[hash].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    devServer: {
        historyApiFallback: true, // Permite el routeo en la SPA.
    },
    plugins: [
        isDev ? new webpack.HotModuleReplacementPlugin() : () => {}, // Ayuda en el refresh en caliente de la app.
        isDev ? () => {} : new CompressionPlugin({
            test: /\.js$|\.css$/,
            filename: '[path][base].gz',
        }), // No hay manera de ver los archivos minificados o el CSS, ya que esas configuraciones son hechas desde nginx.
        new MiniCssExtractPlugin({
            filename: isDev ? 'assets/app.css' : 'assets/app-[hash].css', // Cómo se va a llamar el archivo resultante.
        }),
        isDev ? () => {} : new WebpackManifestPlugin(),
        isDev ? new ESLintPlugin() : () => {},
    ],
};

/* compression-webpack-plugin: Ayuda a comprimir los archivos para que tengan el peso adecuado para producción.
terser-webpack-plugin: Minifica los archivos JS.
webpack-manifest-plugin: Crea un manifest.
Vendorfiles: Abstrae la lógica de los archivos que se están importando. */
