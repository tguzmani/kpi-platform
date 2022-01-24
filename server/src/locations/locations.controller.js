const locationsServices = require('./locations.services')

async function readCountries(req, res) {
  try {
    await locationsServices.readCountries(PARAMS)

    res.send(RESPONSE)
  } catch (error) {
    return res.status(400).send(error)
  }
}

module.exports = { readCountries }
