const contractsRepository = require('./contracts.repository')
const ContractException = require('./contracts.exception')

async function createContractByAdmin(
  adminId,
  identityDocumentId,
  identityDocumentValue,
  address,
  zoneId,
  contractName
) {
  return await contractsRepository.createContractByAdmin(
    adminId,
    identityDocumentId,
    identityDocumentValue,
    address,
    zoneId,
    contractName
  )
}

async function createContractDetailsByAdmin(contractId, details) {
  await contractsRepository.createContractDetailsByAdmin(contractId, details)
}

async function updateContractDetailByAdmin(contractDetailId, quantity) {
  if (quantity <= 0)
    throw new ContractException('La cantidad debe ser positiva')

  await contractsRepository.updateContractDetailByAdmin(
    contractDetailId,
    quantity
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
  await contractsRepository.updateContractByAdmin(
    identityDocumentId,
    identityDocumentValue,
    address,
    zoneId,
    contractName,
    contractId
  )
}

module.exports = {
  createContractByAdmin,
  updateContractByAdmin,
  createContractDetailsByAdmin,
  updateContractDetailByAdmin,
}
