const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');



module.exports = {

    entry: './src/js/index.js',

    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js',
    },

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3030,
        writeToDisk: true,
        stats: 'errors-only',
        open: true,
    },

    module: {
        rules: [
            {
                test: /\.(sass|css|scss)$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                        }
                    },
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: "images",
                        },
                    },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: "fonts",
                        },
                    },
                ],
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: require.resolve("jquery"),
                loader: "expose-loader",
                options: {
                    exposes: ["$", "jQuery"],
                },
            },
        ],
    },


    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),

        new MiniCssExtractPlugin({ filename: 'css/style.css', }),
    ],
};