const webpack = require('webpack'),
  path = require('path'),
  IS_DEBUG = process.env.DEBUG && process.env.DEBUG != 'false',
  IS_WATCH = process.env.WATCH && process.env.WATCH != 'false',
  BASE = path.join(__dirname, '..', process.env.BASE)

module.exports = {
  entry: path.join(BASE, process.env.IN),
  target: 'web',
  cache: true,
  bail: !IS_WATCH, // exit the build process in case of errors
  output: {
    path: BASE,
    filename: process.env.OUT,
    sourceMapFilename: `${process.env.OUT}.map`
  },
  devtool: IS_DEBUG ? '#source-map' : false,
  watch: IS_WATCH,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower)/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      base: BASE +'/../src/index'
    })
  ]
}

