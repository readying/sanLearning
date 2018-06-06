const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './',
        hot: true,
        inline: true
    },
    entry: './src/sanHello.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'distDev')
    },

    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.LoaderOptionsPlugin({
            debug: true
        })
    ]
};