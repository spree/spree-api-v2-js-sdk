import del from 'del'

class DeleteBeforeRun {
  constructor(path) {
    this.path = path
  }
  apply(compiler) {
    compiler.hooks.beforeRun.tapPromise('Clear path', () => {
      console.log(`Removing ${this.path}`)

      return del([this.path])
    })
  }
}

export default DeleteBeforeRun
