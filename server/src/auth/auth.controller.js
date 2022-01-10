const jwt = require('jsonwebtoken')
const authServices = require('./auth.services')

async function signIn(req, res) {
  const { name, password } = req.body

  try {
    const userId = await authServices.signIn(name, password)

    const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    })

    res.cookie('t', token)

    res.send({ message: 'Inicio de sesión exitoso' })
  } catch (error) {
    return res.status(400).send(error)
  }
}

async function signOut(req, res) {
  res.clearCookie('t')

  await authServices.signOut(req.userId)

  res.send({ message: 'Sesión finalizada de forma exitosa' })
}

module.exports = {
  signIn,
  signOut,
}
