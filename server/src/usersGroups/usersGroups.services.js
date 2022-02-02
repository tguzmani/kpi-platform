const usersGroupsRepository = require('./usersGroups.repository')

async function readUsersGroups(adminId) {
  return await usersGroupsRepository.readUsersGroups(adminId)
}

module.exports = {
  readUsersGroups,
}
