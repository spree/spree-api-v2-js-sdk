const wp = require('@cypress/webpack-preprocessor')

module.exports = (on) => {
  const options = {
    webpackOptions: require('../webpack.config')
  }

  on('file:preprocessor', wp(options))

  // Source: https://github.com/cypress-io/cypress/issues/3199
  on('task', { log(message) { console.log(message); return null } })
}