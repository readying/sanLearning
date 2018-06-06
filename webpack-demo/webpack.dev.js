const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/sanHello.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'distDev')
    }
};