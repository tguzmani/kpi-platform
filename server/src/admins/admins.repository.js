const connection = require('../../database')
const adminsQueries = require('./admins.queries')

async function readProfile(adminId) {
  return new Promise((resolve, reject) =>
    connection.query(
      adminsQueries.READ_PROFILE,
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
    connection.query(
      adminsQueries.READ_BY_NAME,
      [name],
      async (error, rows) => {
        if (error) throw reject(error)

        const user = rows.pop()

        return resolve(user)
      }
    )
  )
}

async function updateLogo(logoAddress, adminId) {
  connection.query(
    adminsQueries.UPDATE_LOGO,
    [logoAddress, adminId],
    async (error, rows) => {
      if (error) throw reject(error)
    }
  )
}

async function readLogoBySubdomain(subdomain) {
  return new Promise((resolve, reject) =>
    connection.query(
      adminsQueries.READ_LOGO_BY_SUBDOMAIN,
      [subdomain],
      async (error, rows) => {
        if (error) throw reject(error)

        const user = rows.pop()

        return resolve(user)
      }
    )
  )
}

module.exports = {
  readProfile,
  readByName,
  updateLogo,
  readLogoBySubdomain,
}
