const connection = require('../../database')
const adminQueries = require('./admins.queries')

async function readProfile(adminId) {
  return new Promise((resolve, reject) =>
    connection.query(
      adminQueries.READ_PROFILE,
      [adminId],
      async (error, rows) => {
        if (error) throw reject(error)

        const user = rows.pop()

        return resolve(user)
      }
    )
  )
}

async function readByName(name) {
  return new Promise((resolve, reject) =>
    connection.query(adminQueries.READ_BY_NAME, [name], async (error, rows) => {
      if (error) throw reject(error)

      const user = rows.pop()

      return resolve(user)
    })
  )
}

async function updateLogo(logoAddress, adminId) {
  connection.query(
    adminQueries.READ_BY_NAME,
    [logoAddress, adminId],
    async (error, rows) => {
      if (error) throw reject(error)
    }
  )
}

module.exports = {
  readProfile,
  readByName,
  updateLogo,
}
