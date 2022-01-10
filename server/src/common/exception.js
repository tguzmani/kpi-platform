class Exception extends Error {
  constructor(name, message, description = undefined, code = 400) {
    this.message = message
    this.description = description
    this.name = 'AuthException'
  }
}

module.exports = Exception
