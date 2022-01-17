const axios = require('axios')

const POWER_BI_API_BASE_URL = 'https://api.powerbi.com/v1.0/myorg/groups/'

async function getEmbedUrl(accessToken, groupId, reportId) {
  try {
    const config = {
      headers: {
        Authorization: accessToken,
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
      },
    }

    const response = await axios.get(
      POWER_BI_API_BASE_URL + `${groupId}/reports/${reportId}`,
      config
    )

    return response.data.embedUrl
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = { getEmbedUrl }
