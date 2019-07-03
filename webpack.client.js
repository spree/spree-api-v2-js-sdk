const { resolve } = require('path')
const merge = require('webpack-merge')
const commonConfigMaker = require('./webpack.common.maker')
const baseDirectoryPath = __dirname
const distDirectoryPath = resolve(baseDirectoryPath, 'dist')
const clientDistDirectoryPath = resolve(distDirectoryPath, 'client')

const config = {
  name: 'client',
  target: 'web',
  output: {
    library: 'SpreeSDK',
    path: clientDistDirectoryPath
  }
}

const merged = merge(
  commonConfigMaker({
    babelPresetEnvConfig: {
      targets: '> 0.25%, not dead'
    }
  }),
  config
)

module.exports = merged
