/**
 * Created by an_wch on 2017/9/25.
 */
const path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: path.join(__dirname, '../app/main.js'),
    output: {
        path: path.join(__dirname, '../builder'),
        filename: "build.js",
    },

    devServer: {
        contentBase: "../",
        historyApiFallback: true,
        inline: true,
    }
}