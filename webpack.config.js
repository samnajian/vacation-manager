const path    = require('path');
const webpack = require('webpack');

module.exports = {
    mode:      process.env.ENV || 'development',
    devServer: {
        inline:             true,
        contentBase:        './src',
        port:               3000,
        historyApiFallback: true,
    },
    devtool:   'cheap-module-eval-source-map',
    entry:     './dev/js/index.tsx',
    resolve:   {
        extensions: ['.ts', '.tsx', '.js'] // <-- Had to add the .js one
    },
    module:    {
        rules: [
            {
                test:    /\.tsx?$/,
                loader:  "ts-loader",
                exclude: /node_modules/
            },
            {
                test:    /\.js$/,
                loader:  'babel-loader?cacheDirectory=true',
                query:   {
                    presets: ['stage-0', 'react', 'env'],
                    plugins: ['transform-object-rest-spread']
                },
                exclude: /node_modules/,
            },
            {
                test:   /\.scss|\.css/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    output:    {
        path:     path.resolve(__dirname, 'src'),
        filename: 'js/bundle.min.js'
    },
    plugins:   [
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
};
