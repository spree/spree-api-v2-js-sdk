// Source: https://github.com/cypress-io/cypress-example-recipes/blob/master/examples/preprocessors__typescript-webpack/webpack.config.js

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ]
      }
    ]
  }
}
