const usersRepository = require('./users.repository')
const UsersException = require('./users.exception')

function reportGroupsByUser(reportGroups, userId) {
  return reportGroups
    .filter(reportGroup => reportGroup.userId === userId)
    .map(reportGroup => reportGroup.reportGroupId)
}

async function readUsersByAdminId(adminId) {
  const users = await usersRepository.readUsersByAdminId(adminId)

  const reportGroups = await usersRepository.readUsersReportsGroupsByAdmin(
    adminId
  )

  const usersWithReportGroups = users.map(user => ({
    ...user,
    reportGroups: reportGroupsByUser(reportGroups, user.id),
  }))

  return usersWithReportGroups
}

async function createUserByAdmin(user) {
  return await usersRepository.createUserByAdmin(user)
}

async function connectUserToReportGroups(userId, reportGroupsIds) {
  await usersRepository.connectUserToReportGroups(userId, reportGroupsIds)
}

async function updateConnectionUserToReportGroup(userId, reportGroupsIds) {
  await usersRepository.deleteConnectionUserToReportGroups(userId)
  await usersRepository.connectUserToReportGroups(userId, reportGroupsIds)
}

async function updateUser(user) {
  await usersRepository.updateUser(user)
}

module.exports = {
  readUsersByAdminId,
  createUserByAdmin,
  connectUserToReportGroups,
  updateConnectionUserToReportGroup,
  updateUser,
}
