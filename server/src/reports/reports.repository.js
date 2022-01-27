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

async function createReportsGroupHeaderByAdmin(adminId, code, name, active) {
  return new Promise(resolve => {
    connection.query(
      reportsQueries.CREATE_REPORTS_GROUP_HEADER_BY_ADMIN,
      [adminId, code, name, active],
      (error, result) => {
        if (error) throw error

        return resolve(result.insertId)
      }
    )
  })
}

async function readReportsGroupsHeadersSections() {
  return new Promise(resolve => {
    connection.query(
      reportsQueries.READ_REPORTS_GROUPS_HEADERS_SECTIONS,
      [],
      (error, result) => {
        if (error) throw error

        return resolve(result)
      }
    )
  })
}

async function createReportsGroupBodyByAdmin(reportsGroupHeaderId, sectionId) {
  connection.query(
    reportsQueries.CREATE_REPORTS_GROUP_BODY_BY_ADMIN,
    [reportsGroupHeaderId, sectionId, sectionId],
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
  createReportsGroupHeaderByAdmin,
  createReportsGroupBodyByAdmin,
  readReportsGroupsHeadersSections,
}
