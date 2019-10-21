const utils = require("./utils")

module.exports = {
    /*入口*/
    entry: {
        app:[
            utils.resolve('../src/index.js')
        ],
        vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
    },

    /*输出到dist目录，输出文件名字为bundle.js*/
    output: {
        path: utils.resolve('../dist'),
        // publicPath: '/dist/',
        filename: 'js/[name].[hash:8].bundle.js'
    },

    // 配置别名
    resolve: {
        extensions: ['.js', '.json'], // 解析扩展。（当我们通过路导入文件，找不到改文件时，会尝试加入这些后缀继续寻找文件）
        alias: {
            pages: utils.resolve('../src/pages'),
            images: utils.resolve('../src/images'),
            components: utils.resolve('../src/components'),
            router: utils.resolve('../src/router'),
            actions: utils.resolve('../src/redux/actions'),
            reducers: utils.resolve('../src/redux/reducers')
        }
    },

    /*src目录下面的以.js结尾的文件，要使用babel解析*/
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: ['babel-loader?cacheDirectory=true'], // cacheDirectory是用来缓存编译结果，下次编译加速
            include: utils.resolve('../src'),
            exclude: /node_modules/,//屏蔽不需要处理的文件（文件夹）（可选）
        },{
            test: /\.css|less$/,
            use: ['style-loader', 'css-loader?modules', 'postcss-loader', 'less-loader']           
        },{
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000, // url-loader 包含file-loader，这里不用file-loader, 小于10000B的图片base64的方式引入，大于10000B的图片以路径的方式导入
                name: 'static/img/[name].[hash:7].[ext]'
            }
        },{
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000, // 小于10000B的图片base64的方式引入，大于10000B的图片以路径的方式导入
                name: 'static/fonts/[name].[hash:7].[ext]'
            }
        }]
    },
}

