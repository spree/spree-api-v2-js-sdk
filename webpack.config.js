const { resolve } = require('path')
const baseDirectoryPath = __dirname
const srcDirectoryPath = resolve(baseDirectoryPath, 'src')
const distDirectoryPath = resolve(baseDirectoryPath, 'dist')
const nodeExternals = require('webpack-node-externals')
const ProgressBar = require('./webpack-plugins/ProgressBar')

module.exports = {
  context: baseDirectoryPath,
  plugins: [
    new ProgressBar()
  ],
  externals: [
    nodeExternals()
  ],
  entry: {
    index: [
      resolve(baseDirectoryPath, 'load-sourcemaps.js'),
      resolve(srcDirectoryPath, 'index.ts')
    ]
  },
  target: 'node',
  output: {
    path: distDirectoryPath,
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(tsx?|js)$/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: false
            }
          }
        ],
        include: baseDirectoryPath,
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        use: [
          'source-map-loader'
        ],
        include: /node_modules/,
        enforce: 'pre'
      }
    ]
  },
  resolveLoader: {
    modules: [
      srcDirectoryPath,
      'node_modules'
    ]
  },
  resolve: {
    symlinks: false,
    extensions: ['.tsx', '.ts', '.js']
  }
}
