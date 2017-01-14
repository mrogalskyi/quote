var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry: {
        polyfills: './src/polyfills.ts',
        app: './src/main.ts',
        vendor: './src/vendor.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[chunkhash].[name].js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: [{
                loader: 'awesome-typescript-loader'
            }],
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new CleanWebpackPlugin(['dist', 'build'], {
            root: __dirname,
            verbose: true,
            dry: false,
            exclude: ['shared.js']
        })
    ]
};