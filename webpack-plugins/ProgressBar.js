const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const chalk = require('chalk')

module.exports = function ProgressBar() {
  return new ProgressBarPlugin({
    format: `Building [:bar] ${chalk.green.bold(':percent')} (:elapsed seconds)`,
    clear: false
  })
}
