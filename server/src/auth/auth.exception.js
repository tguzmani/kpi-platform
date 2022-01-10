function AuthException(message, description = undefined) {
  this.message = message
  this.description = description
  this.name = 'AuthException'
}

module.exports = AuthException
