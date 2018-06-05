const path = require('path');

module.exports = {
    entry: './src/sanHello.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'devDist')
    },
    mode: 'development'
};