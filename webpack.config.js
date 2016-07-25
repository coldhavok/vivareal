var webpack     = require('webpack');
var browserSync = require('browser-sync-webpack-plugin');
var path        = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'web/static');
var APP_DIR   = path.resolve(__dirname, 'src');

var config = {
  
  entry: APP_DIR + '/js/main.js',
  
  output: {
    path        : BUILD_DIR,
    publicPath  : '/static',
    filename    : 'bundle.js'
  },
  
  module: {
    loaders: [
      {
        test    : /\.js$/,
        exclude : /node_modules/,
        include : APP_DIR,
        loader  : 'babel'
      },
      {
        test    : /(\.css|\.s?[ac]ss)$/,
        exclude : /node_modules/,
        include : APP_DIR,
        loaders : ['style', 'css', 'sass']
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'file?name=/fonts/[name].[ext]'
      }
    ]
  },
  
  resolve: {
        modulesDirectories: ["node_modules", "sprite-generated"]
  },

  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: { warnings: false },
    //   output: { comments: false }
    // }),
    new browserSync({
      server: { baseDir: BUILD_DIR + '/..' }
    })
  ]
}

module.exports = config;