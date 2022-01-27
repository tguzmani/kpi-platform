const sectionsServices = require('./sections.services')

async function readSectionsByAdmin(req, res) {
  try {
    const services = await sectionsServices.readSectionsByAdmin(req.userId)

    res.send(services)
  } catch (error) {
    return res.status(400).send(error.message)
  }
}

module.exports = {
  readSectionsByAdmin,
}
