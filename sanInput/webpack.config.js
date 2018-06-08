const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
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