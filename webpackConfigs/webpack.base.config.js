let path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CopyWebpackPlugin = require('copy-webpack-plugin'); 
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const CleanWebpackPlugin = require('clean-webpack-plugin'); 

const PATHS = {
    src: path.join(__dirname, '../src'),
    static: path.join(__dirname, '../src/static'),
    dist: path.join(__dirname, '../dist'),
    js: path.join(__dirname, '../src/static/js'),
    templates: path.join(__dirname, '../src/templates'),
    assets: 'assets',
}

let config = {
    externals: {
        paths: PATHS, // this variable can be access in other configs
    },
    entry: {
        scripts: `${PATHS.js}/index.js`,
        styles: `${PATHS.js}/styles.js`
    },
    output: {
        path: PATHS.dist,   
        filename: `${PATHS.assets}/js/[name].js`,
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/, 
                // exclude: '/node_modules/'
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {sourceMap: true}
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: {
                                path: `${PATHS.js}/postcss.config.js`
                            }
                        }
                    },
                  ]                
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {sourceMap: true}
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: {
                                path: `${PATHS.js}/postcss.config.js`
                            }
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {sourceMap: true}
                    }                      
                ]                
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    'file-loader?name=images/[name].[ext]',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                                optimizationLevel: 3,
                            },
                            // the webp option will enable WEBP
                            // webp: {
                            //     uality: 75
                            // }
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `${PATHS.assets}/css/[name].css`,
        }),
        // new CopyWebpackPlugin([
        //     { from: `${PATHS.static}/images`, to: `${PATHS.assets}/images` },
        // ]),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.templates}/index.html`,
            filename: 'templates/index.html',
        }),
        new CleanWebpackPlugin(['dist'])
    ],
    
};

module.exports = config;
