const powerbiRepository = require('./powerbi.repository')

const getAccessToken = async () => {
  return await powerbiRepository.getAccessToken()
}

async function getEmbedUrl(groupId, reportId) {
  return await powerbiRepository.getEmbedUrl(groupId, reportId)
}

async function getReportsInGroup(groupId) {
  return await powerbiRepository.getReportsInGroup(groupId)
}

async function getPagesInReport(groupId) {
  return await powerbiRepository.getPagesInReport(groupId)
}

module.exports = {
  getAccessToken,
  getEmbedUrl,
  getReportsInGroup,
  getPagesInReport,
}
