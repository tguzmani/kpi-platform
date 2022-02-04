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

async function readUsersGroupsUsers(adminId, usersGroupId) {
  return new Promise(resolve => {
    connection.query(
      { sql: usersGroupsQueries.READ_USERS_GROUPS_USERS, rowsAsArray: true },
      [adminId, usersGroupId],
      (error, result) => {
        if (error) throw error

        return resolve(result.flat())
      }
    )
  })
}

module.exports = {
  readUsersGroups,
  readUsersGroupsUsers,
}
