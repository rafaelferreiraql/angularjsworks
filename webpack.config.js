const path = require('path');
const Extract = require('extract-text-webpack-plugin');

const cssExtract = new Extract("styles.css");

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
        ]
    },
    plugins: [ cssExtract ]
}
