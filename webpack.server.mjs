import { resolve, dirname } from 'path'
import webpackMerge from 'webpack-merge'
import { fileURLToPath } from 'url'
import webpack from 'webpack'
import commonConfigMaker from './webpack.common.maker.mjs'

// Redefining __dirname is a temporary solution, due to https://github.com/nodejs/help/issues/2907
const __dirname = dirname(fileURLToPath(import.meta.url))
const baseDirectoryPath = __dirname
const distDirectoryPath = resolve(baseDirectoryPath, 'dist')
const serverDistDirectoryPath = resolve(distDirectoryPath, 'server')
const { merge } = webpackMerge

const config = {
  name: 'server',
  target: 'node14',
  output: {
    path: serverDistDirectoryPath
  },
  plugins: [
    new webpack.DefinePlugin({
      RUNTIME_TYPE: "'node'"
    })
  ]
}

const typeScriptConfigFilePath = resolve(baseDirectoryPath, 'tsconfig-server.json')

export default merge(commonConfigMaker({ typeScriptConfigFilePath }), config)
