const path = require('path');
const Extract = require('extract-text-webpack-plugin');
const UglifyJS = require('uglifyjs-webpack-plugin');

const cssExtract = new Extract("styles.css");
const uglify = new UglifyJS();

module.exports = {
    entry: {
        app: "./script/wrapper.js",
        style: "./style/main.less",
    },
    output: {
        path: path.join(__dirname,"build"),
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: cssExtract.extract({
                    fallback: 'style-loader',
                    use: ['css-loader','postcss-loader','less-loader'],
                })
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
        ]
    },
    plugins: [ cssExtract, uglify ]
}
