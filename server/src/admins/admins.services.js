const adminsRepository = require('./admins.repository')
const imageToBase64 = require('image-to-base64')
const Exception = require('../common/exception')

function fetchLogo(logoName) {
  return `./public/${logoName}`
}

function areLogoDimensionsValid(logo) {
  const sizeOf = require('image-size')
  const { width, height } = sizeOf(fetchLogo(logo))

  return width <= 300 && height <= 70
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
  if (!areLogoDimensionsValid(filename))
    throw new Exception(
      'AdminsException',
      'El logo no debe ser mayor que 300x70 píxiles.'
    )

  await adminsRepository.updateLogo(filename, adminId)

  const logo = imageToBase64(fetchLogo(filename))

  return logo
}

module.exports = {
  readProfile,
  readLogo,
  updateLogo,
}
