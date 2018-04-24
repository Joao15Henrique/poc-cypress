class UploadRegister {
  constructor () {
    if (!UploadRegister.instance) {
      this._lisCode = UploadRegister.randomString()
      UploadRegister.instance = this
    }

    return UploadRegister.instance
  }

  static randomString () {
    return Math.random().toString(36).substring(2)
  }
}

export default UploadRegister
