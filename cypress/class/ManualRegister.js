class ManualRegister {
  constructor () {
    if (!ManualRegister.instance) {
      this.lisCode = ManualRegister.randomString()
      ManualRegister.instance = this
    }

    return ManualRegister.instance
  }

  static randomString () {
    return Math.random().toString(36).substring(2)
  }
}

export default ManualRegister
