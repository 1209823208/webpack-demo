const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const webpack = require('webpack'); // 用于访问内置插件

module.exports={
    entry:{
        app:'./src/script/index.js',
        search:'./src/script/demo.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: 'js/[name].js'
      },
    plugins: [
        new HtmlWebpackPlugin({
            filename:'index.html',
            template: './index.html',
            inject:'head'
        })
      ]
}