import webpack from 'webpack'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import nodeExternals from 'webpack-node-externals'
import ProgressBar from './webpack-plugins/ProgressBar.mjs'
import DeleteBeforeRun from './webpack-plugins/DeleteBeforeRun.mjs'

// Redefining __dirname is a temporary solution, due to https://github.com/nodejs/help/issues/2907
const __dirname = dirname(fileURLToPath(import.meta.url))
const baseDirectoryPath = __dirname
const srcDirectoryPath = resolve(baseDirectoryPath, 'src')
const { WatchIgnorePlugin } = webpack

export default ({ typeScriptConfigFilePath }) => ({
  context: baseDirectoryPath,
  plugins: [
    new ProgressBar(),
    new DeleteBeforeRun(resolve(baseDirectoryPath, 'types')),
    new WatchIgnorePlugin({ paths: [resolve(baseDirectoryPath, 'types')] })
  ],
  entry: {
    index: {
      import: resolve(srcDirectoryPath, 'index.ts'),
      library: {
        name: 'SpreeSDK',
        type: 'umd'
      }
    },
    createFetchFetcher: {
      import: resolve(srcDirectoryPath, 'fetchers/createFetchFetcher.ts'),
      library: {
        name: ['SpreeSDK', 'createFetchFetcher'],
        type: 'umd'
      }
    },
    createAxiosFetcher: {
      import: resolve(srcDirectoryPath, 'fetchers/createAxiosFetcher.ts'),
      library: {
        name: ['SpreeSDK', 'createAxiosFetcher'],
        type: 'umd'
      }
    }
  },
  output: {
    filename: '[name].js'
  },
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        include: srcDirectoryPath,
        options: {
          configFile: typeScriptConfigFilePath,
          onlyCompileBundledFiles: true
        }
      },
      {
        test: /\.js$/,
        loader: 'source-map-loader',
        include: /node_modules/,
        enforce: 'pre'
      }
    ]
  },
  resolveLoader: {
    modules: [srcDirectoryPath, 'node_modules']
  },
  resolve: {
    symlinks: false,
    extensions: ['.tsx', '.ts', '.js']
  },
  externals: [nodeExternals({ modulesFromFile: true })]
})
