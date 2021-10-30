const HtmlWebPackPlugin    = require('html-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');
 
module.exports = {
    
    mode: 'development',

    output:{
        clean: true
    },

    module: {
        
        rules:[

            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false,
                },
            },


            {
                test: /\.css$/,
                exclude: /styles.css$/,
                use: [ 'style-loader', 'css-loader']
            },
            {
                test: /styles.css$/,
                use: [ MiniCssExtract.loader, 'css-loader' ]
            },

            
                
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            title: 'Mi WebPack APP',
            template: './src/index.html',
           // filename: './index.html'
        }),
        new MiniCssExtract({
            filename: '[name].css',
            ignoreOrder: false
        }),
 
    ],
    
 
}