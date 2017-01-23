var webpack = require('webpack')
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin
var path = require('path')

var libraryName = 'base'

var plugins = [
  new webpack.LoaderOptionsPlugin({
    options: {
      context: __dirname
    }
  })
]

module.exports = function(env) {

  var entry = __dirname + '/src/index.js'
  var outputPath = __dirname + '/lib'
  var outputFile = libraryName + '.js'

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


  if (env.mode == 'demo') {
    entry = __dirname + '/demo/demo.js'
    outputPath = __dirname + '/demo'
    outputFile = 'demo.bundle.js'
  }

  var config = {
    entry: entry,
    devtool: 'source-map',
    output: {
      path: outputPath,
      filename: outputFile
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
        path.join(__dirname, 'node_modules')
      ],
      extensions: ['.js']
    },
    plugins: plugins
  }

  if (env.mode != 'demo') {
    config.output.library = libraryName
    config.output.libraryTarget = 'umd'
    config.output.umdNamedDefine = true
  }

  return config
}
