const workspacesRepository = require('./workspaces.repository')

async function readWorkspacesByAdmin(adminId) {
  return await workspacesRepository.readWorkspacesByAdmin(adminId)
}

module.exports = {
  readWorkspacesByAdmin,
}
