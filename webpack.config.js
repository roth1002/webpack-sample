var path = require('path');
var webpack = require('webpack');

var config = {
    entry: [
            'webpack-dev-server/client?http://localhost:5000',
            'webpack/hot/only-dev-server',
            path.resolve(__dirname, 'app/main.js')
    ],

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },

    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['react-hot', 'babel'],
            include: path.join(__dirname, 'app')
        }]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        //new webpack.NoErrorsPlugin()
    ]
};

module.exports = config;