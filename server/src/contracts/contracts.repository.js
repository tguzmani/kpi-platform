const connection = require('../../database')
const contractsQueries = require('./contracts.queries')

// documentId = id_int_id_type
async function createContractByAdmin(
  adminId,
  identityDocumentId,
  identityDocumentValue,
  address,
  zoneId,
  contractName
) {
  return new Promise(resolve => {
    connection.query(
      contractsQueries.CREATE_CONTRACT_BY_ADMIN,
      Array.from(arguments),
      (error, result) => {
        if (error) throw error

        return resolve(result.insertId)
      }
    )
  })
}

async function createContractDetailsByAdmin(contractId, details) {
  const contractDetails = details.map(detail => [contractId, detail])

  connection.query(
    contractsQueries.CREATE_CONTRACT_DETAILS_BY_ADMIN,
    [contractDetails],
    (error, result) => {
      if (error) throw error
    }
  )
}

async function updateContractByAdmin(
  identityDocumentId,
  identityDocumentValue,
  address,
  zoneId,
  contractName,
  contractId
) {
  connection.query(
    contractsQueries.UPDATE_CONTRACT_BY_ADMIN,
    Array.from(arguments),
    (error, result) => {
      if (error) throw error
    }
  )
}

async function updateContractDetailByAdmin(contractDetailId, quantity) {
  connection.query(
    contractsQueries.UPDATE_CONTRACT_DETAIL_BY_ADMIN,
    [quantity, contractDetailId],
    (error, result) => {
      if (error) throw error
    }
  )
}

module.exports = {
  createContractByAdmin,
  updateContractByAdmin,
  createContractDetailsByAdmin,
  updateContractDetailByAdmin,
}
