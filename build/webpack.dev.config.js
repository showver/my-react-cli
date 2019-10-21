const webpackMerge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.config");
const utils = require("./utils");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = webpackMerge(baseWebpackConfig, {
 
    mode:'development',
    devtool: 'inline-source-map',

    plugins: [
        new HtmlWebpackPlugin({
            filename: utils.resolve('../dist/index.html'),
            template: utils.resolve('../public/index.html')
        }),
        new MiniCssExtractPlugin({ // 压缩css
            filename: "[name].[contenthash].css",
            chunkFilename: "[id].[contenthash].css"
        })
    ],


    // webpack-dev-server
    devServer: {
        // contentBase: utils.resolve('../dist'), 
        compress: true,  // gzip压缩
        host: 'localhost', // 允许ip访问
        hot:true, // 热更新
        historyApiFallback:true, // 解决启动后刷新404
        proxy: { // 配置服务代理
            '/api': {
                 target: 'http://localhost:8000',
                 pathRewrite: {'^/api' : ''},  //可转换
                 changeOrigin:true
            }
        },
        port: 8000 // 端口
    },

});