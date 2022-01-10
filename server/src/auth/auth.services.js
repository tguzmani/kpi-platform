const adminsRepository = require('../admins/admins.repository')
const adminsRedisRepository = require('../admins/admins.redis.repository')
const AuthException = require('./auth.exception')

async function isAdminIsLoggedIn(adminId) {
  return await adminsRedisRepository.getAdminById(adminId)
}

async function signIn(name, password) {
  const admin = await adminsRepository.readByName(name)

  if (!admin) throw new AuthException('El usuario no existe')

  if (password !== admin.password)
    throw new AuthException('Contraseña no válida')

  if ((await isAdminIsLoggedIn(admin.id)) === admin.id) {
    throw new AuthException('Ya existe un usuario en el sistema')
  }

  adminsRedisRepository.addAdminId(admin.id)

  return admin.id
}

async function signOut(adminId) {
  await adminsRedisRepository.removeAdminId(adminId)
}

module.exports = { signIn, signOut, isAdminIsLoggedIn }
