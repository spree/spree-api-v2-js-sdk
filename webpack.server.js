import { resolve, dirname } from 'path'
import { merge } from 'webpack-merge'
import { fileURLToPath } from 'url'
import commonConfigMaker from './webpack.common.maker.js'
import nodeExternals from 'webpack-node-externals'

// Redefining __dirname is a temporary solution, due to https://github.com/nodejs/help/issues/2907
const __dirname = dirname(fileURLToPath(import.meta.url))
const baseDirectoryPath = __dirname
const distDirectoryPath = resolve(baseDirectoryPath, 'dist')
const serverDistDirectoryPath = resolve(distDirectoryPath, 'server')

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

export default merge(commonConfigMaker({ typeScriptConfigFilePath }), config)
