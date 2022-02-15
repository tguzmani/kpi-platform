const powerbiServices = require('./powerbi.services')

function bearerToken(token) {
  return `Bearer ${token}`
}

async function getAccessToken(req, res) {
  try {
    const token = await powerbiServices.getAccessToken()

    res.send({ token })
  } catch (error) {
    return res.status(400).send(error)
  }
}

async function getReportData(req, res) {
  try {
    const { groupId, reportId } = req.body

    const embedUrl = await powerbiServices.getEmbedUrl(groupId, reportId)

    res.send({ accessToken, embedUrl })
  } catch (error) {
    return res.status(400).send(error)
  }
}

async function getReportsInGroup(req, res) {
  try {
    const { groupId } = req.query

    const reports = await powerbiServices.getReportsInGroup(groupId)

    res.send(reports)
  } catch (error) {
    return res.status(400).send(error)
  }
}

async function getPagesInReport(req, res) {
  try {
    const { reportId } = req.query

    const reports = await powerbiServices.getPagesInReport(reportId)

    res.send(reports)
  } catch (error) {
    return res.status(400).send(error)
  }
}

module.exports = {
  getAccessToken,
  getReportData,
  getReportsInGroup,
  getPagesInReport,
}
