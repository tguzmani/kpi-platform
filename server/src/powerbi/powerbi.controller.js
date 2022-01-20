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

    console.log('culo', groupId, 'xdd', reportId)

    const accessToken = await powerbiServices.getAccessToken()

    const embedUrl = await powerbiServices.getEmbedUrl(
      bearerToken(accessToken),
      groupId,
      reportId
    )

    res.send({ accessToken, embedUrl })
  } catch (error) {
    return res.status(400).send(error)
  }
}

module.exports = { getAccessToken, getReportData }
