const redisClient = require('../../redis')

const SESSION_DURATION = 300

class RedisRepository {
  constructor(entity) {
    this.entity = entity
  }

  entityKey(entityId) {
    return `${this.entity}-${entityId}`
  }

  async setExpirationById(entityId) {
    await redisClient.expire(this.entityKey(entityId), SESSION_DURATION)
  }

  async addById(entityId) {
    await redisClient.set(this.entityKey(entityId), entityId.toString())
    await this.setExpirationById(entityId)
  }

  async removeById(entityId) {
    await redisClient.del(this.entityKey(entityId))
  }

  async getById(entityId) {
    const entityIdString = await redisClient.get(this.entityKey(entityId))
    return parseInt(entityIdString)
  }
}

module.exports = RedisRepository
