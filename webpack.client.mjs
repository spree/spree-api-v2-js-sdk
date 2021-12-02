import { resolve, dirname } from 'path'
import webpackMerge from 'webpack-merge'
import { fileURLToPath } from 'url'
import webpack from 'webpack'
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
  output: {
    path: clientDistDirectoryPath
  },
  plugins: [
    new webpack.DefinePlugin({
      RUNTIME_TYPE: "'browser'"
    })
  ]
}

const typeScriptConfigFilePath = resolve(baseDirectoryPath, 'tsconfig-client.json')

export default merge(commonConfigMaker({ typeScriptConfigFilePath }), config)
