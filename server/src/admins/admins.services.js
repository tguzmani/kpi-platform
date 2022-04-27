const adminsRepository = require('./admins.repository')
const imageToBase64 = require('image-to-base64')
const AdminsException = require('./admins.exception')
const sizeOf = require('image-size')
const roles = require('./../constants/roles')
const fs = require('fs')
const encrypt = require('../common/encrypt')

const MAX_LOGO_WIDTH = 300
const MAX_LOGO_HEIGHT = 70

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
  const termsAndConditions = await adminsRepository.readAdminTermsAndConditions(
    adminId
  )

  profile.password = undefined
  profile.logoAddress = undefined

  profile.role = roles.ADMIN
  profile.termsAndConditions = termsAndConditions

  return profile
}

async function readLogo(adminId) {
  // esto se deberia llamar logo_filename en la BD

  try {
    const { logoAddress } = await adminsRepository.readProfile(adminId)
    return await fetchLogo(logoAddress)
  } catch (error) {
    return await fetchLogo('fallback-logo.png')
  }
}

async function acceptTermsAndConditions(adminId, termsAndConditionsId) {
  await adminsRepository.acceptTermsAndConditions(adminId, termsAndConditionsId)
}

async function readLogoBySubdomain(subdomain) {
  // esto se deberia llamar logo_filename en la BD

  try {
    const { logoAddress } = await adminsRepository.readLogoBySubdomain(
      subdomain
    )
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

async function changePassword(adminId, newPassword) {
  const hashedPassword = await encrypt.hash(newPassword)

  await adminsRepository.updatePassword(adminId, hashedPassword)
}

async function changeUserPassword(userId, newPassword) {
  const hashedPassword = await encrypt.hash(newPassword)

  await adminsRepository.updateUserPassword(userId, hashedPassword)
}

module.exports = {
  readProfile,
  readLogo,
  updateLogo,
  readLogoBySubdomain,
  acceptTermsAndConditions,
  changePassword,
  changeUserPassword,
}
