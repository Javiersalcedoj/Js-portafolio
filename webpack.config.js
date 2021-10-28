const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin =  require('mini-css-extract-plugin');
//agregamos el plugin
const CopyPlugin = require ('copy-webpack-plugin')


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        //agg esto, le desimos hacia donde lo vamos a mover , hacemos que use hash una extencion y el query
        assetModuleFilename: 'assets/images/[hash][ext][query]'
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.s?css$/i,
                use: [ MiniCssExtractPlugin.loader,
                    'css-loader', 
                    'sass-loader',
                ],
            },
            {
                test:/\.png/,
                type: 'asset/resource'
            },
            //nueva regla para trabjar con font
            {
                //colocamos la estrucura para qu coje las font
                test: /\.(woff|woff2)$/,
                //agg esta configuracion 
                use: {
                    //agg el loder
                    loader: 'url-loader',
                    //agg unas configuracioens que necesitamos para poder decir dnde estan los archivos
                    options: {
                        //establecemos un limit de tamaño
                        limit: 10000,
                        //el tipo de datos que estamos usando
                        mimetype: "application/font-woff",
                        //el nombre que le queremos poner, colocamos esto para que respete el que ya tiene y la extencion
                        name: "[name].[ext]",
                        //hacia donde vamos a enviar las font
                        outputPath: "./assets/fonts/",
                        //donde estan las font en src
                        publicPath: "./assets/fonts/",
                        //configuracion de esmodule que es false que no lo usamos
                        esModule: false,
                    },
                },
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin(),
        //Instanciamos el plugin y le agg la configuracion
        new CopyPlugin({
            //que elemetos vamos a pasar
            patterns: [
                {
                    //lugar donde estan los archivos
                    from: path.resolve(__dirname, 'src', 'assets/images'),
                    //hacia donde
                    to: 'assets/images'
                }
            ]
        })
    ]
}

