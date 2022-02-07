const usersGroupsRepository = require('./usersGroups.repository')

async function readUsersGroups(adminId) {
  const usersGroups = await usersGroupsRepository.readUsersGroups(adminId)

  const usersGroupsWithUsers = await Promise.all(
    usersGroups.map(async usersGroup => ({
      ...usersGroup,
      usersIds: await usersGroupsRepository.readUsersGroupsUsers(
        adminId,
        usersGroup.id
      ),
    }))
  )

  const readUsersGroupsReportsGroups = usersGroupsWithUsers.map(
    async usersGroup => ({
      ...usersGroup,
      reportsGroupsIds:
        await usersGroupsRepository.readUsersGroupsReportsGroups(
          adminId,
          usersGroup.id
        ),
    })
  )

  return Promise.all(readUsersGroupsReportsGroups)
}

module.exports = {
  readUsersGroups,
}
