const usersRepository = require('./users.repository')
const UsersException = require('./users.exception')
const roles = require('./../constants/roles')

function reportGroupsByUser(reportGroups, userId) {
  return reportGroups
    .filter(reportGroup => reportGroup.userId === userId)
    .map(reportGroup => reportGroup.reportGroupId)
}

// users functions

async function readProfile(userId) {
  const profile = await usersRepository.readProfile(userId)

  profile.password = undefined

  profile.role = roles.USER

  return profile
}

// admin functions

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

async function readOneUserByAdmin(userId, adminId) {
  const users = await readUsersByAdminId(adminId)

  return users.find(user => user.id === userId)
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

const userFunctions = {
  readProfile,
}

const adminFunctions = {
  readUsersByAdminId,
  createUserByAdmin,
  connectUserToReportGroups,
  updateConnectionUserToReportGroup,
  updateUser,
  readOneUserByAdmin,
}

module.exports = { ...userFunctions, ...adminFunctions }
