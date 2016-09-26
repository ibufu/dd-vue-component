var webpack = require('webpack');
var path = require('path');

module.exports = {

    devtool: 'inline-source-map',

    entry: {
        'datepicker': './examples/datepicker/index.js'
    },

    output: {
        path: './examples/dist',
        filename: '[name].build.js'
    },
    
    resolve: {
        extensions: ['.js', '.vue']
    },
    
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue',
                include: [path.join(__dirname, 'src'), path.join(__dirname, 'node_modules/vux/src')]
            },
            {
                test: /\.js$/,
                loader: 'babel',
                include: [path.join(__dirname, 'src'), path.join(__dirname, 'node_modules/vux/src')]
            },
            { 
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            }
        ]
    },

    plugins: [

        new webpack.DefinePlugin({
            'process.env': {
                ENV: JSON.stringify('development'),
                NODE_ENV: JSON.stringify('development')
            }
        })
    ],

    devServer: {
        port: 3000,
        historyApiFallback: true,
        watchOptions: { aggregateTimeout: 300, poll: 1000 }
    }
};