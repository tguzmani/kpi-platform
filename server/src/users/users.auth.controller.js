const usersAuthServices = require('./users.auth.services')
const usersServices = require('./users.services')
const signToken = require('./../common/signToken')
const roles = require('./../constants/roles')

async function signIn(req, res) {
  const { name, password } = req.body

  try {
    const userId = await usersAuthServices.signIn(name, password)
    const user = await usersServices.readProfile(userId)

    const token = signToken({ id: userId, role: roles.USER })

    res.cookie('t', token)
    res.send(user)
  } catch (error) {
    return res.status(400).send(error.message)
  }
}

async function signOut(req, res) {
  await usersAuthServices.signOut(req.userId)

  res.clearCookie('t')
  res.send({ message: 'Sesión finalizada de forma exitosa' })
}

module.exports = {
  signIn,
  signOut,
}
