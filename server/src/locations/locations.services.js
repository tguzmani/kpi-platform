const locationsRepository = require('./locations.repository')

async function readCountries(PARAMS) {
  await locationsRepository.readCountries(PARAMS)
}

module.exports = { readCountries }
