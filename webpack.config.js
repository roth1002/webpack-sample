var path = require('path');

var config = {
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'app/main.js')],

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },

    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel']
        }]
    }
};

module.exports = config;