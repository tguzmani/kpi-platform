const jwt = require('jsonwebtoken')
const authServices = require('./../auth/auth.services')

exports.auth = async (req, res, next) => {
  let token = req.cookies.t

  if (!token) {
    return res.status(401).json({
      message: 'No autorizado',
    })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.userId = decoded.id

    const isAdminIsLoggedIn =
      (await authServices.isAdminIsLoggedIn(decoded.id)) === decoded.id
    console.log('middleware/isAdminLoggedIn', isAdminIsLoggedIn)

    if (!isAdminIsLoggedIn) {
      return res.status(401).json({ message: 'No autorizado' })
    }
  } catch (error) {
    return res
      .status(401)
      .json({ message: 'No autorizado', error: error.message })
  }

  next()
}
