const adminService = require('./admins.services')

async function readProfile(req, res) {
  try {
    const profile = await adminService.readProfile(req.userId)

    res.send(profile)
  } catch (error) {
    return res.status(400).send(error.stack)
  }
}

async function readLogo(req, res) {
  try {
    const logo = await adminService.readLogo(req.userId)

    res.send(logo)
  } catch (error) {
    return res.status(400).send(error.stack)
  }
}

async function updateLogo(req, res) {
  try {
    res.send({ message: 'Logo actualizado con éxito' })
  } catch (error) {
    return res.status(400).send(error.stack)
  }
}

module.exports = { readProfile, readLogo, updateLogo }
