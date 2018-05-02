class Util {
  constructor (operator) {
    if (!Util.instance) {
      Util.instance = this
      Util.instance.laboratoryOriginKey = operator.laboratoryOriginKey
      Util.instance.batchCodeMatch = operator.batchCodeMatch
    }
    return Util.instance
  }

  static randomString () {
    return Math.random().toString(36).substring(2)
  }
}

export default Util
