const adminsRepository = require('./admins.repository')
const adminsRedisRepository = require('./admins.redis.repository')
const AdminsException = require('./admins.exception')
const encrypt = require('../common/encrypt')

async function compareAdminsIds(adminId) {
  const sessionAdminId = await adminsRedisRepository.getById(adminId)

  return sessionAdminId === adminId
}

async function signIn(name, password) {
  const admin = await adminsRepository.readByName(name)

  if (!admin) throw new AdminsException('El usuario no existe')

  const passwordsMatch = await encrypt.compare(password, admin.password)
  const sessionIsActive = await compareAdminsIds(admin.id)

  if (!passwordsMatch) throw new AdminsException('Contraseña no válida')

  if (sessionIsActive) {
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

module.exports = { signIn, signOut, compareAdminsIds, refreshSession }
