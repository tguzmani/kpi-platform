const axios = require('axios')
const adal = require('adal-node')

const POWER_BI_API_BASE_URL = 'https://api.powerbi.com/v1.0/myorg/'

const config = {
  username: process.env.POWER_BI_USERNAME,
  password: process.env.POWER_BI_PASSWORD,
  clientId: process.env.POWER_BI_CLIENT_ID,
  resource: process.env.POWER_BI_RESOURCE,
}

async function generateHeaders() {
  const token = await getAccessToken(config)

  return {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    },
  }
}

async function getAccessToken() {
  const authority = 'https://login.windows.net/common/oauth2/token'

  let context = new adal.AuthenticationContext(authority, true)

  return new Promise((resolve, reject) => {
    context.acquireTokenWithUsernamePassword(
      config.resource,
      config.username,
      config.password,
      config.clientId,

      (error, accessToken) => {
        if (!error) {
          resolve(accessToken.accessToken)
        } else {
          reject(err)
        }
      }
    )
  })
}

async function getEmbedUrl(groupId, reportId) {
  try {
    const response = await axios.get(
      `${POWER_BI_API_BASE_URL}/groups/${groupId}/reports/${reportId}`,
      await generateHeaders()
    )

    return response.data.embedUrl
  } catch (error) {
    console.log(error.message)
  }
}

async function getReportsInGroup(groupId) {
  try {
    const response = await axios.get(
      `${POWER_BI_API_BASE_URL}/groups/${groupId}/reports`,
      await generateHeaders()
    )

    return response.data.value
  } catch (error) {
    console.log(error.message)
  }
}

async function getPagesInReport(reportId) {
  try {
    const response = await axios.get(
      `${POWER_BI_API_BASE_URL}/reports/${reportId}/pages`,
      await generateHeaders()
    )

    return response.data.value
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = {
  getEmbedUrl,
  getAccessToken,
  getReportsInGroup,
  getPagesInReport,
}
