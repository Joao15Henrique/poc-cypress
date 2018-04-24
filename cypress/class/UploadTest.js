class UploadTest {
  constructor () {
    if (!UploadTest.instance) {
      this._lisCode = UploadTest.randomString()
      UploadTest.instance = this
    }

    return UploadTest.instance
  }

  static randomString () {
    return Math.random().toString(36).substring(2)
  }
}

export default UploadTest
