const reportsServices = require('./reports.services')

async function readReportsGroupsHeadersByAdmin(req, res) {
  try {
    const reportsHeaders =
      await reportsServices.readReportsGroupsHeadersByAdmin(req.userId)

    res.send(reportsHeaders)
  } catch (error) {
    return res.status(400).send(error)
  }
}

async function readReportsByAdmin(req, res) {
  try {
    const reportsHeaders = await reportsServices.readReportsByAdmin(req.userId)

    res.send(reportsHeaders)
  } catch (error) {
    return res.status(400).send(error)
  }
}

async function readUsersReportsByAdmin(req, res) {
  try {
    const reports = await reportsServices.readUsersReportsByAdmin(req.userId)

    res.send(reports)
  } catch (error) {
    return res.status(400).send(error)
  }
}

async function readAccountReportsByAdmin(req, res) {
  try {
    const reports = await reportsServices.readAccountReportsByAdmin(req.userId)

    res.send(reports)
  } catch (error) {
    return res.status(400).send(error)
  }
}

async function updateReportActiveStateByAdmin(req, res) {
  try {
    await reportsServices.updateReportActiveStateByAdmin(
      req.userId,
      req.params.reportId,
      req.body.active
    )

    const adminReports = await reportsServices.readAccountReportsByAdmin(
      req.userId
    )

    res.send(adminReports)
  } catch (error) {
    return res.status(400).send(error)
  }
}

async function createReportsGroupByAdmin(req, res) {
  try {
    const { code, name, active, sections } = req.body

    await reportsServices.createReportsGroupByAdmin(
      req.userId,
      code,
      name,
      active,
      sections
    )

    res.send({ message: 'Grupo de reportes creado exitosamente' })
  } catch (error) {
    return res.status(400).send(error)
  }
}

async function updateReportsGroupByAdmin(req, res) {
  try {
    const { code, name, active, sections } = req.body

    await reportsServices.updateReportsGroupByAdmin(
      req.params.reportsGroupId,
      code,
      name,
      active,
      sections
    )

    const reportsGroup = await reportsServices.readOneReportsGroupHeader(
      req.userId,
      parseInt(req.params.reportsGroupId)
    )

    console.log('reportsGroup', reportsGroup)
    res.send(reportsGroup)
  } catch (error) {
    return res.status(400).send(error.stack)
  }
}

module.exports = {
  readReportsGroupsHeadersByAdmin,
  readReportsByAdmin,
  readAccountReportsByAdmin,
  readUsersReportsByAdmin,
  updateReportActiveStateByAdmin,
  createReportsGroupByAdmin,
  updateReportsGroupByAdmin,
}
