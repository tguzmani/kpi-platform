const currenciesServices = require('./currencies.services')

async function readCurrencies(req, res) {
  try {
    const countries = await currenciesServices.readCurrencies()

    res.send(countries)
  } catch (error) {
    return res.status(400).send(error)
  }
}

module.exports = { readCurrencies }
