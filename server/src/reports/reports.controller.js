const reportsServices = require('./reports.services')

async function readReportGroupsHeadersByAdmin(req, res) {
  try {
    const reportsHeaders = await reportsServices.readReportGroupsHeadersByAdmin(
      req.userId
    )

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
      req.body.active,
      req.params.reportId
    )

    res.send('Reporte actualizado con éxito')
  } catch (error) {
    return res.status(400).send(error)
  }
}

module.exports = {
  readReportGroupsHeadersByAdmin,
  readReportsByAdmin,
  readAccountReportsByAdmin,
  readUsersReportsByAdmin,
  updateReportActiveStateByAdmin,
}
