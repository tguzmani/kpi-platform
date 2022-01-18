const adminsRepository = require('./admins.repository')
const imageToBase64 = require('image-to-base64')
const Exception = require('../common/exception')

function fetchLogo(logoName) {
  return `./public/${logoName}`
}

function validateLogo(logo) {
  const sizeOf = require('image-size')
  const { width, height } = sizeOf(fetchLogo(logo))

  if (width > 300 || height > 70)
    throw new Exception(
      'AdminsException',
      'El logo no debe ser mayor que 300x70 píxiles.'
    )
}

async function readProfile(adminId) {
  const profile = await adminsRepository.readProfile(adminId)

  profile.password = undefined

  profile.logoAddress = undefined

  return profile
}

async function readLogo(adminId) {
  // esto se deberia llamar logo_filename en la BD
  const { logoAddress } = await adminsRepository.readProfile(adminId)

  const logo = imageToBase64(fetchLogo(logoAddress))

  return logo
}

async function updateLogo(filename, adminId) {
  await adminsRepository.updateLogo(filename, adminId)

  validateLogo(filename)

  const logo = imageToBase64(fetchLogo(filename))

  return logo
}

module.exports = {
  readProfile,
  readLogo,
  updateLogo,
}
