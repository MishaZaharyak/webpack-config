const merge = require('webpack-merge');
const baseWebpackConf = require('./webpack.base.config');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const prodWebpackConf = merge(baseWebpackConf, {
    mode: 'production',
    optimization: {
        minimizer: [new UglifyJsPlugin({
            exclude: /\/node_modules/,
            uglifyOptions: {
                output: {
                    comments: false,
                },
            },
        })],
    },
})

module.exports = new Promise((resolve, reject) => resolve(prodWebpackConf))
