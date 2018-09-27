const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const webpack = require('webpack'); // 用于访问内置插件

module.exports = {
    // entry:{
    //     app:'./src/script/index.js',
    //     search:'./src/script/demo.js',
    //     a:'./src/script/a.js',
    //     b:'./src/script/b.js',
    //     c:'./src/script/c.js',
    // },
    // output: {
    //     path: __dirname + '/dist',
    //     filename: 'js/[name].js'
    //   },
    // //   多文件入口
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         filename:'a-index.html',
    //         template: './index.html',
    //         inject:'head',
    //         chunks:['app','a']
    //     }),
    //     new HtmlWebpackPlugin({
    //         filename:'b-index.html',
    //         template: './index.html',
    //         inject:'head',
    //         chunks:['app','b']
    //     }),
    //     new HtmlWebpackPlugin({
    //         filename:'c-index.html',
    //         template: './index.html',
    //         inject:'head',
    //         chunks:['app','c']
    //     })
    //   ]

    entry: './src/app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'js/[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders:1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [ 
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders:1
                        }
                    },
                    {loader: 'postcss-loader'},
                    {loader: "less-loader"}
                ]
            },
            {
                test: /\.scss$/,
                use: [ 
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders:1
                        }
                    },
                    {loader: 'postcss-loader'},
                    {loader: "sass-loader"}
                ]
            },
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                include:path.resolve(__dirname, 'src'),
                loader: "babel-loader"
            }
        ]
    },
    //   多文件入口
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            inject: 'head',
        })
    ]
}