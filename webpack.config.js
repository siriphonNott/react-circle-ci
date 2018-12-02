const webpack = require('webpack');
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.css$/,
                exclude: /(node_modules)/,
                use: [
                { loader: 'style-loader' },
                { loader: 'css-loader' },
                ],
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules)/,
                use: [
                  { loader: 'style-loader' },
                  { loader: 'css-loader' },
                  { loader: 'sass-loader' },
                ],
            },
            {
                test: /\.(jpg|png|ico|svg|eot|woff|woff2|ttf)$/,
                exclude: /(node_modules)/,
                use: [
                  { loader: 'file-loader' },
                ],
              },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            favicon: 'src/favicon.ico',
            template: 'src/index.html',
        }),
        new webpack.ProvidePlugin({
            $: "jquery",  
            jQuery: "jquery" 
        })
         
      ],
  }