const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    // устанавливаем мод
    mode: 'development',
    /**
     * 1. устанавливаем точку входа через path.resolve
     * __dirname означает папку, где мы находимся в данный момент
     * src это папка в которой находится файл
     * main.js это js файл, который ознает вход в проект
     */
    entry: path.resolve(__dirname, 'src', 'main.js'),
    // точка выхода
    output: {
        // название файла, который мы получил после сборки проекта
        filename: 'main.bundle.js',
        path: __dirname + '/build',
    },
    // для отладки подключил source-map
    devtool: "source-map",
    module: {
        rules: [
            {   // найдем файлы scss или sass
                test: /\.s[ca]ss$/,
                /**
                 * Выполнится справа на лево:
                 * 1.sass-loader переведет scss в css
                 * 2.css-loader разберет импорты, url
                 * 3.MiniCssExtractPlugin вместо вставки в index.html всех стилей , подключит css 
                 */
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.mp3$/,
                use: ['file-loader']
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html')
        }),
        new MiniCssExtractPlugin({
            filename: 'main.bundel.css'
        })
    ]
}