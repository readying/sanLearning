const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    //devtool debug
    devtool: 'eval-source-map',
    // devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        compress: true,
        port: 9000
    },
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin('dist'),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            minify: {
                collapseWhitespace: false
            },
            hash: true
        })
    ],
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.san$/,
                loader: 'san-loader'
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            }

        ]
    },
    resolve: {
        alias: {
            san: process.env.NODE_ENV = 'production' ?
                'san/dist/san.js' : 'san/dist/san.dev.js',
        }
    }
}