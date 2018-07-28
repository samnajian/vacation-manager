const path = require('path');
const webpack = require('webpack');

module.exports = {
    devServer: {
        inline:             true,
        contentBase:        './src',
        port:               3000,
        historyApiFallback: true
    },
    devtool:   'cheap-module-eval-source-map',
    entry:     './dev/js/index.js',
    module:    {
        loaders: [
            {
                test:    /\.js$/,
                loader:  'babel-loader',
                query:   {
                    presets: ['stage-0', 'react', 'env']
                },
                exclude: /node_modules/,
                plugins: ['transform-object-rest-spread']
            },
            {
                test:   /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    output:    {
        path:     'src',
        filename: 'js/bundle.min.js'
    },
    plugins:   [
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
};
