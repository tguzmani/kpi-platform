const adminsRepository = require('./admins.repository')
const imageToBase64 = require('image-to-base64')

async function readProfile(adminId) {
  const profile = await adminsRepository.readProfile(adminId)

  profile.password = undefined

  profile.logoAddress = undefined

  return profile
}

async function readLogo(adminId) {
  const { logoAddress } = await adminsRepository.readProfile(adminId)

  const logo = imageToBase64('./src/images/' + logoAddress)

  return logo
}

async function updateLogo(adminId) {
  const profile = await adminsRepository.readProfile(adminId)

  const logoAddress = `${profile - id}-${profile.name}-logo`

  await adminsRepository.loadLogo(adminId)
}

module.exports = {
  readProfile,
  readLogo,
  updateLogo,
}
