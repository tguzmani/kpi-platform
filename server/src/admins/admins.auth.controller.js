const adminsAuthServices = require('./admins.auth.services')
const adminsServices = require('./admins.services')
const signToken = require('./../common/signToken')
const roles = require('./../constants/roles')

async function signIn(req, res) {
  const { name, password } = req.body

  try {
    const adminId = await adminsAuthServices.signIn(name, password)
    const admin = await adminsServices.readProfile(adminId)

    const token = signToken({ id: adminId, role: roles.ADMIN })

    res.cookie('t', token)
    res.cookie('r', roles.ADMIN)

    res.send(admin)
  } catch (error) {
    return res.status(400).send(error)
  }
}

async function signOut(req, res) {
  await adminsAuthServices.signOut(req.userId)

  res.clearCookie('t')

  res.send({ message: 'Sesión finalizada de forma exitosa' })
}

module.exports = {
  signIn,
  signOut,
}
