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

    if (!isAdminIsLoggedIn) {
      return res
        .status(401)
        .json({ message: 'Sesión vencida. Inicie sesión nuevamente' })
    }

    if (!isAdmin) {
      return res.status(401).json({ message: 'No autorizado' })
    }

    adminsAuthServices.refreshSession(decoded.id)
  } catch (error) {
    return res
      .status(401)
      .json({ message: 'No autorizado', error: error.message })
  }

  next()
}

module.exports = isAdmin
