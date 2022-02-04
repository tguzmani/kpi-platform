const usersGroupsRepository = require('./usersGroups.repository')

async function readUsersGroups(adminId) {
  const usersGroups = await usersGroupsRepository.readUsersGroups(adminId)

  const usersGroupsWithUsers = usersGroups.map(async usersGroup => ({
    ...usersGroup,
    usersIds: await usersGroupsRepository.readUsersGroupsUsers(
      adminId,
      usersGroup.id
    ),
  }))

  return Promise.all(usersGroupsWithUsers)
}

module.exports = {
  readUsersGroups,
}
