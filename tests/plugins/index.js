const logToOutput = require('cypress-log-to-output')

module.exports = (on, _config) => {
  logToOutput.install(on)
}
