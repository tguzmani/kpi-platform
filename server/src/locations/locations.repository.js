const connection = require('../../database')
const locationsQueries = require('./locations.queries')

async function readCountries() {
  return new Promise(resolve => {
    connection.query(
      locationsQueries.READ_COUNTRIES,
      [VALUES],
      (error, result) => {
        if (error) throw error

        return resolve(result)
      }
    )
  })
}

module.exports = { readCountries }
