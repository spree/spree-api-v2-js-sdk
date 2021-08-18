import { resolve, dirname } from 'path'
import webpack from 'webpack'
import webpackMerge from 'webpack-merge'
import { fileURLToPath } from 'url'
import commonConfigMaker from './webpack.common.maker.mjs'
import nodeExternals from 'webpack-node-externals'

// Redefining __dirname is a temporary solution, due to https://github.com/nodejs/help/issues/2907
const __dirname = dirname(fileURLToPath(import.meta.url))
const baseDirectoryPath = __dirname
const distDirectoryPath = resolve(baseDirectoryPath, 'dist')
const serverDistDirectoryPath = resolve(distDirectoryPath, 'server')
const { merge } = webpackMerge

const config = {
  name: 'server',
  externals: [nodeExternals({ modulesFromFile: true })],
  target: 'node14',
  plugins: [
    new webpack.DefinePlugin({
      FETCH_TYPE: 'node-fetch'
    })
  ],
  output: {
    path: serverDistDirectoryPath
  }
}

const typeScriptConfigFilePath = resolve(baseDirectoryPath, 'tsconfig-server.json')

export default merge(commonConfigMaker({ typeScriptConfigFilePath }), config)
