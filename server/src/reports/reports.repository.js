const connection = require('../../database')
const reportsQueries = require('./reports.queries')

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

async function createReportsGroupBodyByAdmin(reportsGroupHeaderId, sectionId) {
  connection.query(
    reportsQueries.CREATE_REPORTS_GROUP_BODY_BY_ADMIN,
    [reportsGroupHeaderId, sectionId, sectionId],
    (error, result) => {
      if (error) throw error
    }
  )
}

async function readReportsGroupsHeadersByAdmin(adminId) {
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

async function updateReportActiveStateByAdmin(adminId, reportId, active) {
  connection.query(
    reportsQueries.UPDATE_REPORT_ACTIVE_STATE_BY_ADMIN,
    [active, adminId, reportId],
    (error, result) => {
      if (error) throw error
    }
  )
}

async function updateReportsGroupsHeaders(code, name, active, reportId) {
  connection.query(
    reportsQueries.UPDATE_REPORTS_GROUP_HEADER_BY_ADMIN,
    [code, name, active, reportId],
    (error, _) => {
      if (error) throw error
    }
  )
}

async function deleteReportsGroupBody(reportId) {
  connection.query(
    reportsQueries.DELETE_REPORTS_GROUP_BODY,
    [reportId],
    (error, _) => {
      if (error) throw error
    }
  )
}

module.exports = {
  createReportsGroupHeaderByAdmin,
  createReportsGroupBodyByAdmin,

  readReportsGroupsHeadersByAdmin,
  readReportsByAdmin,
  readAccountReportsByAdmin,
  readUsersReportsByAdmin,
  readReportsGroupsHeadersSections,

  updateReportActiveStateByAdmin,
  updateReportsGroupsHeaders,

  deleteReportsGroupBody,
}
