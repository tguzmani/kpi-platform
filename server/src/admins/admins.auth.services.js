const adminsRepository = require('./admins.repository')
const adminsRedisRepository = require('./admins.redis.repository')
const AdminsException = require('./admins.exception')

async function isAdminLoggedIn(adminId) {
  return await adminsRedisRepository.getById(adminId)
}

async function signIn(name, password) {
  const admin = await adminsRepository.readByName(name)

  if (!admin) throw new AdminsException('El usuario no existe')

  if (password !== admin.password)
    throw new AdminsException('Contraseña no válida')

  if ((await isAdminLoggedIn(admin.id)) === admin.id) {
    throw new AdminsException(
      `El usuario ${admin.name} ya está utilizando el sistema, intente con otro usuario o bien contáctelo para que libere la sesión`
    )
  }

  adminsRedisRepository.addById(admin.id)

  return admin.id
}

async function signOut(adminId) {
  await adminsRedisRepository.removeById(adminId)
}

async function refreshSession(adminId) {
  await adminsRedisRepository.setExpirationById(adminId)
}

module.exports = { signIn, signOut, isAdminLoggedIn, refreshSession }
