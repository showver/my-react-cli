const webpackMerge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.config");
const utils = require("./utils");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = webpackMerge(baseWebpackConfig, {
 
    mode:'production',
    devtool: 'none',

    // 公共块提取，有效值为all，async和initial。
    optimization: {
        splitChunks: {
          chunks: 'all'
        }
    },  

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: utils.resolve('../dist/index.html'),
            template: utils.resolve('../public/index.html')
        }),
        new OptimizeCssAssetsPlugin()
    ],

    

});