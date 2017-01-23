var webpack = require('webpack')
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin
var path = require('path')

var libraryName = 'base'
var outputFile = libraryName + '.js'

var plugins = [
  new webpack.LoaderOptionsPlugin({
    options: {
      context: __dirname
    }
  })
]

module.exports = function(env) {

  if (env.mode === 'build') {
    plugins.push(new UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: true,
        unused: false
      },
      minimize: true
    }))

    plugins.push(new webpack.LoaderOptionsPlugin({
      minimize: true
    }))

    outputFile = libraryName + '.min.js'
  }

  var config = {
    entry: __dirname + '/src/index.js',
    devtool: 'source-map',
    output: {
      path: __dirname + '/lib',
      filename: outputFile,
      library: libraryName,
      libraryTarget: 'umd',
      umdNamedDefine: true
    },
    module: {
      rules: [
        {
          test: /(\.js)$/,
          exclude: /(node_modules)/,
          loader: 'babel-loader'
        }
      ]
    },
    resolve: {
      modules: [
        path.join(__dirname, 'src'),
        'node_modules'
      ],
      extensions: ['.js']
    },
    plugins: plugins
  }

  return config
}
