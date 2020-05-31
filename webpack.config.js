const path = require('path');

module.exports = {
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js'
    },
    module:{
        rules:[{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'

        },{
                test: /\.css$/i,
                loader: [{
                   loader: 'style-loader'
                },{
                   loader: 'css-loader',
                   options:{
                       modules:true
                   }
                }]
    
            },{
                test:/\.(png|jpg|gif)$/,
                use : [
                    'file-loader'
                ]
            }]
    },
    devServer: {
        contentBase: path.resolve('public'),
        host: '0.0.0.0',
        port: 9999,
        inline: true,
        liveReload: true,
        hot: false,
        compress: true,
        historyApiFallback: true
    }      
}