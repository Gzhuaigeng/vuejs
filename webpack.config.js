var webpack = require("webpack");
var ET = require("extract-text-webpack-plugin");
module.exports = {
  entry: __dirname + '/src/entrys.js',

  output: {
    path: __dirname + '/prd/',
    // filename: '[name]-[hash].js'
    filename: 'bundle.js'
  },

  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader?presets[]=es2015'
      },
      {
        test: /\.scss$/,
        // loader: 'style!css!sass'
        loader: ET.extract('style','css!sass')
      },
      {
        test: /\.string$/,
        loader: 'string'
      }
    ]
  },
  devServer:{
    contentBase:__dirname +'/prd',
    port:80,
    host:'localhost',
    proxy:{
      '/api':{
        target:'http://localhost:4000',
        pathRewrite:{
          '^/api':''
        }
      }
    }
  },
  plugins:[
    // new webpack.optimize.UglifyJsPlugin(),
    new ET('bundle.css')
  ]
}
