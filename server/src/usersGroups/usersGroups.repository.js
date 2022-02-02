const connection = require('../../database')
const usersGroupsQueries = require('./usersGroups.queries')

async function readUsersGroups(adminId) {
  return new Promise(resolve => {
    connection.query(
      usersGroupsQueries.READ_USERS_GROUPS,
      [adminId],
      (error, result) => {
        if (error) throw error

        return resolve(result)
      }
    )
  })
}

module.exports = {
  readUsersGroups,
}
