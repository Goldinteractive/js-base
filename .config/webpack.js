const path = require('path')

const root = path.join(__dirname, '..')

const LIBRARY_NAME = 'base'

module.exports = function(env = {}) {
  var entry = path.join(root, process.env.SOURCE_PATH, 'index.js')
  var outputPath = path.join(root, process.env.LIBRARY_PATH)
  var outputFile = LIBRARY_NAME + '.js'

  env.mode = env.mode || 'development'

  if (env.mode == 'production') {
    outputFile = LIBRARY_NAME + '.min.js'
  }

  var config = {
    mode: env.mode,
    entry: entry,
    output: {
      path: outputPath,
      filename: outputFile,
      library: LIBRARY_NAME,
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
      modules: [path.join(root, 'src'), path.join(root, 'node_modules')],
      extensions: ['.js']
    }
  }

  return config
}
