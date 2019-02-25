module.exports = function(api) {
  const isTest = api.env('test')

  const envOptions = isTest
    ? { targets: { node: 'current' } }
    : { modules: false }
  const presets = [['@babel/preset-env', envOptions]]
  const plugins = [
    ['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }],
    '@babel/plugin-proposal-class-properties'
  ]

  return {
    presets,
    plugins
  }
}
