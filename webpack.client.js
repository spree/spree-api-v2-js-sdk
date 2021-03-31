const { resolve } = require('path')
const { merge } = require('webpack-merge')
const commonConfigMaker = require('./webpack.common.maker')
const baseDirectoryPath = __dirname
const distDirectoryPath = resolve(baseDirectoryPath, 'dist')
const clientDistDirectoryPath = resolve(distDirectoryPath, 'client')

const config = {
  name: 'client',
  target: ['web', 'es6'],
  output: {
    library: 'SpreeSDK',
    path: clientDistDirectoryPath
  }
}

const typeScriptConfigFilePath = resolve(baseDirectoryPath, 'tsconfig-client.json')

module.exports = merge(commonConfigMaker({ typeScriptConfigFilePath }), config)
