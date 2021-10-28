const path = require('path');
//primero agg el recurso de html
const HtmlWebpackPlugin = require('html-webpack-plugin');


//creamos un modulo que se exporta que tiene la configuracion deseada
module.exports = {
    //aqui es donde se añaden las configuraciones
    //entry: colocamos el punto de entrada
    entry: './src/index.js',
    //output: donde se envia lo que prepara webpack
    output: {
        //aqui van los elemetos internos
        //path.resolve nos dice donde se encuentra nuestra carpeta en el pc, el ditname es la ubicacion de la carpeta y despues colocas como quieres que se llame donde se guarde
        path: path.resolve(__dirname, 'dist'),
        //filename es el nombre que recibira el archivo resultante
        filename: 'main.js',
    },
    //colocamos las extenciones que queremos que trabje webpack
    resolve: {
        //colocas las extenciones que tiene que identificar webpack para leer el proyecto
        extensions: ['.js']
    },
    //module: que es donde se agg esta nueva configuracion 
    module: {
        //rules son las reglas que vamos a establcer
        rules: [
            {
                //test nos permiten saber que tipo de extenciones vamos a usar 
                // /\ significa cualquier archivo que conmiece con m (de module mjs) o .js,   $/ terminas la expresion regular
                test: /\.m?js$/,
                //escluimos a todo lo de node module
                exclude: /node_modules/,
                //use le pasamos el loader(es como el coso que hace que webpack lo entienda y lea) que vamos a utilar
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    //anadimos la sepcion de plugins
    plugins: [
        //anadimos los plugins que estamos usando
        //con new instanciamos lo que agg arriba e internamente le pasamos las cofiguracion que vamos a añadir de este plugin
        new HtmlWebpackPlugin({
            //para que haga la incercion de los elementos
            inject: true,
            //agg el template es dercir el html de entrada
            template: './public/index.html',
            //le decimos cual es el nombre resultado que vamos a tener
            filename: './index.html'
        })
    ]
}

