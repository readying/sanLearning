const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    mode: 'production',
    entry: './src/sanHello.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
};