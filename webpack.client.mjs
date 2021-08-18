import { resolve, dirname } from 'path'
import webpack from 'webpack'
import webpackMerge from 'webpack-merge'
import { fileURLToPath } from 'url'
import commonConfigMaker from './webpack.common.maker.mjs'

// Redefining __dirname is a temporary solution, due to https://github.com/nodejs/help/issues/2907
const __dirname = dirname(fileURLToPath(import.meta.url))
const baseDirectoryPath = __dirname
const distDirectoryPath = resolve(baseDirectoryPath, 'dist')
const clientDistDirectoryPath = resolve(distDirectoryPath, 'client')
const { merge } = webpackMerge

const config = {
  name: 'client',
  target: ['web', 'es6'],
  plugins: [
    new webpack.DefinePlugin({
      FETCH_TYPE: 'browser-native'
    })
  ],
  output: {
    library: 'SpreeSDK',
    path: clientDistDirectoryPath
  }
}

const typeScriptConfigFilePath = resolve(baseDirectoryPath, 'tsconfig-client.json')

export default merge(commonConfigMaker({ typeScriptConfigFilePath }), config)
