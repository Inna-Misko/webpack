const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
    path: path.resolve(__dirname, 'bundle'),
    filename: 'bundle.js'
    },
    devServer: {
    compress: true,
    port: 9000
  },
    module: {
        rules: [
            {
             test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
            },
            {
        test: /\.scss$/,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', "sass-loader"],
      },
    ]
    },
    plugins: [new MiniCssExtractPlugin({ filename: 'style.css' }),
        new HtmlWebpackPlugin({
            filename: 'main.html',
            template: './src/index.html'
        })
    ],
}