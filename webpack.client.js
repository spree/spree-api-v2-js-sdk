const { resolve } = require('path')
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')
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

module.exports = merge(commonConfig, config)
