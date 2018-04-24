class Util {
  constructor () {
    if (!Util.instance) {
      Util.instance = this
      this.lisCode = this.randomString()
    }

    return Util.instance
  }

  randomString () {
    return Math.random().toString(36).substring(2)
  }
}

export default Util
