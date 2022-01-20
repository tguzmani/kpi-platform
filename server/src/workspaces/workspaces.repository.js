const connection = require('../../database')
const workspacesQueries = require('./workspaces.queries')

async function readWorkspacesByAdmin(adminId) {
  return new Promise(resolve => {
    connection.query(
      workspacesQueries.READ_WORKSPACES_BY_ADMIN,
      [adminId],
      (error, result) => {
        if (error) throw error

        resolve(result)
      }
    )
  })
}

module.exports = {
  readWorkspacesByAdmin,
}
