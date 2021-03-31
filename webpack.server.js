const { resolve } = require('path')
const { merge } = require('webpack-merge')
const commonConfigMaker = require('./webpack.common.maker')
const baseDirectoryPath = __dirname
const distDirectoryPath = resolve(baseDirectoryPath, 'dist')
const serverDistDirectoryPath = resolve(distDirectoryPath, 'server')
const nodeExternals = require('webpack-node-externals')

const config = {
  name: 'server',
  externals: [
    nodeExternals({
      allowlist: [/^@babel\/runtime/, /^regenerator-runtime/]
    })
  ],
  target: 'node14',
  output: {
    path: serverDistDirectoryPath
  }
}

const typeScriptConfigFilePath = resolve(baseDirectoryPath, 'tsconfig-server.json')

module.exports = merge(commonConfigMaker({ typeScriptConfigFilePath }), config)
