const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const extractSass = new ExtractTextPlugin(
    {
        filename: "shenbao-blog-app.css"
    }
);

module.exports = {
    entry: './src/shenbao-blog-app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'shenbao-blog-app.js'
    },

    devtool: "hidden-source-map",
    resolve: {
        extensions: [
            '.js',
            '.jsx',
            '.json',
            '.css',
            '.scss',
            '.png',
            '.jpg'
        ]
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: extractSass.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                minimize: true
                            }
                        }
                    ],
                    fallback: 'style-loader'
                })
            }, {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: true,
                                minimize: true
                            }
                        }, {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true
                            }
                        }
                    ],
                    fallback: "style-loader"
                })
            }, {
                test: /\.json$/,
                loader: 'json-loader'
            }, {
                test: /\.(png|svg|jpg|jpeg|gif|ico|webp)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash:10].[ext]',
                            limit: 10240
                        }
                    }
                ]
            }, {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash:10].[ext]',
                            limit: 10240
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        extractSass,
        new UglifyJsPlugin({
            sourceMap: true,
            uglifyOptions: {
                ie8: true,
            }
        })
    ]
};