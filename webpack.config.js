const webpack = require('webpack');
const path = require('path');

const config = {
    entry: './src/app/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/dist/"
    },
    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader' },
            { test: /\.pug$/, use: 'pug-html-loader' }
        ]
    },
    plugins: []
};

module.exports = config;
