const connection = require('../../database')
const usersQueries = require('./users.queries')

async function readUsersByAdminId(adminId) {
  return new Promise(resolve => {
    connection.query(
      usersQueries.READ_USERS_BY_ADMIN_ID,
      [adminId],
      (error, result) => {
        if (error) throw error

        return resolve(result)
      }
    )
  })
}

async function readUsersReportsGroupsByAdmin(userId) {
  return new Promise(resolve => {
    connection.query(
      usersQueries.READ_USERS_REPORTS_GROUPS_BY_ADMIN,
      [userId],
      (error, result) => {
        if (error) throw error

        return resolve(result)
      }
    )
  })
}

async function createUserByAdmin(user) {
  return new Promise(resolve => {
    connection.query(
      usersQueries.CREATE_USER_BY_ADMIN,
      user,
      (error, result) => {
        if (error) throw error

        return resolve(result.insertId)
      }
    )
  })
}

async function updateUser(user) {
  connection.query(usersQueries.UPDATE_USER, user, (error, result) => {
    if (error) throw error
  })
}

async function connectUserToReportGroups(userId, reportGroupsIds) {
  const values = reportGroupsIds.map(id => [userId, id])

  connection.query(
    usersQueries.CONNECT_USER_TO_REPORT_GROUPS,
    [values],
    async error => {
      if (error) throw error
    }
  )
}

async function deleteConnectionUserToReportGroups(userId) {
  connection.query(
    usersQueries.DELETE_CONNECTION_USER_TO_REPORT_GROUPS,
    [userId],
    async error => {
      if (error) throw error
    }
  )
}

module.exports = {
  readUsersByAdminId,
  readUsersReportsGroupsByAdmin,
  createUserByAdmin,
  connectUserToReportGroups,
  updateUser,
  deleteConnectionUserToReportGroups,
}
