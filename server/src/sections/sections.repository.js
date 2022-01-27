const connection = require('../../database')
const sectionsQueries = require('./sections.queries')

async function readSectionsByAdmin(adminId) {
  return new Promise(resolve => {
    connection.query(
      sectionsQueries.READ_SECTIONS_BY_ADMIN,
      [adminId],
      (error, result) => {
        if (error) throw error

        return resolve(result)
      }
    )
  })
}

module.exports = {
  readSectionsByAdmin,
}
