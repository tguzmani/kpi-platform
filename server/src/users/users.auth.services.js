const usersRepository = require('./users.repository')

const usersRedisRepository = require('./users.redis.repository')
const UsersException = require('./users.exception')

async function isUserLoggedIn(userId) {
  return await usersRedisRepository.getById(userId)
}

async function signIn(name, password) {
  const user = await usersRepository.readByName(name)

  if (!user) throw new UsersException('El usuario no existe')

  if (password !== user.password)
    throw new UsersException('Contraseña no válida')

  if ((await isUserLoggedIn(user.id)) === user.id) {
    throw new UsersException('Ya existe un usuario en el sistema')
  }

  usersRedisRepository.addById(user.id)

  return user.id
}

async function signOut(userId) {
  await usersRedisRepository.removeById(userId)
}

async function refreshSession(userId) {
  await adminsRedisRepository.setExpirationById(userId)
}

module.exports = { signIn, signOut, isUserLoggedIn, refreshSession }
