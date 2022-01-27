const reportsRepository = require('./reports.repository')

function sectionsByReportsGroupHeader(sections, reportsGroupHeaderId) {
  return sections
    .filter(section => section.reportsGroupHeaderId === reportsGroupHeaderId)
    .map(section => section.id)
}

async function readReportGroupsHeadersByAdmin(adminId) {
  const reportsGroupHeaders =
    await reportsRepository.readReportGroupsHeadersByAdmin(adminId)

  const sections = await reportsRepository.readReportsGroupsHeadersSections()

  const reportsGroupsHeadersWithSections = reportsGroupHeaders.map(
    reportsGroupHeader => ({
      ...reportsGroupHeader,
      sectionsIds: sectionsByReportsGroupHeader(
        sections,
        reportsGroupHeader.id
      ),
    })
  )

  return reportsGroupsHeadersWithSections
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

async function createReportsGroupByAdmin(
  adminId,
  code,
  name,
  active,
  sections
) {
  const reportsGroupHeaderId =
    await reportsRepository.createReportsGroupHeaderByAdmin(
      adminId,
      code,
      name,
      active
    )

  sections.forEach(async section => {
    await reportsRepository.createReportsGroupBodyByAdmin(
      reportsGroupHeaderId,
      section
    )
  })
}

module.exports = {
  readReportGroupsHeadersByAdmin,
  readReportsByAdmin,
  readAccountReportsByAdmin,
  readUsersReportsByAdmin,
  createReportsGroupByAdmin,
  updateReportActiveStateByAdmin,
}
