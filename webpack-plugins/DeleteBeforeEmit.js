const del = require('del')

class ClearBeforeEmit {
  constructor(path) {
    this.path = path
  }
  apply(compiler) {
    compiler.hooks.emit.tapPromise('Clear Types Plugin', () => {
      console.log(`Removing ${this.path}`)
      return del([this.path])
    })
  }
}

module.exports = ClearBeforeEmit

