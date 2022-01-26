const adminsRepository = require('./admins.repository')
const imageToBase64 = require('image-to-base64')
const AdminsException = require('./admins.exception')
const sizeOf = require('image-size')
const roles = require('./../constants/roles')
const fs = require('fs')

const MAX_LOGO_WIDTH = 300
const MAX_LOGO_HEIGHT = 150

const publicPath = file => `./public/${file}`
const tmpPath = file => `./public/tmp/${file}`

async function fetchLogo(logo) {
  return await imageToBase64(publicPath(logo))
}

function deleteFromTmp(logo) {
  fs.unlink(tmpPath(logo), error => {
    if (error) throw error
    console.log(`Borrado de los archivos temporales con éxito`)
  })
}

function storeLogo(logo) {
  fs.copyFile(tmpPath(logo), publicPath(logo), error => {
    if (error) throw error
    console.log(`El ${logo} ha sido guardado con éxito`)
  })
}

function areLogoDimensionsValid(logo) {
  const { width, height } = sizeOf(tmpPath(logo))

  return width <= MAX_LOGO_WIDTH && height <= MAX_LOGO_HEIGHT
}

async function readProfile(adminId) {
  const profile = await adminsRepository.readProfile(adminId)

  profile.password = undefined

  profile.logoAddress = undefined

  profile.role = roles.ADMIN

  return profile
}

async function readLogo(adminId) {
  // esto se deberia llamar logo_filename en la BD
  const { logoAddress } = await adminsRepository.readProfile(adminId)

  try {
    return await fetchLogo(logoAddress)
  } catch (error) {
    return await fetchLogo('fallback-logo.png')
  }
}

async function readLogoBySubdomain(subdomain) {
  // esto se deberia llamar logo_filename en la BD
  const { logoAddress } = await adminsRepository.readLogoBySubdomain(subdomain)

  try {
    return await fetchLogo(logoAddress)
  } catch (error) {
    return await fetchLogo('fallback-logo.png')
  }
}

async function updateLogo(logo, adminId) {
  if (!areLogoDimensionsValid(logo)) {
    deleteFromTmp(logo)

    throw new AdminsException(
      `El logo no debe ser mayor que ${MAX_LOGO_WIDTH}x${MAX_LOGO_HEIGHT} píxiles.`
    )
  }

  storeLogo(logo)
  deleteFromTmp(logo)
  await adminsRepository.updateLogo(logo, adminId)
}

module.exports = {
  readProfile,
  readLogo,
  updateLogo,
  readLogoBySubdomain,
}
