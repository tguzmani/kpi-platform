const redisClient = require('../../redis')

const SESSION_DURATION = 300

async function setExpirationById(adminId) {
  await redisClient.expire(adminId.toString(), SESSION_DURATION)
}

async function addAdminId(adminId) {
  await redisClient.set(adminId.toString(), adminId.toString())
  await setExpirationById(adminId)
}

async function removeAdminId(adminId) {
  await redisClient.del(adminId.toString())
}

async function getAdminById(adminId) {
  const adminIdString = await redisClient.get(adminId.toString())

  return parseInt(adminIdString)
}

module.exports = { addAdminId, removeAdminId, getAdminById, setExpirationById }
