class Util {
  constructor (operator) {
    if (!Util.instance) {
      Util.instance = this
      this.lisCode = this.randomString()
      this.laboratoryOriginKey = operator.laboratoryOriginKey
      this.batchCodeMatch = operator.batchCodeMatch
    }
    return Util.instance
  }

  randomString () {
    return Math.random().toString(36).substring(2)
  }
}

export default Util
