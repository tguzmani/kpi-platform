const connection = require('../../database')
const reportsQueries = require('./reports.queries')

async function readReportGroupsHeadersByAdmin(adminId) {
  return new Promise(resolve => {
    connection.query(
      reportsQueries.READ_REPORT_GROUPS_HEADERS_BY_ADMIN,
      [adminId],
      (error, result) => {
        if (error) throw error

        resolve(result)
      }
    )
  })
}

async function readReportsByAdmin(adminId) {
  return new Promise(resolve => {
    connection.query(
      reportsQueries.READ_REPORTS_BY_ADMIN,
      [adminId],
      (error, result) => {
        if (error) throw error

        resolve(result)
      }
    )
  })
}

async function readAccountReportsByAdmin(adminId) {
  return new Promise(resolve => {
    connection.query(
      reportsQueries.READ_ACCOUNT_REPORTS_BY_ADMIN,
      [adminId],
      (error, result) => {
        if (error) throw error

        resolve(result)
      }
    )
  })
}

async function readUsersReportsByAdmin(adminId) {
  return new Promise(resolve => {
    connection.query(
      reportsQueries.READ_USERS_REPORTS_BY_ADMIN,
      [adminId],
      (error, result) => {
        if (error) throw error

        resolve(result)
      }
    )
  })
}

async function updateReportActiveStateByAdmin(active, reportId) {
  connection.query(
    reportsQueries.UPDATE_REPORT_ACTIVE_STATE_BY_ADMIN,
    [active, reportId],
    (error, result) => {
      if (error) throw error
    }
  )
}

module.exports = {
  readReportGroupsHeadersByAdmin,
  readReportsByAdmin,
  readAccountReportsByAdmin,
  readUsersReportsByAdmin,
  updateReportActiveStateByAdmin,
}
