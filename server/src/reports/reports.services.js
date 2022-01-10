const reportsRepository = require('./reports.repository')

async function readReportGroupsHeadersByAdmin(adminId) {
  return await reportsRepository.readReportGroupsHeadersByAdmin(adminId)
}

async function readReportsByAdmin(adminId) {
  return await reportsRepository.readReportsByAdmin(adminId)
}

async function readAccountReportsByAdmin(adminId) {
  return await reportsRepository.readAccountReportsByAdmin(adminId)
}

async function updateReportActiveStateByAdmin(active, reportId) {
  await reportsRepository.updateReportActiveStateByAdmin(active, reportId)
}

async function readUsersReportsByAdmin(adminId) {
  return await reportsRepository.readUsersReportsByAdmin(adminId)
}

module.exports = {
  readReportGroupsHeadersByAdmin,
  readReportsByAdmin,
  readAccountReportsByAdmin,
  readUsersReportsByAdmin,
  updateReportActiveStateByAdmin,
}
