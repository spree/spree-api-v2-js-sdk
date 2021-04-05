import ProgressBarPlugin from 'progress-bar-webpack-plugin'
import chalk from 'chalk'

export default function ProgressBar() {
  return new ProgressBarPlugin({
    format: `Building [:bar] ${chalk.green.bold(':percent')} (:elapsed seconds)`,
    clear: false
  })
}
