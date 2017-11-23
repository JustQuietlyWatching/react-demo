const path = require('path');
module.exports = {
    entry: './app/ReactApp.jsx',

    output: {
        filename: 'bundle.js',
        path: path.join(__dirname,'disk'),
        publicPath: '/assert'
    },

    module: {
        rules:[
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    //
                    options: {
                        "presets": ['react','es2015']
                    }
                }
            }
        ]
    },
    // 路由生效
    devServer: {
        historyApiFallback: true,
    },
    devtool: "source-map"
}