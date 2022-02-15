const reportsRepository = require('./reports.repository')

function sectionsByReportsGroupHeader(sections, reportsGroupHeaderId) {
  return sections
    .filter(section => section.reportsGroupHeaderId === reportsGroupHeaderId)
    .map(section => section.id)
}

async function readReportsGroupsHeadersByAdmin(adminId) {
  const reportsGroupHeaders =
    await reportsRepository.readReportsGroupsHeadersByAdmin(adminId)

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

async function readOneReportsGroupHeader(adminId, reportsGroupId) {
  const reportsGroupsHeadersWithSections =
    await readReportsGroupsHeadersByAdmin(adminId)

  return reportsGroupsHeadersWithSections.find(
    reportsGroup => reportsGroup.id === reportsGroupId
  )
}

async function readReportsByAdmin(adminId) {
  return await reportsRepository.readReportsByAdmin(adminId)
}

async function readAccountReportsByAdmin(adminId) {
  return await reportsRepository.readAccountReportsByAdmin(adminId)
}

async function updateReportActiveStateByAdmin(adminId, reportId, active) {
  await reportsRepository.updateReportActiveStateByAdmin(
    adminId,
    reportId,
    active
  )
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

async function updateReportsGroupByAdmin(
  reportsGroupId,
  code,
  name,
  active,
  sections
) {
  await reportsRepository.updateReportsGroupsHeaders(
    code,
    name,
    active,
    reportsGroupId
  )

  await reportsRepository.deleteReportsGroupBody(reportsGroupId)

  sections.forEach(async section => {
    console.log('section', section)
    await reportsRepository.createReportsGroupBodyByAdmin(
      reportsGroupId,
      section
    )
  })
}

module.exports = {
  readReportsGroupsHeadersByAdmin,
  readReportsByAdmin,
  readAccountReportsByAdmin,
  readUsersReportsByAdmin,
  createReportsGroupByAdmin,
  updateReportActiveStateByAdmin,
  updateReportsGroupByAdmin,
  readOneReportsGroupHeader,
}
