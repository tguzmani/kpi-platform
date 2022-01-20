const jwt = require('jsonwebtoken')
const adminsAuthServices = require('../admins/admins.auth.services')
const roles = require('./../constants/roles')

async function isAdmin(req, res, next) {
  const token = req.cookies.t

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    const isAdmin = decoded.role === roles.ADMIN

    const isAdminIsLoggedIn =
      (await adminsAuthServices.isAdminLoggedIn(decoded.id)) === decoded.id

    if (!isAdminIsLoggedIn || !isAdmin) {
      return res.status(401).json({ message: 'No autorizado' })
    }
  } catch (error) {
    return res
      .status(401)
      .json({ message: 'No autorizado', error: error.message })
  }

  next()
}

module.exports = isAdmin