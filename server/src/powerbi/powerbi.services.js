const axios = require('axios')
const adal = require('adal-node')
const powerbiRepository = require('./powerbi.repository')

const getAccessToken = async () => {
  const config = {
    username: process.env.POWER_BI_USERNAME,
    password: process.env.POWER_BI_PASSWORD,
    clientId: process.env.POWER_BI_CLIENT_ID,
    resource: process.env.POWER_BI_RESOURCE,
  }

  const authority = 'https://login.windows.net/common/oauth2/token'

  let context = new adal.AuthenticationContext(authority, true)

  return new Promise((resolve, reject) => {
    context.acquireTokenWithUsernamePassword(
      config.resource,
      config.username,
      config.password,
      config.clientId,

      (err, accessToken) => {
        if (!err) {
          resolve(accessToken.accessToken) // Returns access token.
          // makeApiCall(accessToken.accessToken) // --> This is my actual API call.
        } else {
          reject(err)
        }
      }
    )
  })
}

async function getEmbedUrl(accessToken, groupId, reportId) {
  return await powerbiRepository.getEmbedUrl(accessToken, groupId, reportId)
}

module.exports = {
  getAccessToken,
  getEmbedUrl,
}
