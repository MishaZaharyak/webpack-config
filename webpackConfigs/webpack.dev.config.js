const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConf = require('./webpack.base.config');

const devWebpackConf = merge(baseWebpackConf, {
    mode: 'development',
    devServer: {
        contentBase: baseWebpackConf.externals.paths.dist + '/templates',
        port: 8081,
        overlay: {
            warnings: false,
            errors: true
        }
    },
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: "[file].map"
        })
    ]
})

module.exports = new Promise((resolve, reject) => resolve(devWebpackConf))
