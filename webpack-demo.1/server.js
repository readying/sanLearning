const express = require('express');
const webpack = require('webpack');
const webpackDevMiddle = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const complier = webpack(config);

app.use(webpackDevMiddle(complier, {
    publicPath: config.output.publicPath
}));

app.listen(3000, function() {
    console.log('Example app listening on port 3000!\n');
})