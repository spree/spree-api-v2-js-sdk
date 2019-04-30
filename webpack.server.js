const { resolve } = require('path')
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')
const baseDirectoryPath = __dirname
const distDirectoryPath = resolve(baseDirectoryPath, 'dist')
const serverDistDirectoryPath = resolve(distDirectoryPath, 'server')
const nodeExternals = require('webpack-node-externals')

const config = {
  name: 'server',
  externals: [
    nodeExternals()
  ],
  target: 'node',
  output: {
    path: serverDistDirectoryPath
  }
}

module.exports = merge.strategy({ entry: 'prepend' })(commonConfig, config)
