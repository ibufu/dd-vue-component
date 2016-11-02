/**
 * Created by lingchenxuan on 16-11-1.
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        'app': './src/index.js',
    },

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].js',
    },

    resolve: {
        extensions: ['.js', '.vue']
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue',
            },

            {
                test: /\.js$/,
                loader: 'babel',
                include: [path.join(__dirname, 'src'), path.join(__dirname, 'node_modules/dd-vue-component')]
            },

            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass'],
                include: path.join(__dirname, 'src')
            },

            {
                test: /\.css$/,
                loaders: ['style', 'css']
            },

            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=10240'
            }
        ]
    },

    plugins: [

        new webpack.DefinePlugin({
            'process.env': {
                ENV: JSON.stringify('production'),
                NODE_ENV: JSON.stringify('production')
            }
        }),

    ]
};